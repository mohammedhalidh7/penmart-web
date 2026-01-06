// Example product coming from Buy Now
let product = JSON.parse(localStorage.getItem("buyNowProduct"));

// Fallback if nothing exists
if (!product) {
    product = {
        name: "Pen",
        price: 50
    };
}

// Show product details
document.getElementById("product-name").innerText = product.name;
document.getElementById("product-price").innerText = product.price;
document.getElementById("total-price").innerText = product.price;

function placeOrder() {

    let roomNumber = document.getElementById("room").value.trim();

    if (roomNumber === "") {
        alert("Please enter room number");
        return;
    }

    alert(
        "Order placed!\n" +
        "Product: " + product.name + "\n" +
        "Room: " + roomNumber
    );
}
function cancelOrder(){

    let roomNumber = document.getElementById("room").value.trim();

    if (roomNumber === "") {
        alert("Please enter room number");
        return;
    }

    alert(
        "Order placed!\n" +
        "Product: " + product.name + "\n" +
        "Room: " + roomNumber
    );
}

