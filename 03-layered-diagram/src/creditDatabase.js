class CreditDatabase {
    constructor () {
        this._storage = [];
    }

    addRecord(item) {
        if (this._storage.some(r => r.id === item.id)) {
            throw `Duplicated record found for id: ${item.id}`;
        }

        this._storage.push({id: item.id, isInGoodCondition: item.isInGoodCondition});
    }

    // TODO: you can add method here if you want.
}

module.exports = CreditDatabase;