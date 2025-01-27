

let currUser = localStorage.getItem('currUser');
let globalProductsArr = [];

if(currUser){
  let colors =['red', 'black', 'blue', 'green'];
  let sizes = ['XS', 'SM', 'MD', 'LG', 'XL'];

  const products = fetch('https://fakestoreapi.com/products').then((response)=>{
   return  response.json()
  }).then((data)=>{
    if(localStorage.getItem('newProducts')){
       let productsArr = JSON.parse(localStorage.getItem('newProducts'))
       console.log(productsArr);
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
                  <div class="sized">${item.sizes[0] || 'S'}, ${item.sizes[1] || "M" }, ${item.sizes[2] || "L"}</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: ${item.colors[0]}"></div>
                    <div class="circle" style="background-color: ${item.colors[1] || "pink"} "></div>
                    <div class="circle" style="background-color: ${item.colors[2] || "yellow"}"></div>
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
                    <div class="sized">${item.sizes[0] || 'S'}, ${item.sizes[1] || "M" }, ${item.sizes[2] || "L"}</div>
                  </div>
                  <div class="colors">
                    Colors:
                    <div class="row">
                      <div class="circle" style="background-color: ${item.colors[0]}"></div>
                      <div class="circle" style="background-color: ${item.colors[1] || "pink"} "></div>
                      <div class="circle" style="background-color: ${item.colors[2] || "yellow"}"></div>
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
                    <div class="sized">${item.sizes[0] || 'S'}, ${item.sizes[1] || "M" }, ${item.sizes[2] || "L"}</div>
                  </div>
                  <div class="colors">
                    Colors:
                    <div class="row">
                      <div class="circle" style="background-color: ${item.colors[0]}"></div>
                      <div class="circle" style="background-color: ${item.colors[1] || "pink"} "></div>
                      <div class="circle" style="background-color: ${item.colors[2] || "yellow"}"></div>
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
                    <div class="sized">${item.sizes[0] || 'S'}, ${item.sizes[1] || "M" }, ${item.sizes[2] || "L"}</div>
                  </div>
                  <div class="colors">
                    Colors:
                    <div class="row">
                      <div class="circle" style="background-color: ${item.colors[0]}"></div>
                      <div class="circle" style="background-color: ${item.colors[1] || "pink"} "></div>
                      <div class="circle" style="background-color: ${item.colors[2] || "yellow"}"></div>
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


