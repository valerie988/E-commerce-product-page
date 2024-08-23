const increment = document.getElementById("increment")
const decrement = document.getElementById("decrement")
const count = document.getElementById("count")
const imagesCart = document.querySelector(".thumbnail")

const thumbnailimages = [
    "./images/image-product-1-thumbnail.jpg",
    "./images/image-product-2-thumbnail.jpg",
    "./images/image-product-3-thumbnail.jpg",
    "./images/image-product-4-thumbnail.jpg",
];

const images = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
];

function displayimages(){
    thumbnailimages.forEach((item, index) =>{
    const img = document.createElement("img");

    img.addEventListener("click", () => {
        console.log(images[index]);
        
    })
    img.src = item;
    imagesCart.appendChild(img)
    } 
)}

displayimages()


let counter = 0

increment.addEventListener("click", () => {
    if(counter === 10) return
    counter ++
    count.innerHTML = counter
})

decrement.addEventListener("click", () => {
    if(counter === 0) return
    counter --;
    count.innerHTML = counter
})