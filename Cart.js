





document.getElementById('clear-cart-btn').addEventListener('click', function() {
    localStorage.removeItem('cart');
    displayCart(); // Update cart display after clearing
    alert('Cart has been cleared!');
});


// Display Cart on Page Load
document.addEventListener('DOMContentLoaded', () => {
    displayCart();
});

// Function to display the cart items dynamically from localStorage
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const cartMessage = document.getElementById('cart-message');
    const totalPriceElem = document.getElementById('total-price');

    cartContainer.innerHTML = ''; // Clear previous cart items

    if (cart.length === 0) {
        cartMessage.style.display = 'block'; // Show "Your cart is empty" message
        totalPriceElem.textContent = '0.00'; // Set total to 0
    } else {
        cartMessage.style.display = 'none'; // Hide "Your cart is empty" message
        let total = 0;
        cart.forEach(item => {
            total += item.price;
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
                <img src="https://www.sportsdirect.com/images/imgzoom/33/33116206_xxl.jpg" alt="${item.name}" width="100" height="100">
                <div class="cart-item-details">
                    <h5>${item.name}</h5>
                    <span>$${item.price.toFixed(2)}</span>
                    <button class="remove-btn" data-product-id="${item.id}">Remove</button>
                </div>
            `;
            cartContainer.appendChild(itemDiv);
        });
        totalPriceElem.textContent = total.toFixed(2); // Update the total price
    }

    // Attach event listeners to remove buttons
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            removeFromCart(productId);
        });
    });
}

// Function to add product to cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productExists = cart.find(item => item.id === product.id);

    if (!productExists) {
        cart.push(product); // Add product to cart if it doesn't already exist
        localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
        displayCart(); // Update cart UI after adding product
        showThanksMessage(); // Show "Thanks for adding" message
    }
}

// Function to remove product from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId); // Filter out the item to remove
    localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart to localStorage
    displayCart(); // Update cart UI after removal
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cart'); // Remove cart from localStorage
    displayCart(); // Update cart UI after clearing
}

// Function to show "Thanks for adding" message
function showThanksMessage() {
    const messageElem = document.getElementById('thanks-message');
    messageElem.textContent = 'Thanks for adding to the cart!';
    messageElem.style.display = 'block';
    setTimeout(() => {
        messageElem.style.display = 'none';
    }, 2000); // Hide message after 2 seconds
}

// Clear Cart Button Event Listener
document.getElementById('clear-cart-btn').addEventListener('click', () => {
    clearCart();
});

// Example of adding a product (You can link it to your "Add to Cart" buttons)
document.getElementById('add-product-btn')?.addEventListener('click', () => {
    const product = {
        id: '1',
        name: 'Polo T-shirt',
        price: 40,
        image: 'https://www.sportsdirect.com/images/imgzoom/33/33116206_xxl.jpg'
    };
    addToCart(product);
});





