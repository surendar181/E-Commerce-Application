const firstNav = document.querySelector('.first-nav');
const secondNav = document.querySelector('.second-nav');
const footer = document.querySelector('.footer');
const header = document.querySelector('header');

// const location = window.location

// console.log(window.location);


header.innerHTML = `
<nav class="navbar navbar-expand-md bg-body-tertiary first-nav">
        
        <div class="container-fluid">
            <!-- ! mx-lg-5 will give some margin from left side on large devices -->
            <a class="navbar-brand" href="/index.html">Diamond8</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <!-- ! these me,mx and my classes are quite confusing -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <!-- !navbar collapse will open up when we go to the mobile view -->
              <form class="d-flex ms-md-auto nav-search" role="search">
                <input class="form-control  search-input" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success search-btn" type="submit">Search</button>
              </form>
              <ul class="navbar-nav align-items-md-center ms-auto mb-lg-0 cart-n-loginbtn">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="./pages/login/login-page.html"><button class="btn btn-primary">Login</button></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./pages/cart/cart-page.html"><i class="fa-solid fa-cart-shopping"></i></a>
                </li>
                
              </ul>
              
            </div>
            </div>
        
        
      </nav>
      
      <!-- ! making these navbars was a really tiresome process. It's one thing to add classes to make navbar and entirely another thing to write your own classes in separate css file -->
      <!-- ! bootstrap seems more confusing -->
      <!-- ! second-nav class is used to select the first navigation bar that contains the clothes and dropdowns -->
      <nav class="navbar navbar-expand bg-body-tertiary second-nav">
        <div class="container-fluid">
        
            <div class="collapse d-flex justify-content-between navbar-collapse" id="navbarNav">
              <ul class="navbar-nav justify-content-around flex-wrap w-100">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                
                <li class="nav-item">
                  <a class="nav-link" href="./pages/product-categories/all-products.html">All Products</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Women
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="./pages/product-categories/women/women.html">All</a></li>
                    <li><a class="dropdown-item" href="./pages/product-categories/women/women-dresses.html">Dresses</a></li>
                    <li><a class="dropdown-item" href="./pages/product-categories/women/women-pants.html">Pants</a></li>
                    <li><a class="dropdown-item" href="./pages/product-categories/women/women-skirts.html">Skirts</a></li>
                    
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Men
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/pages/product-categories/men/men.html">All</a></li>
                    <li><a class="dropdown-item" href="pages/product-categories/men/men-hoodies.html">Hoodies</a></li>
                    <li><a class="dropdown-item"  href="pages/product-categories/men/men-shirts.html">Shirts</a></li>
                    <li><a class="dropdown-item" href="pages/product-categories/men/men-pants.html">Pants</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./pages/product-categories/kids/kids.html">Kids</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./pages/contact/contact.html">Contact</a>
                </li>
                
              </ul>
            </div>
            </div>
        
        <!-- ! finally I was able to pull it off and get the layout done for all screen sizes -->
      </nav>

`



footer.innerHTML = `

<div class="row flex-column align-items-center flex-md-row flex-lg-row">

        <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
          <div class="footer-women card w-100">
            <!-- ! using a bootstrap card for a footer -->
            <ul class="list-group list-group-flush text-center">
            <a href='./pages/product-categories/men/men.html'><h4 class="footer-heading card-header text-center">Men</h4></a>
              <li class="list-group-item"><a href='pages/product-categories/men/men-hoodies.html'>Hoodies</a></li>
              <li class="list-group-item"><a href='pages/product-categories/men/men-pants.html'>Pants</a></li>
              <li class="list-group-item"><a href='pages/product-categories/men/men-shirts.html'>Shirts</a></li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
          <div class="footer-men card w-100">
            <ul class="list-group list-group-flush text-center">
            <a href='./pages/product-categories/women/women.html'><h4 class="footer-heading card-header text-center">Women</h4></a>
              <li class="list-group-item"><a href='pages/product-categories/women/women-dresses.html'>Dresses</a></li>
              <li class="list-group-item"><a href='pages/product-categories/women/women-pants.html'>Pants</a></li>
              <li class="list-group-item"><a href='pages/product-categories/women/women-skirts.html'>Skirts</a></li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
          <div class="footer-kids card w-100">
          <ul class="list-group list-group-flush text-center">
          <a href="./pages/product-categories/kids/kids.html"><h4 class="footer-heading card-header text-center">Kids</h4></a>
              
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-center">
          <div class=" card w-100">
            <h4 class="footer-heading text-center card-header">Links</h4>
            <ul class="list-group list-group-flush text-center">
              <li class="list-group-item"><a href='./index.html'>Home</a></li>
              <li class="list-group-item"><a href="./pages/login/login-page.html">Login</a></li>
              <li class="list-group-item"><a href="./pages/contact/contact.html">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row copyright-row d-flex justify-content-around">
        <div class="col-12 col-md-6 col-lg-6 copyright-col d-flex justify-content-around align-items-items">
          <span>Copyright &copy; Diamond8 2022-23</span>
        </div>
      </div>

`

const itemTitles = document.querySelectorAll('.featured .card-title');
const itemTexts = document.querySelectorAll('.featured .card-text');
const itemPrices = document.querySelectorAll('.featured .item-price');

itemTitles.forEach((item)=>{
  item.innerText = 'Item Name'
})
itemTexts.forEach((item)=>{
  item.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sequi molestiae sapiente porro labore?`
})

itemPrices.forEach((item)=>{
  const rndInt = Math.floor(Math.random() * 200) + 300
  item.innerText = `$${rndInt}`
})

