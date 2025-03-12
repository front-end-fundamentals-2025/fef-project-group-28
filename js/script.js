document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || []; // Get existing cart or create an empty one

    
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const productContainer = this.closest(".bestseller-item");
            const name = productContainer.querySelector(".product-info p").textContent;
            const price = productContainer.querySelector("price").textContent;
            const image = productContainer.querySelector("img").src;

            const product = { name, price, image };
            cart.push(product); // Add the product to the cart array

            localStorage.setItem("cart", JSON.stringify(cart)); // Save cart in localStorage

            alert("Product added to cart! 🛒");
        });
    });
});
