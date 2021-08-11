const Enum = require('../common/Enum')

module.exports = {
    BLOCK: new Enum("BLOCK", 1),
    BINARY_EXPR: new Enum("BINARY_EXPR", 2),
    UNARY_EXP: new Enum("UNARY_EXP", 3),
    VARIABLE: new Enum("VARIABLE", 4),
    IF_STMT: new Enum("IF_STMT", 5),
    WHILE_STMT: new Enum("WHILE_STMT", 6),
    ASSIGN_STMT: new Enum("ASSIGN_STMT", 7),
    FOR_STMT: new Enum("FOR_STMT", 8),
    FUNCTION_DECLARE_STMT: new Enum("FUNCTION_DECLARE_STMT", 9),
}