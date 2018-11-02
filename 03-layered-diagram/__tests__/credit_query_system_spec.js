const CreditQuerySystem = require('../src/creditQuerySystem');
const CreditDatabase = require('../src/creditDatabase');

it ('should get not existed report if person ID does not exist in the system', () => {
    const db = new CreditDatabase();
    const system = new CreditQuerySystem();

    const report = system.getReport(db, 'NOT_EXISTED_ID');

    expect(report).toBe("The ID 'NOT_EXISTED_ID' does not exist.");
});

it ('should get good credit condition report', () => {
    const db = new CreditDatabase();
    db.addRecord({id: 'P01', isInGoodCondition: true});
    const system = new CreditQuerySystem();

    const report = system.getReport(db, 'P01');

    expect(report).toBe("P01 is in good condition.");
});

it ('should get bad credit condition report', () => {
    const db = new CreditDatabase();
    db.addRecord({id: 'P01', isInGoodCondition: false});
    const system = new CreditQuerySystem();

    const report = system.getReport(db, 'P01');

    expect(report).toBe("P01 is in bad condition.");
});