export default class CustomerModel{
    constructor(id,first_name,last_name,address,email,mobile,nic) {
        this._id = id;
        this._first_name = first_name;
        this._last_name = last_name;
        this._address = address;
        this._email = email;
        this._mobile = mobile;
        this._nic = nic;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get first_name() {
        return this._first_name;
    }

    set first_name(value) {
        this._first_name = value;
    }

    get last_name() {
        return this._last_name;
    }

    set last_name(value) {
        this._last_name = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get mobile() {
        return this._mobile;
    }

    set mobile(value) {
        this._mobile = value;
    }

    get nic() {
        return this._nic;
    }

    set nic(value) {
        this._nic = value;
    }
}