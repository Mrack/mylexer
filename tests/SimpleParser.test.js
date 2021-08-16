const PeekIterator = require('../common/PeekIterator')
const arrayToGenerator = require('../common/arrayToGenerator')
const PeekTokenIterator = require("../parser/util/PeekTokenIterator")
const SimpleParser = require("../parser/SimpleParser")
const Lexer = require("../lexer/Lexer");
const {assert} = require('chai')

describe('test SimpleParser', () => {
    it('basic', function () {
        const source = "1+2+3+19819";
        const lexer = new Lexer()
        const tokens = lexer.analyse(arrayToGenerator([...source]))
        const tokenIt = new PeekTokenIterator(arrayToGenerator(tokens))
        let expr = SimpleParser.parse(tokenIt);
        assert.equal(expr.getChild(0).label, 1)
        assert.equal(expr.getChild(1).getChild(0).label, 2)
        assert.equal(expr.getChild(1).getChild(1).label, "+")
        assert.equal(expr.getChild(1).getChild(1).getChild(0).label, 3)
        assert.equal(expr.getChild(1).getChild(1).getChild(1).label, 19819)

    });
})