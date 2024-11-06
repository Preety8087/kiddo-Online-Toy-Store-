// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cartCountElement = document.createElement('div');
    cartCountElement.textContent = "Items in Cart: 0";
    cartCountElement.style.position = "absolute";
    cartCountElement.style.top = "20px";
    cartCountElement.style.right = "20px";
    cartCountElement.style.fontSize = "18px";
    cartCountElement.style.color = "#fff";
    document.body.appendChild(cartCountElement);

    let cartCount = 0;

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = `Items in Cart: ${cartCount}`;
            alert("Item added to cart!");
        });
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
    });
});
