
// Set an interval for changing the images
let bannerBox1 = document.querySelector('.banner-box');
let bannerBox2 = document.querySelector('.banner-box2');

// Define the images
const imagesBox1 = [
    "https://image-cdn.hypb.st/https://hypebeast.com/image/2023/04/lacoste-netflix-collaboration-collection-release-info-tw.jpg?w=960&cbr=1&q=90&fit=max", 
    "https://nqs.1cdn.vn/thumbs/1200x630/2023/10/27/static-images.vnncdn.net-files-publish-2023-10-27-_da-co-website-thoi-trang-lacoste-viet-nam-378.jpg"
];
const imagesBox2 = [
    "https://static.theceomagazine.net/wp-content/uploads/2018/11/28082514/lacoste-1.jpg", 
    "https://mir-s3-cdn-cf.behance.net/projects/max_808/fe9b01168738539.Y3JvcCwxMDg2LDg1MCwxNzcsMA.png"
];

// Function to change images periodically
let currentIndexBox1 = 0;
let currentIndexBox2 = 0;

function changeImages() {
    // Change image for the first box
    bannerBox1.style.backgroundImage = `url(${imagesBox1[currentIndexBox1]})`;

    // Change image for the second box
    bannerBox2.style.backgroundImage = `url(${imagesBox2[currentIndexBox2]})`;

    // Update the index for the next image
    currentIndexBox1 = (currentIndexBox1 + 1) % imagesBox1.length;
    currentIndexBox2 = (currentIndexBox2 + 1) % imagesBox2.length;
}

// Set interval to change images every 5 seconds (5000 milliseconds)
setInterval(changeImages, 1500);

// Call the function initially to display the first set of images
changeImages();



// Add event listener to 'Add to Cart' buttons
document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', function() {
        const productId = button.getAttribute('data-product-id');
        const productName = button.getAttribute('data-product-name');
        const productPrice = parseFloat(button.getAttribute('data-product-price'));

        // Add the product to localStorage (simulating a cart)
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ id: productId, name: productName, price: productPrice });
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('Item added to cart!');
    });
});



