// login page response
function validateForm() {
  // Get email and password values
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Check if email and password are correct
  if (email === "admin@admin.com" && password === "123456") {
    alert("Login successful");
  } else {
    alert("Incorrect email or password");
  }
}
// cart item calculation
// Get elements needed for quantity control and summary update
const quantitySpan = document.getElementById('quantity');
const productPriceValue = document.querySelector('.summary-value.product-price');
const shippingPrice = 5.00; // Replace with the actual shipping price
const summaryValue = document.querySelector('.summary-value.total-amount');

// Function to update the summary amount
function updateSummaryAmount(quantity) {
  const productPrice = 10.00; // Replace with the actual product price
  const totalProductPrice = productPrice * quantity;
  const totalAmount = totalProductPrice + shippingPrice;

  productPriceValue.textContent = `$${totalProductPrice.toFixed(2)}`;
  summaryValue.textContent = `$${totalAmount.toFixed(2)}`;
}

// Add event listeners for plus and minus buttons
const decreaseQuantityBtn = document.querySelector('.decrease-quantity-btn');
const increaseQuantityBtn = document.querySelector('.increase-quantity-btn');

let quantity = 1; // Default quantity
updateSummaryAmount(quantity); // Update summary initially with default quantity

decreaseQuantityBtn.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantitySpan.textContent = quantity;
    updateSummaryAmount(quantity);
  }
});

increaseQuantityBtn.addEventListener('click', () => {
  // You can set a maximum quantity if needed, for example, max quantity of 10:
  // const maxQuantity = 10;
  // if (quantity < maxQuantity) {
  quantity++;
  quantitySpan.textContent = quantity;
  updateSummaryAmount(quantity);
  // }
});


