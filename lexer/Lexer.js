const PeekIterator = require("../common/PeekIterator")
const TokenType = require("./TokenType")
const Token = require("./Token")
const AlphabetHelper = require("./AlphabetHelper")
const LexicalException = require("./LexicalException");

class Lexer {
    analyse(source) {
        const token = []
        const it = new PeekIterator(source, '\0')

        while (it.hasNext()) {
            let c = it.next()
            if (c == "\0") break
            let lookahead = it.peek()
            if (c == ' ' || c == "\n") {
                continue
            }

            //注释
            if (c == '/') {
                if (lookahead == '/') {
                    while (it.hasNext() && (c = it.next()) != '\n') ;
                } else if (lookahead == "*") {
                    let valid = false
                    while (it.hasNext()) {
                        let newVar = c = it.next();
                        if (newVar == '*' && it.peek() == "/") {
                            valid = true
                            it.next()
                            break
                        }
                    }
                    if (!valid) {
                        throw new LexicalException("comment not match")
                    }
                    continue
                }

            }

            //符号
            if (c == '{' || c == "}" || c == '(' || c == ")") {
                token.push(new Token(TokenType.BRACKET, c))
                continue
            }

            //字符串
            if (c == "'" || c == '"') {
                it.putBack()
                token.push(Token.makeString(it))
                continue
            }

            //变量
            if (AlphabetHelper.isLetter(c)) {
                it.putBack()
                token.push(Token.makeVarOrKeyword(it))
                continue
            }

            //常量
            if (AlphabetHelper.isNumber(c)) {
                it.putBack()
                token.push(Token.makeNumber(it))
                continue
            }

            //对常量正负号处理
            if (c == "+" || c == "-" && AlphabetHelper.isNumber(lookahead)) {
                let lastToken = token[token.length - 1] || null
                if (lastToken == null || !lastToken.isValue()) {
                    it.putBack()
                    token.push(Token.makeNumber(it))
                    continue
                }
            }


            //对操作符进行处理
            if (AlphabetHelper.isOperator(c)) {
                it.putBack()
                token.push(Token.makeOp(it))
                continue
            }

            throw LexicalException.fromChar(c)
        }
        return token
    }
}

module.exports = Lexer