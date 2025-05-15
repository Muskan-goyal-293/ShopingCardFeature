let  shoping = document.querySelector(".shoping-sec");
let page = document.querySelector(".page-2")
let cart2 = document.querySelector(".cart");
let shop =document.querySelector(".shop");
let product =[
{image :"./image/1.avif", description:"Watch", price :"1000" },
{image :"./image/bag-2.avif" , description:"Tower-bag", price :"1000"},
{image :"./image/bag.avif" , description:"bag", price :"500"},
{image :"./image/2.avif" , description:"Head-Phone", price :"3000"},
{image :"./image/boyes-shoes.avif" , description:"Trandy-Shoes", price :"2000"},
{image :"./image/combo.avif" , description:"All-Combo", price :"3000"},
{image :"./image/curology.avif" , description:"Curology", price :"1000"},
{image :"./image/eyer-burds.avif" , description:"Eyer-Burd's", price :"2000"},
{image :"./image/girls-shoes.avif" , description:"Girls-Choice", price :"1000"},
{image :"./image/googles.avif" , description:"Google's", price :"5000"},
{image :"./image/latest-treand-chair.avif" , description:"Latest-Chair", price :"3000"},
{image :"./image/lipstick.avif" , description:"Girl's -first- perferance", price :"500"},
{image :"./image/makup.avif" , description:"Look-Like-smart", price :"5000"},
{image :"./image/oil.avif" , description:"Oil", price :"500"},
{image :"./image/sandel.avif" , description:"Sandel", price :"500"},
{image :"./image/shampoo-2.avif" , description:"Shampoo-for-Healty-Hair", price :"1000"},
{image :"./image/shampoo.avif" , description:"Shampoo", price :"800"},
{image :"./image/shoes.avif" , description:"Blood-Red-Shoes", price :"3000"},
{image :"./image/stool.avif" , description:"White-Stool", price :"5000"},
{image :"./image/t-shirt.avif" , description:"T-shirt", price :"500"},
{image :"./image/voice-assistent.avif" , description:"Alexa", price :"10000"},
{image :"./image/18.avif" , description:"All-House-choice", price :"10000"},
{image :"./image/19.avif" , description:"Fasion-Choice", price :"9999"},
{image :"./image/20.avif" , description:"Home-First-choice", price :"8475"},
{image :"./image/21.avif" , description:"Shoes", price :"1200"},
{image :"./image/22.avif" , description:"Shoes", price :"1100"},
{image :"./image/23.avif" , description:"Shoes", price :"1000"},
{image :"./image/24.avif" , description:"Girl's-Choice", price :"999"},
{image :"./image/26.avif" , description:"Camra", price :"1099"},
{image :"./image/25.avif" , description:"Plant", price :"1999"},
];

let product2 =[
    {image :"./image/3.avif" , description:" Latest Sofa" },
    {image :"./image/4.avif" , description:" Latest Sofa" },
    {image :"./image/5.avif" , description:" Latest Sofa" },
    {image :"./image/6.avif" , description:" Latest Sofa" },
    {image :"./image/7.avif" , description:" Latest Sofa" },
    {image :"./image/8.avif" , description:" Latest Sofa" },
    {image :"./image/9.avif" , description:" Latest Sofa" },
    {image :"./image/10.avif" , description:" Latest Sofa" },
    {image :"./image/11.avif" , description:" Latest Sofa" },
    {image :"./image/12.avif" , description:" Latest Sofa" },
    {image :"./image/13.avif" , description:" Latest Sofa" },
    {image :"./image/3.avif" , description:" Latest Sofa" },
    {image :"./image/15.avif" , description:" Latest Sofa" },
    {image :"./image/16.avif" , description:" Latest Sofa" },
    {image :"./image/17.avif" , description:" Latest Sofa" },
    ]

let box ="";
product.forEach (( value , index)=>{
box+=` <div class="container">
        <div class="image-box">
            <img src="${value.image}" alt="">
        </div>
        <div class="info">
            <div class="box">
        <div class="des">${value.description}</div>
        <div class="price">Rs.${value.price}</div>
        </div>
        <button data-value="${index}" class="add"> Add</button>
    </div>
    </div>`;
})
shoping.innerHTML = box;



let cluter ="";
product2.forEach((value)=>{
    cluter +=`<div class="main">
        <div class="img-div">
            <img src="${value.image}" alt="">
        </div>
        <div class="containt">
            <p>${value.description}</p>
        </div>
        </div>`
})
page.innerHTML=cluter;

let cart =[]
shoping.addEventListener ("click",(details)=>{
    if (details.target.classList.value === "add"){
       cart.push(product[details.target.dataset.value]);
    }
})

let count =1;
cart2.addEventListener("click",()=>{
    if(count===1){
    shop.style.display = "block";
    let cluter ="";
    cart.forEach((value,index)=>{
        cluter+=  `<div class="container">
        <div class="image-box">
            <img src="${value.image}" alt="">
        </div>
        <div class="info">
            <div class="box">
        <div class="des">${value.description}</div>
        <div class="price">Rs.${value.price}</div>
        </div>
    </div>
    </div>`;
    })
    shop.innerHTML=cluter;
    count=0;
    }
    else{
        shop.style.display ="none";
        count =1;
    }

})