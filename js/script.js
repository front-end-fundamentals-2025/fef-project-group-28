/* LOCAL STORAGE FOR CART */
document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const productContainer = this.closest(".bestseller-item");
            const name = productContainer.querySelector(".product-info p").textContent;
            const price = productContainer.querySelector("price").textContent;
            const image = productContainer.querySelector("img").src;

            const product = { name, price, image };
            cart.push(product);

            localStorage.setItem("cart", JSON.stringify(cart));
        });
    });
});
