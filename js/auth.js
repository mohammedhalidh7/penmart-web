// ===============================
// SIGNUP FUNCTION
// ===============================

function signupUser() {
    // Get input values
    const phone = document.getElementById("signup-phone").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    // Basic validation
    if (phone === "" || password === "") {
        alert("All fields are required");
        return;
    }

    if (phone.length !== 10) {
        alert("Phone number must be 10 digits");
        return;
    }

    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    const userExists = users.some(user => user.phone === phone);

    if (userExists) {
        alert("User already exists. Please login.");
        return;
    }

    // Save new user
    const newUser = {
        phone: phone,
        password: password
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please login.");
    window.location.href = "../pages/login.html";
}
