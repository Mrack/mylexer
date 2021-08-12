const Stmt = require("./Stmt")
const ASTNodeTypes = require("./ASTNodeTypes")

class AssignStmt extends Stmt {
    constructor(parent) {
        super(parent, ASTNodeTypes.ASSIGN_STMT, ASTNodeTypes.ASSIGN_STMT.type);
    }
}

module.exports = AssignStmt