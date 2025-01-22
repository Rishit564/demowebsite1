// List of products (you can expand or fetch from an API)
const products = [
    {
        id: 1,
        name: 'Lacoste Polo T-Shirt',
        price: 40,
        image: 'https://www.sportsdirect.com/images/imgzoom/33/33116206_xxl.jpg'
    },
    {
        id: 2,
        name: 'Lacoste Classic Sweatshirt',
        price: 75,
        image: 'https://www.sportsdirect.com/images/imgzoom/33/33116206_xxl.jpg'
    },
    {
        id: 3,
        name: 'Lacoste Casual Jacket',
        price: 120,
        image: 'https://www.sportsdirect.com/images/imgzoom/33/33110987_xxl.jpg'
    },
    {
        
        id: 4,
        name: 'Lacoste Running Shoes',
        price: 90,
        image: 'https://www.sportsdirect.com/images/imgzoom/33/33114456_xxl.jpg'
    }
];

// Function to load the products dynamically
function loadProducts() {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = ''; // Clear previous products

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="desc">
                <h4>${product.name}</h4>
                <div class="price">$${product.price}</div>
                <button class="add-to-cart-btn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">
                    Add to Cart
                </button>
            </div>
        `;
        productContainer.appendChild(productDiv);
    });

    // Add event listeners for Add to Cart buttons
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    addToCartBtns.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Function to add a product to the cart
function addToCart(e) {
    const product = {
        id: e.target.getAttribute('data-id'),
        name: e.target.getAttribute('data-name'),
        price: parseFloat(e.target.getAttribute('data-price')),
        image: e.target.getAttribute('data-image')
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartCount();
    alert('Product added to cart!');
}

// Function to update cart count in the header
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = `(${cart.length})`;
}

// On page load, update cart count and load products
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    loadProducts();
});
