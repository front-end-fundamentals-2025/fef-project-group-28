document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("cart-items");
    const clearCartButton = document.getElementById("clear-cart");

    function loadCart() {
        cartContainer.innerHTML = "";
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        cart.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" width="50">
                <p>${item.name}</p>
                <p>${item.price}</p>
                <button class="remove-item" data-index="${index}">Remove</button>
            `;
            cartContainer.appendChild(itemElement);
        });


        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                removeItem(this.dataset.index);
            });
        });
    }

    function removeItem(index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    }

    clearCartButton.addEventListener("click", function () {
        localStorage.removeItem("cart");
        loadCart();
    });

    loadCart(); 
});
