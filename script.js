const slides = document.querySelectorAll('.slide')
const dots = document.querySelector('.carousel-buttons')
// current slide for indicating the count of slides
let currSlide = 0;

let maxSlide = slides.length - 1;

//loop torugh each slide to translateX property * 100%
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

//adding eventlistener to all dots
dots.addEventListener('click', (e) => {
    
    //using event.target to locate the correct slide
    if(e.target.className === 'slide-selector1') {
        // indicating the index of the slide. 
        currSlide = 0
        // translatingX the slides based on the currSlideIndex, multiplying to 100 translated to 0%.
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${indx * 100}%)`;
        }); 
    }

    if(e.target.className === 'slide-selector2' ) {
        // hard-coding the slide index
        currSlide = 1
        // translateX subtracting the index with the currslide, multiply by 100
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - currSlide)}%)`;
        }); 
    }

    if(e.target.className === 'slide-selector3' ) {
        currSlide = 2
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - currSlide)}%)`;
        }); 
    }

})


