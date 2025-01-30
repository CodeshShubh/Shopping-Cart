let currUser = localStorage.getItem("currUser");
let cartItems = JSON.parse(localStorage.getItem("CartItems")) ||[];
//  console.log('updated', UpdatedCartItems)
let cardContainer = document.querySelector(".cards_container");

//   console.log(UpdatedCartItems.length)
if (currUser) {

if (!cartItems || cartItems.length <= 0) {
    cardContainer.innerHTML = `Plese Select Items`;
    cardContainer.style.color = `red`;
    cardContainer.style.fontSize = `5rem`;
    cardContainer.style.display = `flex`;
    cardContainer.style.justifyContent = `center`;
  } else {


    // rendering cards
    function renderCards() {
      cardContainer.innerHTML = ``;
      // console.log(UpdatedCartItems);
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
// renderCards();





    // rendering price list ->
    function renderingPriceList() {
      let priceList = document.querySelector(".cart_price_List");
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
    // renderingPriceList();




    // rendering total new to update when removeItem button click
    let priceTotal = document.querySelector(".total");
    function total() {
      let sum = 0;
      cartItems.forEach((items) => {
        // console.log(items.price);
        sum += items.price;
      });
    //   console.log(sum);
      priceTotal.innerHTML = `
     <p>Total</p>
    <p>$ ${sum.toFixed(2)}/-</p>
    `;
    }
    // total();




    // remove items form cart
    function removeCartIems() {
      let cardContainer = document.querySelectorAll(
        ".cards_container div button"
      );
    //   console.log(cardContainer);

      cardContainer.forEach((btns) => {
           btns.addEventListener('click', (e)=>{
            // console.log(e.target.id)
            const itemId = parseInt(e.target.id);
           let index = cartItems.findIndex((items)=> items.id == itemId);
            //  console.log(index);


        //    console.log(updatedCart)
        //    if(updatedCart.length !== cartItems.length){
        //     cartItems = updatedCart;
        //     localStorage.setItem("CartItems", JSON.stringify(cartItems));
        //     renderCards();
        //     renderingPriceList();
        //     total();

        //    }

        if (index !== -1) { // Check if the item exists
            cartItems.splice(index, 1); // Remove only that specific item
            localStorage.setItem("CartItems", JSON.stringify(cartItems));
            renderCards();
            renderingPriceList();
            total();
          }
        
         })
      });
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
