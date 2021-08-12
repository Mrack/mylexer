const Factor = require("./Factor")
const ASTNodeTypes = require('./ASTNodeTypes')

class Scalar extends Factor {
    constructor(parent) {
        super(parent, ASTNodeTypes.SCALAR, ASTNodeTypes.SCALAR.type);
    }
}

module.exports = Scalar