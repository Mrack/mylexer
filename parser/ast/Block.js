const Stmt = require("./Stmt")
const ASTNodeTypes = require("./ASTNodeTypes")

class Block extends Stmt {
    constructor(parent) {
        super(parent, ASTNodeTypes.BLOCK, ASTNodeTypes.BLOCK.type);
    }
}