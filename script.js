const slides = document.querySelector('.slide')
const dots = document.querySelector('.carousel-buttons')
console.log(dots)
let slideIndex = 1;

let firstImage = './assests/firstSlide.jpg'
let secondImage = './assests/secondSlide.jpg'
let thirdImage = './assests/thirdSlide.jpg'

let img = [{
    src: './assests/firstSlide.jpg',
    src: './assests/secondSlide.jpg',
    src: './assests/thirdSlide.jpg'
}]

img.map((img) => {
    let imgTag = document.createElement('img');
    imgTag.src = img.src;

    // append the image to the slide wrapper
    slides.appendChild(imgTag)
})




function updateImage() {


}

updateImage()


