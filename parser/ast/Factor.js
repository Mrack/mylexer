const ASTNode = require("./ASTNode");
const ASTNodeTypes = require("./ASTNodeTypes");
const TokenType = require("../../lexer/TokenType");

class Factor extends ASTNode {
    constructor(parent, it) {
        super(parent);
        var token = it.next();
        let type = token.getType()
        if (type === TokenType.VARIABLE) {
            this.type = ASTNodeTypes.VARIABLE
        } else {
            this.type = ASTNodeTypes.SCALAR
        }

        this.label = token.getValue()
        this.lexeme = token
    }

}

module.exports = Factor