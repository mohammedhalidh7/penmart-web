function buyNow(name, price) {
    let product = {
        name: name,
        price: price,
        quantity: 1
    };

    // Store product temporarily
    localStorage.setItem("buyNowProduct", JSON.stringify(product));

    // Redirect to checkout page
    window.location.href = "checkout.html";
}
