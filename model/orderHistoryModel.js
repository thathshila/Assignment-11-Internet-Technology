export  class OrderHistoryModel{
    constructor(date,order_id,customer_id,net_total) {
        this._date = date;
        this._order_id = order_id;
        this._customer_id = customer_id;
        this._net_total = net_total;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get order_id() {
        return this._order_id;
    }

    set order_id(value) {
        this._order_id = value;
    }

    get customer_id() {
        return this._customer_id;
    }

    set customer_id(value) {
        this._customer_id = value;
    }

    get net_total() {
        return this._net_total;
    }

    set net_total(value) {
        this._net_total = value;
    }
}