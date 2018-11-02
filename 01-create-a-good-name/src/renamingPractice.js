const util = require("./supportingFunctions");

class RenamingPractice {
    do_something_cool(item) {
        return `Receipent\n\n${item.barcode} ${item.name} ${item.count} ... $${item.price}\n\nTotal $${item.price}`;
    }

    get_some_strings(start, end) {
        let table = "";

        for (let right = start; right <= end; right += 1) {
            for (let left = start; left <= right; left += 1) {
                const maxWidth = util.calculateMaxWidth(left, end);
                table += util.createExpressionPadding(left, right, maxWidth);
            }
            table += "\n"
        }

        return table;
    }
}

module.exports = new RenamingPractice();