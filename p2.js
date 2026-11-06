// MEVI SMART CAFE
// Simple JavaScript for the customer order form

const orderForm = document.getElementById("orderForm");
const message = document.getElementById("message");

orderForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const itemSelect = document.getElementById("item");
    const itemName = itemSelect.options[itemSelect.selectedIndex].text;
    const price = Number(itemSelect.value);

    const quantity = Number(
        document.getElementById("quantity").value
    );

    const total = price * quantity;

    const orderType = document.querySelector(
        'input[name="orderType"]:checked'
    ).value;

    message.innerHTML =
        "Thank you, " + name + "!<br>" +
        "Your order for " + quantity + " × " + itemName + "<br>" +
        "Order Type: " + orderType + "<br>" +
        "Total Amount: ₹" + total;

    message.style.backgroundColor = "#fff1d6";
    message.style.color = "#e74147";
    message.style.borderRadius = "8px";
});

// Clear message when form is reset
orderForm.addEventListener("reset", function () {
    message.innerHTML = "";
});