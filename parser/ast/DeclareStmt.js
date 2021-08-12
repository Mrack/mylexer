const Stmt = require("./Stmt")
const ASTNodeTypes = require("./ASTNodeTypes")

class DeclareStmt extends Stmt {
    constructor(parent) {
        super(parent, ASTNodeTypes.FUNCTION_DECLARE_STMT, ASTNodeTypes.FUNCTION_DECLARE_STMT.type);
    }
}

module.exports = DeclareStmt