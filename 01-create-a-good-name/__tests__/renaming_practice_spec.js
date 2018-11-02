const renamingPractice = require('../src/renamingPractice');

it ('should get the correct receipent for the item bought', () => {
    // Given
    const boughtItem = {barcode: "A01", name: "Coca Cola", count: 1, price: 3};

    // When
    const receipent = renamingPractice.do_something_cool(boughtItem);

    // Then
    expect(receipent).toBe("Receipent\n\nA01 Coca Cola 1 ... $3\n\nTotal $3");
});

it ('should get well formatted multiply table', () => {
    // Given
    const start = 3;
    const end = 5;

    // When
    const table = renamingPractice.get_some_strings(start, end);

    // Then
    expect(table).toBe(
        "3 * 3 = 9      \n" +
        "3 * 4 = 12     4 * 4 = 16     \n" +
        "3 * 5 = 15     4 * 5 = 20     5 * 5 = 25     \n"
    );
});