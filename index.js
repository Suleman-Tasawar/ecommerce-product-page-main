let lightBoxImage = document.querySelector(".light-box .images");
let thumbnai1 = document.querySelector(".thumbnail1")
let lightBox = document.querySelector(".light-box");


/** to toggle the mene*/
let HamMenu = document.querySelector(".menu");
let NavBar = document.querySelector(".nav")
let CloseMenu = document.querySelector(".close")
HamMenu.addEventListener("click",()=>{
    NavBar.style.display = "block"
})

CloseMenu.addEventListener("click",()=>{
    NavBar.style.display = "none";
})


/*To display the lightbox when the user clicks on the thumbnail*/
thumbnai1.addEventListener("click",()=>{
    lightBox.style.display = "block"



    let iconClose = document.querySelector(".icon-close-box");
    iconClose.addEventListener("click",()=>{
        lightBox.style.display = "none";
    })
})

/*to view the next images in the light box*/
let nextImg = document.querySelector(".icon-next-img");
let styleBackLightBox = document.querySelector("#HOME")
let imgIndex = 0;
let toggleImages = ["images/image-product-1.jpg",

        "images/image-product-2.jpg",
        "images/image-product-3.jpg",
        "images/image-product-4.jpg"]
nextImg.addEventListener("click",()=>{
    imgIndex = (imgIndex + 1) % toggleImages.length
    lightBoxImage.src = toggleImages[imgIndex]
/*
    styleBackLightBox.style.background = "hsl(0, 0%, 0%)";
    styleBackLightBox.style.opacity = "0.75"*/
})

/*To preview the previous image when clicked*/
let prevImg = document.querySelector(".icon-prev-img");
prevImg.addEventListener("click",()=>{
    if (imgIndex != 0){

        imgIndex = (imgIndex -1) % toggleImages.length
        lightBoxImage.src = toggleImages[imgIndex]
    }
 /*   
    styleBackLightBox.style.background = "hsl(0, 0%, 0%)";
    styleBackLightBox.style.opacity = "0.75"
*/
})

/*to increase the orders*/
let increseOrder = document.querySelector(".increase-icon");
let orderCount = document.getElementsByClassName("order-content")[0];
let count = 0
increseOrder.addEventListener("click",()=>{
    orderCount.innerText = count+=1;
    
})

/*To decrese the orders*/
let decreseOrder = document.querySelector(".decrease-icon");
decreseOrder.addEventListener("click",()=>{
        if (count > 0){
            orderCount.innerText = count-=1;  
        }
    })

/*to click the cart and see the orders*/
let cartOrder = document.querySelector(".cart");
let orderCart = document.querySelector(".order-cart");
let orderDetails = document.querySelector(".order-details");
let defaultCartMsg = document.querySelector(".cart-default");

cartOrder.addEventListener("click",()=>{
    orderCart.style.display = "block";
    defaultCartMsg.style.display = "none";
    orderDetails.style.display = "block"
/*
    cartOrder.addEventListener("click" ,() =>{
        orderCart.style.display = "none";
    })
*/
})


/*for ordering the product*/
let buyProd = document.querySelector(".checkout-order-buy")
buyProd.addEventListener("click",()=>{
    defaultCartMsg.style.display = "none";
    orderCart.style.display = "block";
    orderDetails.style.display = "block";
    buyProd.innerText = orderCount.innerText + "" + orderCount.innerText * 125;
/*
    buyProd.addEventListener("click",()=>{
        orderDetails.style.display = "none";
    })
*/
})