export default class ItemModel{
    constructor(id,itemName,quantity,unitPrice,description) {
        this._id = id;
        this._itemName = itemName;
        this._quantity = quantity;
        this._unitPrice = unitPrice;
        this._description = description;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(value) {
        this._itemName = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    get unitPrice() {
        return this._unitPrice;
    }

    set unitPrice(value) {
        this._unitPrice = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }
}