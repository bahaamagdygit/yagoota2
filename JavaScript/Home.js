let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

/////////////////////////////////////////////////////////////////////////////



/////////////////////////////////json//////////////////////////
// Load the JSON data
fetch('../JavaScript/Data.json')
  .then(response => response.json())
  .then(data => {
    // Process the JSON data
    const menuItems = data.items;

    // Get the DOM element to display the menu
    const menuDiv = document.getElementById('box');

    // Iterate through each item in the menu
    menuItems.forEach(item => {
      // Create a div element for each menu item
      const menuItemDiv = document.createElement('div');
      menuItemDiv.className = 'box';

      // Set the content of the menu item div
      menuItemDiv.innerHTML = `
        <a href="#" class="fas fa-heart"></a>
        <div class="image">${item.emoji}</div>
        <div class="content">
          <h3>${item.name}</h3>
          <p class="food-desc-materials">${item.ingredients.join(', ')}</p>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <span> (50) </span>
          </div>
          <div class="price">${item.price} LE</div>
          <a class="btn" href="../Html/Menu.html#${item.id}">go to Menu </a> 
         
        </div>
      `;

      // Append the menu item div to the main menu div
      menuDiv.appendChild(menuItemDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });







//filterSelection

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove('show');
    //عطيه شرط لازم يتحقق عشان يدخل في الفور لوب
    if (x[i].className.indexOf(c) > -1){
        x[i].classList.add('show');
    }
  }

  

}
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
/////////////////////////
// This part for search and topnav buttons
menu.onclick = () => {

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
 
}

window.onscroll = () => {


  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 60) {
    document.querySelector('#scroll-top').classList.add('active');
  } else {
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});

//This part for Reload time
function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
  setInterval(loader, 1000);
}

window.onload = fadeOut();

///////////////////////////////////////////////////////////////////

//img on/out
function onImg1() {
  this.setAttribute("src", "../images/a12.jpeg");
}
function onImg2() {
  this.setAttribute("src", "../images/a22.jpeg");
}
function onImg3() {
  this.setAttribute("src", "../images/a32.jpeg");
}
function onImg4() {
  this.setAttribute("src", "../images/a42.jpeg");
}
function onImg5() {
  this.setAttribute("src", "../images/a52.jpeg");
}
function onImg6() {
  this.setAttribute("src", "../images/a62.jpeg");
}

                   /////

function outImg1() {
  this.setAttribute("src", "../images/a11.jpeg");
}
function outImg2() {
  this.setAttribute("src", "../images/a21.jpeg");
}
function outImg3() {
  this.setAttribute("src", "../images/a31.jpeg");
}
function outImg4() {
  this.setAttribute("src", "../images/a41.jpeg");
}
function outImg5() {
  this.setAttribute("src", "../images/a51.jpeg");
}
function outImg6() {
  this.setAttribute("src", "../images/a61.jpeg");

}
/////////////////////////////////////////////////

//Query 

$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideToggle("slow");
  });
})





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
