// Login Logic
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === "user" && password === "password") {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'products.html';
    } else {
        document.getElementById('loginMessage').innerText = 'Invalid username or password.';
    }
});

// Cart Logic
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart!`);
}

// Display Cart Items
if (window.location.pathname.endsWith('cart.html')) {
    const cartItemsDiv = document.getElementById('cartItems');
    const totalPriceP = document.getElementById('totalPrice');
    let total = 0;
    cartItemsDiv.innerHTML = '';
    cart.forEach(item => {
        cartItemsDiv.innerHTML += `<p>${item.productName} - $${item.price}</p>`;
        total += item.price;
    });
    totalPriceP.innerText = `Total Price: $${total}`;
}

// Payment Logic
document.getElementById('paymentForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Payment successful!');
    window.location.href = 'order-review.html';
});

// Order Review Page Logic
if (window.location.pathname.endsWith('order-review.html')) {
    const reviewItemsDiv = document.getElementById('reviewItems');
    const reviewTotalPriceP = document.getElementById('reviewTotalPrice');
    let total = 0;
    reviewItemsDiv.innerHTML = '';
    cart.forEach(item => {
        reviewItemsDiv.innerHTML += `<p>${item.productName} - $${item.price}</p>`;
        total += item.price;
    });
    reviewTotalPriceP.innerText = `Total Price: $${total}`;
}

function confirmOrder() {
    alert('Order confirmed! Thank you for your purchase.');
    localStorage.removeItem('cart'); // Clear cart after order confirmation
    window.location.href = 'products.html'; // Redirect to the products page
}
