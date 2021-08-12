const Stmt = require("./Stmt")
const ASTNodeTypes = require("./ASTNodeTypes")

class IFStmt extends Stmt {
    constructor(parent) {
        super(parent, ASTNodeTypes.IF_STMT, ASTNodeTypes.IF_STMT.type);
    }
}

module.exports = IFStmt