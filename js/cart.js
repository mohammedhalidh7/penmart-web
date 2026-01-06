let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItemsDiv = document.getElementById("cart-items");
let totalPriceSpan = document.getElementById("total-price");

function displayCart() {
    cartItemsDiv.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty</p>";
        totalPriceSpan.innerText = 0;
        return;
    }

    cart.forEach((item, index) => {
        total += item.price;

        let div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <span>${item.name} - ₹${item.price}</span>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartItemsDiv.appendChild(div);
    });

    totalPriceSpan.innerText = total;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function goToCheckout() {
    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    // For now send first item or total
    localStorage.setItem("buyNowProduct", JSON.stringify({
        name: "Cart Items",
        price: cart.reduce((sum, item) => sum + item.price, 0)
    }));

    window.location.href = "checkout.html";
}

displayCart();
