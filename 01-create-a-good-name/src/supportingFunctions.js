module.exports = {
    createExpression : function (left, right) {
        return `${left} * ${right} = ${left * right}`;
    },

    createExpressionPadding : function (left, right, padding) {
        return this.createExpression(left, right).padEnd(padding);
    },

    calculateMaxWidth : function (maxLeft, maxRight) {
        return this.createExpression(maxLeft, maxRight).length + 5;
    }
};