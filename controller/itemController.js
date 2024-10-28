import {customer_array, itemArray} from "../db/database.js";
import ItemModel from "../model/itemModel.js";

let selected_item_index = null;
function loadItemTable() {
    $("#itemTableBody").empty();
    itemArray.map((item) => {
        let row = `<tr>
                <td>${item.itemName}</td>
                <td>${item.quantity}</td>
                <td>${item.unitPrice}</td>
                <td>${item.description}</td>
            </tr>`;
        $("#itemTableBody").append(row);
    });
}

function clearForm() {
    $('#itemName').val("");
    $('#quantity').val("");
    $('#unitPrice').val("");
    $('#description').val("");
}

$("#saveBtn").on("click", function () {
    let itemName =   $('#itemName').val();
    let quantity =     $('#quantity').val();
    let unitPrice =     $('#unitPrice').val();
    let description =     $('#description').val();


    if (itemName.length === 0) {
        Swal.fire("Fill Item Name column!");
    } else if (quantity.length === 0) {
        Swal.fire("Fill quantity column!");
    } else if (unitPrice.length === 0) {
        Swal.fire("Fill price column!");
    } else if (description.length === 0) {
        Swal.fire("Fill description column!");
    } else {
        let item = new ItemModel(
            itemArray.length+1,
            itemName,
            quantity,
            unitPrice,
            description
        );
        itemArray.push(item);
        loadItemTable();
        clearForm();
    }
});

$('#itemTableBody').on("click", 'tr', function () {
    selected_item_index = $(this).index();
    console.log(selected_item_index);
    let item_obj = itemArray[selected_item_index];
    console.log(item_obj);

    let name = item_obj.itemName;
    let quantity = item_obj.quantity;
    let unitPrice =item_obj.unitPrice;
    let description = item_obj.description;

        $('#itemName').val(name);
        $('#quantity').val(quantity);
        $('#unitPrice').val(unitPrice);
        $('#description').val(description);
});
// Placeholder functions for Update and Delete
$("#updateBtn").on("click", function () {
    let index = selected_item_index;

    let itemName =   $('#itemName').val();
    let quantity =     $('#quantity').val();
    let unitPrice =     $('#unitPrice').val();
    let description =     $('#description').val();


    if (itemName.length === 0) {
        Swal.fire("Fill Item Name column!");
    } else if (quantity.length === 0) {
        Swal.fire("Fill quantity column!");
    } else if (unitPrice.length === 0) {
        Swal.fire("Fill price column!");
    } else if (description.length === 0) {
        Swal.fire("Fill description column!");
    } else {
        let item = new ItemModel(
           itemArray[index].id,
           itemName,
            quantity,
            unitPrice,
            description
        );
        itemArray[selected_item_index] = item;
        loadItemTable();
        clearForm();
    }
});

$("#deleteBtn").on("click", function () {
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
            let index1 = selected_item_index;
            itemArray.splice(index1, 1);
            loadItemTable();
            clearForm();
            Swal.fire({
                title: "deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
});
