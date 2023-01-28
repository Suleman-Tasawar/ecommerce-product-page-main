# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![Desktop View](./screenshot1.png)
![Mobile View](./screenshot2.png)

### Links

- Solution URL: [Link to the Code](https://github.com/Suleman-Tasawar/ecommerce-product-page-main)
- Live Site URL: [Link to the Site](https://suleman-tasawar.github.io/ecommerce-product-page-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

I learn a whole lot of things while working on this projects.A few of them are below

- To create toggles for menu,Light Box images
- To use JS to add the text inside a container when certain action is performed

```html
<div class="carts">
  <div>
    <img class="cart" src="images/icon-cart.svg" alt="" />
    <div class="order-cart">
      <div class="cart-header">Cart</div>
      <div class="cart-default">Your cart is empty</div>
      <div class="order-details">
        <span class="cart-img">
          <img src="images/image-product-1-thumbnail.jpg" alt="your order" />
        </span>
        <span class="cart-order">
          Fall Limited Edition Sneakers <br />125$*
          <span class="live-order"> </span>
        </span>
        <div>
          <button class="checkout-order">Checkout</button>
        </div>
      </div>
    </div>
  </div>

  <div>
    <img src="images/image-avatar.png" alt="" />
  </div>
</div>
```

```js
let prevImg = document.querySelector(".icon-prev-img");
prevImg.addEventListener("click", () => {
  if (imgIndex != 0) {
    imgIndex = (imgIndex - 1) % toggleImages.length;
    lightBoxImage.src = toggleImages[imgIndex];
  }
});
```

### Continued development

Note that i am still working on this project like when the light box is opened the background will be blurred like home page.I will add the features time by time

### Useful resources

- [Chat gtp](https://chat.openai.com/chat) - This helped me by giving me tips to approch the project. I really liked this pattern and will use it going forward.

## Author

- Website - [Suleman Tasawar](https://suleman-tasawar-portfolio.on.drv.tw/pages/)
- Frontend Mentor - [Suleman-Tasawar](https://www.frontendmentor.io/profile/Suleman-Tasawar)
