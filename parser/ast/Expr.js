const Factor = require("./Factor")
const ASTNodeTypes = require('./ASTNodeTypes')

class Expr extends Factor {
    constructor(parent) {
        super(parent);
    }
}

module.exports = Expr