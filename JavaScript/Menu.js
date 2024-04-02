














let cart = document.querySelector('.shopping-cart-container');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    
}




const menuArray = [
    {
      name: "pantalon",
      ingredients: ["pepperoni"],
      
      price: 200,
      emoji: " <img src='../images/menu/11.jpg' style='height: 200px; width: 168px;'>",
      id: 0
    },
    {
      name: "pantalon",
      ingredients: [ "mushrom"],
      
      price: 150,
      emoji: " <img src='../images/menu/15.jpg' style='height: 200px; width: 168px;'>",
      id: 1
    },
    {
      name: "pantalon",
      ingredients: [  "mozarella"],
      
      price: 300,
      emoji: " <img src='../images/menu/14.jpg' style='height: 200px; width: 168px;'>",
      id: 2
    },
    {
      name: "pantalon",
      ingredients: [  "vegetable"],
      
      price: 100,
      emoji: " <img src='../images/menu/20.jpg' style='height: 200px; width: 168px;'>",
      id: 3
    },


    {
      name: "shert",
      ingredients: ["grilled"],
      price: 300,
      emoji: " <img src='../images/menu/9.jpg' style='height: 200px; width: 168px;'>",
      id: 4
    },
    {
      name: "shert",
      ingredients: ["Charcoal grilled"],
      price: 75,
      emoji: " <img src='../images/menu/17.jpg' style='height: 200px; width: 168px;'>",
      id: 5
    }
    ,
    {
      name: "shert",
      ingredients: ["fried"],
      price: 200,
      emoji: " <img src='../images/menu/25.jpg' style='height: 200px; width: 168px;'>",
      id: 6
    }
    ,
    {
      name: "shert",
      ingredients: ["thigh"],
      price: 300,
      emoji: " <img src='../images/menu/2.jpg' style='height: 200px; width: 168px;'>",
      id: 7
    }
    ,


    {
      name: "Dress",
      ingredients: ["Salmon"],
      price: 99,
      emoji: " <img src='../images/menu/3.jpg' style='height: 200px; width: 168px;'>",
      id: 8
    }
    ,
    {
      name: "Dress",
      ingredients: ["fried"],
      price: 300,
      emoji: " <img src='../images/menu/8.jpg' style='height: 200px; width: 168px;'>",
      id: 9
    }
    ,
    {
      name: "Dress",
      ingredients: ["bully"],
      price: 100,
      emoji: " <img src='../images/menu/21.jpg' style='height: 200px; width: 168px;'>",
      id: 10
    }
    ,
    {
      name: "Dress",
      ingredients: ["mackerel"],
      price: 200,
      emoji: " <img src='../images/menu/4.jpg' style='height: 200px; width: 168px;'>",
      id: 11
    }
    ,



    {
      name: "shoes",
      ingredients: ["grain"],
      price: 100,
      emoji: " <img src='../images/menu/19.jpg' style='height: 200px; width: 168px;'>",
      id: 12
    }
    ,
    {
      name: "shoes",
      ingredients: [" hops"],
      price: 200,
      emoji: " <img src='../images/menu/18.jpg' style='height: 200px; width: 168px;'>",
      id: 13
    }
    ,
    {
      name: "shoes",
      ingredients: [" yeast"],
      price: 100,
      emoji: " <img src='../images/menu/10.jpg' style='height: 200px; width: 168px;'>",
      id: 14
    }
    ,
    {
      name: "shoes",
      ingredients: [" water"],
      price: 200,
      emoji: " <img src='../images/menu/5.jpg' style='height: 200px; width: 168px;'>",
      id: 15
    }
    ,
    {
      name: "Bage",
      ingredients: ["grain"],
      price: 100,
      emoji: " <img src='../images/menu/12.jpg' style='height: 200px; width: 168px;'>",
      id: 16
    }
    ,
    {
      name: "Bage",
      ingredients: ["hops"],
      price: 300,
      emoji: " <img src='../images/menu/24.jpg' style='height: 200px; width: 168px;'>",
      id: 17
    }
    ,
    {
      name: "Bage",
      ingredients: ["yeast"],
      price: 200,
      emoji: " <img src='../images/menu/21.jpg' style='height: 200px; width: 168px;'>",
      id: 18
    }
    ,
    {
      name: "Bage",
      ingredients: [" water"],
      price: 100,
      emoji: " <img src='../images/menu/22.jpg' style='height: 200px; width: 168px;'>",
      id: 19
    }
  ];
  
  const containerEl = document.querySelector(".box-containerr");
  let cartItem = [];


  // Getting all the data form Data.js and converting it into html code.
  function getFoodItems(data) {
    let foodHtml = ``;
    data.forEach((item) => {
      foodHtml += `

      <div class="box">
      <a id ="${item.id}" href="#" class="fas fa-heart"></a>
      <div class="image">
      ${item.emoji}
      </div>
      <div  class="content">
          <h3>${item.name}</h3>
          <p class="food-desc-materials">${item.ingredients}</p>
          <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span> (50) </span>
          </div>
          <div class="price">${item.price} LE</div>
  
          <button  class="btn" data-add=${item.id} > add to cart </button>
                </div>
      </div>
  </div>      
         `;
    });
    return foodHtml;
  }
  
  function render() {
    containerEl.innerHTML += getFoodItems(menuArray);
  }
  render();
  
  // Handleing Cart
  
  document.addEventListener("click", (e) => {
    if (e.target.dataset.add) {
      updateCart(parseInt(e.target.dataset.add));
    }
    // Complete Btn
    else if (e.target.id == "complete-order") {
      document.querySelector(".model").style.display = "block";
    }
    // Remove Btn
    else if (e.target.classList.contains("pay-btn")) {
      e.preventDefault();
      document.querySelector(".model").style.display = "none";
      const myFormData = new FormData(myForm);
      const formName = myFormData.get("name");
      showHideContainer(1);
      document.querySelector(".checkout-container").innerHTML = `
              <div class="thank-you-conatiner">
                  Thanks, ${formName}! Your order is on its way!
              </div>
          `;
    } else if (e.target.id) {
      cartItem = cartItem.filter((item) => item.id != e.target.id);
      console.log(cartItem.length);
      if (cartItem.length == 0) {
        showHideContainer(0);
      }
      renderCart();
    }
  });
  
  function updateCart(elementId) {
    const getItem = menuArray.filter((item) => item.id == elementId)[0];
    cartItem.push(getItem);
    genrateCartHtml();
    renderCart();
  }
  
  function genrateCartHtml() {
    let cartHtml = ``;
    let totalPrice = 0;
    cartItem.forEach((item) => {
      cartHtml += ` 
                      <div class="cart-item" > 
                      <span class="cart-item-emoji">${item.emoji}</span> 
                          <span class="cart-item-name">${item.name}</span> 
                          <span class="remove-item" id = ${item.id}>remove</span>
                          <span class="cart-item-price" >${item.price} LE</span>
                      </div>`;
      totalPrice += item.price;
    });
    document.querySelector(".total-items-price").textContent = `${totalPrice} LE`;
    return cartHtml;
  }
  
  function showHideContainer(k) {
    const cehckoutContainerEl = document.querySelector(".checkout-container");
    if (k == 1 && cehckoutContainerEl.classList.contains("hidden")) {
      cehckoutContainerEl.classList.remove("hidden");
    } else if (k == 0) {
      cehckoutContainerEl.classList.add("hidden");
    }
  }
  function renderCart() {
    if (cartItem.length > 0) {
      showHideContainer(1);
      document.querySelector(".cart-details").innerHTML = genrateCartHtml();
    }
  }
  





  

///////////////////////////////////////////////////////////////////




function delLocalStorage() {
  localStorage.removeItem("user");
 
  alert("Data Deleted");
}
//اني اسمع الاستورج في صفحه الهوم بجوار زرار اللوجن
var user = localStorage.getItem("user");
var userDataDisplayDiv = document.getElementById("userDataDisplay");

if (user !== null) {
    userDataDisplayDiv.innerHTML = "" + user;
} else {
    // Handle the case when 'user' is null
    userDataDisplayDiv.innerHTML = "User!!";
}







