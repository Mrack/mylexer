const Stmt = require("./Stmt")
const ASTNodeTypes = require("./ASTNodeTypes")

class ForStmt extends Stmt {
    constructor(parent) {
        super(parent, ASTNodeTypes.FOR_STMT, ASTNodeTypes.FOR_STMT.type);
    }
}

module.exports = ForStmt