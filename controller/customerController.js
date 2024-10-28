import CustomerModel from "../model/customerModel.js";

import {customer_array} from "../db/database.js";

import {ValidateMobile,ValidateEmail} from "../util/validation.js";

let selected_customer_index = null;

const loadCustomerTable = () => {
    $("#customerTableBody").empty();
    customer_array.map((cus_object, index) => {
        console.log(cus_object);
        let data = `<tr>
                        <td>${cus_object.first_name}</td>
                        <td>${cus_object.last_name}</td>
                        <td>${cus_object.address}</td>
                        <td>${cus_object.email}</td>
                        <td>${cus_object.mobile}</td>
                        <td>${cus_object.nic}</td>
                    </tr>`;
        $("#customerTableBody").append(data);
    })
}

function clear() {
    $('#firstName').val("");
    $('#lastName').val("");
    $('#address').val("");
    $('#email').val("");
    $('#mobile').val("");
    $('#nic').val("");
}

$("#customer_add_btn").on("click", function() {
    let first_name = $('#firstName').val();
    let last_name = $('#lastName').val();
    let address = $('#address').val();
    let email = $('#email').val();
    let mobile = $('#mobile').val();
    let nic = $('#nic').val();

    if (first_name.length === 0) {
        Swal.fire("Fill First Name column!");
    } else if (last_name.length === 0) {
        Swal.fire("Fill Last Name column!");
    } else if (address.length === 0) {
        Swal.fire("Fill Address column!");
    } else if (!ValidateEmail(email)) {
        Swal.fire("Fill Email column!");
    } else if (!ValidateMobile(mobile)) {
        Swal.fire("Fill Mobile column!");
    } else if (nic.length === 0) {
        Swal.fire("Fill NIC column!");
    } else {
        let customer = new CustomerModel(
            customer_array.length + 1,
            first_name,
            last_name,
            address,
            email,
            mobile,
            nic
        );
        customer_array.push(customer);
        clear();
        loadCustomerTable();
    }
});

$('#customerTableBody').on("click", 'tr', function () {
    selected_customer_index = $(this).index();
    console.log(selected_customer_index);
    let customer_obj = customer_array[selected_customer_index];
    console.log(customer_obj);


    let first_name = customer_obj.first_name;
    let last_name = customer_obj.last_name;
    let address = customer_obj.address;
    let email = customer_obj.email;
    let mobile = customer_obj.mobile;
    let nic = customer_obj.nic;

     $('#firstName').val(first_name);
     $('#lastName').val(last_name);
     $('#address').val(address);
     $('#email').val(email);
     $('#mobile').val(mobile);
     $('#nic').val(nic);

});

$('#customer_update_btn').on('click', function () {
    let index = selected_customer_index;

    let first_name = $('#firstName').val();
    let last_name = $('#lastName').val();
    let address = $('#address').val();
    let email = $('#email').val();
    let mobile = $('#mobile').val();
    let nic = $('#nic').val();

    if (first_name.length === 0) {
        Swal.fire("Fill First Name column!");
    } else if (last_name.length === 0) {
        Swal.fire("Fill Last Name column!");
    } else if (address.length === 0) {
        Swal.fire("Fill Address column!");
    } else if (!ValidateEmail(email)) {
        Swal.fire("Fill Email column!");
    } else if (!ValidateMobile(mobile)) {
        Swal.fire("Fill Mobile column!");
    } else if (nic.length === 0) {
        Swal.fire("Fill NIC column!");
    } else {
        let customer = new CustomerModel(
            customer_array[index].id,
            first_name,
            last_name,
            address,
            email,
            mobile,
            nic
        );
        customer_array[selected_customer_index] = customer;
        loadCustomerTable();
        clear();
    }
});

$('#customer_delete_btn').on('click', function () {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            let index1 = selected_customer_index;
            customer_array.splice(index1, 1);
            loadCustomerTable();
            clear();
            Swal.fire({
                title: "deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
});
