class Pie {
    constructor(filling, pastry) {
        this._filling = filling
        this.pastry = pastry
    }

    get filling() {
        return this._filling
    }
}

const pecan = new Pie('pecan', 'shortcrust')

console.log(pecan.filling)