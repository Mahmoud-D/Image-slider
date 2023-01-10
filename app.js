const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const images =document.querySelectorAll('.image')

let sliderNumer=1;
let length=images.length

const nextImage=()=>{
    slider.style.transform=`translateX(-${sliderNumer*600}px)`;
        sliderNumer ++;
}
const prevImage=()=>{
    slider.style.transform=`translateX(0px)`;
    sliderNumer=1;
}
right.addEventListener('click',
()=>{
    sliderNumer<length ? nextImage() : prevImage()

});