// local storage for fetch data and validation condition
let currUser = localStorage.getItem("currUser");
let cartItems = JSON.parse(localStorage.getItem("CartItems")) ||[];


let cardContainer = document.querySelector(".cards_container");
let priceList = document.querySelector(".cart_price_List");
let payBtn = document.getElementById("rzp-button1")

//   console.log(UpdatedCartItems.length)
if (currUser) {

if (!cartItems || cartItems.length <= 0) {
    cardContainer.innerHTML = `Plese Select Items`;
    cardContainer.style.color = `red`;
    cardContainer.style.fontSize = `5rem`;
    cardContainer.style.display = `flex`;
    cardContainer.style.justifyContent = `center`;
    payBtn.style.display = `none`;
  
  } else {

    payBtn.style.display = `block`;

    // rendering cards
    function renderCards() {
      cardContainer.innerHTML = ``;
      cartItems.forEach((element) => {
        cardContainer.innerHTML += `
        <div class="cards">
            <div class="img_container">
              <img
                width="200px"
                height="200px"
                src="${element.image}"
                alt="bags"
              />
            </div>
            <div class="price_tag">
              <p>Title : ${element.title.slice(0, 10)}</p>
              <p>Price : $${element.price}</p>
            </div>
            <button id=${element.id}>Remove From Cart</button>
          </div>
         `;
      });
      removeCartIems();
    }




    // rendering price list ->
    function renderingPriceList() {
      priceList.innerHTML = ``;
      cartItems.forEach((element, index) => {
        priceList.innerHTML += `
       <div class="for_itms">
              <p>${index + 1}. ${element.title.slice(0, 10)}</p>
              <p>$${element.price}</p>
       </div>
       `;
      });
    }




    // rendering total new to update when removeItem button click
    let sum = 0;
    function total() {
     sum = cartItems.reduce((acc, item) => acc + item.price, 0);
      sum = Math.round(sum * 100); 

      let priceTotal = document.querySelector(".total");
      priceTotal.innerHTML = `
        <p>Total</p>
        <p>$ ${sum / 100}/-</p>
      `;
   
    }





    // remove items form cart
    function removeCartIems() {
      let cardContainer = document.querySelectorAll(
        ".cards_container div button"
      );

      cardContainer.forEach((btns) => {
           btns.addEventListener('click', (e)=>{
            const itemId = parseInt(e.target.id);
           let index = cartItems.findIndex((items)=> items.id == itemId);

        if (index !== -1) { // Check if the item exists
            cartItems.splice(index, 1); 
            localStorage.setItem("CartItems", JSON.stringify(cartItems));
            renderCards();
            renderingPriceList();
            total();
          }
        
         })
      });
    }
    





// rozerpay integration 
document.getElementById("rzp-button1").onclick = function (e) {
  e.preventDefault();

  total();

  var options = {
    key: "rzp_test_up10RMCRkzZEwm", // Enter the Key ID generated from the Dashboard
    amount:  sum, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "MyShop Checkout",
    description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    theme: {
      color: "#000",
    },
    image:"https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
     
    handler: function (response) {
      dispatchItems(response);
    },
    modal: {
      ondismiss: function () {
        alert("Payment cancelled");
      },
    },  
  };

  var rzpy1 = new Razorpay(options);
  rzpy1.open();
};


//message after payment
function dispatchItems(response){
 // Validate payment via payment_id
    if (response.razorpay_payment_id) { // Validate payment via payment_id
      payBtn.style.display = `block`
    payBtn.textContent=``
    let a = document.createElement('a')
    a.setAttribute('href', '../shop/index.html')
    a.textContent=`Go to Products`
    payBtn.appendChild(a);
    a.style.textDecoration = `none`
    a.style.color = `black`
    
    cardContainer.innerHTML = `Payment Received Successfully`;
    cardContainer.style.color = `green`;
    cardContainer.style.fontSize = `5rem`;
    cardContainer.style.display = `flex`;
    cardContainer.style.justifyContent = `center`;
    priceList.innerHTML = `Items are shipped soon...`;
    localStorage.removeItem('CartItems'); // Clear cart

    } else {
      alert("Payment failed or cancelled");

    }
}

    renderCards();
    renderingPriceList();
    total();

    // end else if blcock
  }

  // lgoic
} else {
  window.location.href = "../login.html";
}
