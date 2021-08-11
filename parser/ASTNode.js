class ASTNode {
    constructor(_parent, _type = null, _label = null) {
        this.children = []
        this.parent = parent

        this.lexeme = null
        this.type = _type
        this.label = _label
    }

    getChild(index) {
        return this.children[index]
    }

    addChild(node) {
        this.children.push(node)
    }

    getLexeme() {
        return this.lexeme
    }

    getChildren() {
        return this.children
    }

}

module.exports = ASTNode