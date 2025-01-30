

let currUser = localStorage.getItem('currUser');
let globalProductsArr = [];

if(currUser){
  let colors =['red', 'black', 'blue', 'green'];
  let sizes = ['S', 'M', 'L', 'LG', 'XL'];

  const products = fetch('https://fakestoreapi.com/products').then((response)=>{
   return  response.json()
  }).then((data)=>{
    if(localStorage.getItem('newProducts')){
       let productsArr = JSON.parse(localStorage.getItem('newProducts'))
      //  console.log(productsArr);
       globalProductsArr = productsArr;
       originalArrRender(globalProductsArr);
    }else{
      // adding elememts existing json object using map
      let newProducts = data.map((items)=>{
        items.colors = colors.slice(Math.floor(Math.random()*4))
        items.sizes = sizes.slice(Math.floor(Math.random()*4));
        return items
      });
       localStorage.setItem('newProducts', JSON.stringify(newProducts));
    }
  });
}else{
    window.location.href = "../login.html"
}


       // using this function used to render filter data if user has some query during input 
       function originalArrRender(updatedArr){
        renderManProducts(updatedArr);
        renderWomensProducts(updatedArr);
        renderJeweleryProducts(updatedArr);
        renderElectronicsProducts(updatedArr);
        addToCart();
        }



// rendering mans products
let MenClothingDivs = document.getElementById('mens_cards');

function renderManProducts(products){
   let manFilterArr =   products.filter((items)=>items.category === "men's clothing");
   MenClothingDivs.innerHTML = '';
         manFilterArr.forEach(()=>{

         })
         manFilterArr.forEach((item)=>{
    MenClothingDivs.innerHTML +=`
            <div class="item">
              <img src="${item.image}" alt="Item" />
              <div class="info">
                <div class="row">
                  <div class="price">$${item.price}</div>
                    <div class="sized">${item.sizes[0] || '_'}, ${item.sizes[1] || '_'}, ${item.sizes[2] || '_'}, ${item.sizes[3] || '_'}</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: ${item.colors[0]}"></div>
                    <div class="circle" style="background-color: ${item.colors[1]} "></div>
                    <div class="circle" style="background-color: ${item.colors[2]}"></div>
                    <div class="circle" style="background-color: ${item.colors[3]}"></div>
                  </div>
                </div>
                <div class="row">Rating: ${item.rating.rate}</div>
              </div>
              <button id="${item.id}">Add to Cart</button>
            </div>
         `
    })
}



// rendering womens products
let womensDivs = document.getElementById('womens_cards')

function renderWomensProducts(products){
     let womensFilterArr = products.filter((items)=> items.category === "women's clothing");
    //  console.log(womensFilterArr);

     womensDivs.innerHTML = '';

     womensFilterArr.forEach((item)=>{
      womensDivs.innerHTML +=`
              <div class="item">
                <img src="${item.image}" alt="Item" />
                <div class="info">
                  <div class="row">
                    <div class="price">$${item.price}</div>
                    <div class="sized">${item.sizes[0] || '_'}, ${item.sizes[1] || '_'}, ${item.sizes[2] || '_'}, ${item.sizes[3] || '_'}</div>
                  </div>
                  <div class="colors">
                    Colors:
                    <div class="row">
                      <div class="circle" style="background-color: ${item.colors[0]}"></div>
                    <div class="circle" style="background-color: ${item.colors[1]} "></div>
                    <div class="circle" style="background-color: ${item.colors[2]}"></div>
                    <div class="circle" style="background-color: ${item.colors[3]}"></div>
                    </div>
                  </div>
                  <div class="row">Rating: ${item.rating.rate}</div>
                </div>
                <button id="${item.id}">Add to Cart</button>
              </div>
           `
      })

}




// rendering jewelery products
let jeweleryDivs = document.getElementById('jewelery_cards')

function renderJeweleryProducts(products){
     let jeweleryProducts = products.filter((items)=> items.category === "jewelery");
    //  console.log(womensFilterArr);

     jeweleryDivs.innerHTML = '';

     jeweleryProducts.forEach((item)=>{
      jeweleryDivs.innerHTML +=`
              <div class="item">
                <img src="${item.image}" style="height: 30px;"  alt="Item" />
                <div class="info">
                  <div class="row">
                    <div class="price">$${item.price}</div>
                    <div class="sized">${item.sizes[0] || '_'}, ${item.sizes[1] || '_'}, ${item.sizes[2] || '_'}, ${item.sizes[3] || '_'}</div>
                  </div>
                  <div class="colors">
                    Colors:
                    <div class="row">
                      <div class="circle" style="background-color: ${item.colors[0]}"></div>
                    <div class="circle" style="background-color: ${item.colors[1]} "></div>
                    <div class="circle" style="background-color: ${item.colors[2]}"></div>
                    <div class="circle" style="background-color: ${item.colors[3]}"></div>
                    </div>
                  </div>
                  <div class="row">Rating: ${item.rating.rate}</div>
                </div>
                <button id="${item.id}">Add to Cart</button>
              </div>
           `
      })

}



// rendering jewelery products
let electronicsDivs = document.getElementById('electronics_cards')

function renderElectronicsProducts(products){
     let electronicsProducts = products.filter((items)=> items.category === "electronics");
    //  console.log(womensFilterArr);

    electronicsDivs.innerHTML = '';

    electronicsProducts.forEach((item)=>{
      electronicsDivs.innerHTML +=`
              <div class="item">
                <img src="${item.image}" alt="Item" />
                <div class="info">
                  <div class="row">
                    <div class="price">$${item.price}</div>
                    <div class="sized">${item.sizes[0] || '_'}, ${item.sizes[1] || '_'}, ${item.sizes[2] || '_'}, ${item.sizes[3] || '_'}</div>
                  </div>
                  <div class="colors">
                    Colors:
                    <div class="row">
                      <div class="circle" style="background-color: ${item.colors[0]}"></div>
                    <div class="circle" style="background-color: ${item.colors[1]} "></div>
                    <div class="circle" style="background-color: ${item.colors[2]}"></div>
                    <div class="circle" style="background-color: ${item.colors[3]}"></div>
                    </div>
                  </div>
                  <div class="row">Rating: ${item.rating.rate}</div>
                </div>
                <button id="${item.id}">Add to Cart</button>
              </div>
           `
         
      })


}


// Search products not using local storage data using dom manupulation
let search = document.getElementById('search_products')
search.addEventListener('input', searchProuctsByInput)

function searchProuctsByInput(){
// console.log('search value',search.value);
let searchValue = search.value.toLowerCase().trim();
 let searchFilterArr =  globalProductsArr.filter((item)=>
       item.category.toLowerCase().includes(searchValue) || item.title.toLowerCase().includes(searchValue)

  )
  originalArrRender(searchFilterArr);
}





// filter when user click on button on perticuler section

let filterDiv = document.querySelectorAll('.filter');

filterDiv.forEach((divs)=>{
    divs.addEventListener('click', ()=>{
      
      // for removing all divs
      filterDiv.forEach((Alldivs)=>{
        Alldivs.classList.remove('active');
      })
      // for adding divs when user click on button
      divs.classList.add('active')

    // console.log(divs.textContent.toLocaleLowerCase())

    let textByBtn = divs.textContent.toLocaleLowerCase()

    switch(textByBtn){
      case 'mens': 
      let mensArr = globalProductsArr.filter((items)=>items.category ===`men's clothing`)
      // console.log(mensArr)
      originalArrRender(mensArr);
      break;
      case 'womens': 
      let womensArr = globalProductsArr.filter((items)=>items.category ===`women's clothing`)
      originalArrRender(womensArr);
      break;
      case 'jewellery': 
      let jewelleryArr = globalProductsArr.filter((items)=>items.category ===`jewelery`)
      originalArrRender(jewelleryArr);
      break;
      case 'electronics': 
      let electronicsArr = globalProductsArr.filter((items)=>items.category ===`electronics`)
      originalArrRender(electronicsArr);
      break;
      case 'all':
        originalArrRender(globalProductsArr);
        break;
        default:
          break
    }
       
  })
})







// now filter by rating

let ratingsInput = document.getElementById('range');

let ratingsUpdate = document.getElementById('rating_update');

 ratingsInput.addEventListener('input', ()=>{
  let ratingsValue = ratingsInput.value
  // console.log(ratingsInput.value);
  ratingsUpdate.textContent = `Ratings : ${ratingsInput.value}`

  let ratingFilterArr = globalProductsArr.filter((ratings)=> parseInt(ratings.rating.rate) == ratingsValue);
  
  originalArrRender(ratingFilterArr)

 })







// now filter based on color 

 let colorList = document.querySelectorAll('input[name=color]');
    
           colorList.forEach((colorInputs)=>{
             colorInputs.addEventListener('change', (e)=>{
                 workingFunctionColor();
             })
           })
  
function workingFunctionColor(){
    let selectedColorsIds = Array.from(colorList).filter((ids)=>ids.checked).map((ids)=>ids.id)
    
    let selctedColorsItemsArr = globalProductsArr.filter((colors)=>{
      return selectedColorsIds.some((ids)=> colors.colors.includes(ids))
    })
    originalArrRender(selctedColorsItemsArr);
    // console.log(selctedColorsItemsArr)
}







// now filter according to size
let sizeInput = document.querySelectorAll('input[name=size]');
 sizeInput.forEach((items)=>{
    items.addEventListener('change', (e)=>{
      let selectedRangesArr = Array.from(sizeInput);

      let selectedRanges =  selectedRangesArr.filter((checkbox)=>checkbox.checked).map((checkbox)=>{
         return checkbox.id;
      })
      // console.log(selectedRanges);
      // console.log('laued', globalProductsArr)
      let SizeRangeArr = globalProductsArr.filter((product)=>{
        return selectedRanges.some((items)=> product.sizes.includes(items));
    
      });
       originalArrRender(SizeRangeArr);
    })
    
 })










 // filter by price range 
let PriceRangeInput = document.querySelectorAll('input[name=prange]');
// console.log(PriceRangeInput);

PriceRangeInput.forEach((checkbox)=>{
  checkbox.addEventListener('change', (e)=>{
    
    if(checkbox.checked){
      // console.log(e)
      applyPriceFilter();
    }
  })
})
// here is filtering importent aspects
function applyPriceFilter(){
    let selectedRanges = Array.from(PriceRangeInput).filter((checkbox)=>checkbox.checked).map((checkbox)=>checkbox.id);
    // console.log(selectedRanges);

    let filterPriceRangeArr = globalProductsArr.filter((product)=>{
      let price = product.price;
      if(selectedRanges.includes('0-25') && price>=0 && price<=25) return true;
      if (selectedRanges.includes('25-50') && price > 25 && price <= 50) return true;
    if (selectedRanges.includes('50-100') && price > 50 && price <= 100) return true;
    if (selectedRanges.includes('100on') && price > 100) return true;
    return false;
    });
    originalArrRender(filterPriceRangeArr)
}







// now workign on card functionality





function addToCart(){
  let addCartBtn = document.querySelectorAll('main-content section div button');
// console.log(addCartBtn);
// let addToCartArr = [];
addCartBtn.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
      let cartItems = JSON.parse(localStorage.getItem('CartItems')) || [];
      const productId = parseInt(e.target.id);
      let clickProductArr =  globalProductsArr.find((item)=> productId == item.id)
        // console.log(clickProductArr)

      if(clickProductArr){
        cartItems.push(clickProductArr);
        localStorage.setItem('CartItems', JSON.stringify(cartItems))
      }
      
      // console.log(addToCartArr);
      
    })
    
})

}






























































