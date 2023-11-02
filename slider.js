// Geeks teachers gallery slider 
const slider = document.querySelector(".slider"); 
const prevButton = document.querySelector(".prev-button"); 
const nextButton = document.querySelector(".next-button"); 
const slides = Array.from(slider.querySelectorAll("img")); 
const slideCount = slides.length; 
let slideIndex = 0; 
 
prevButton.addEventListener("click", showPreviousSlide); 
nextButton.addEventListener("click", showNextSlide); 
 
function showPreviousSlide() { 
  slideIndex = (slideIndex - 1 + slideCount) % slideCount; 
  updateSlider(); 
} 
 
function showNextSlide() { 
  slideIndex = (slideIndex + 1) % slideCount; 
  updateSlider(); 
} 
 
function updateSlider() { 
  slides.forEach((slide, index) => { 
    if (index >= slideIndex && index < slideIndex + 3) { 
      slide.style.display = "block"; 
    } else { 
      slide.style.display = "none"; 
    } 
  }); 
} 
updateSlider(); 
// Geeks teachers gallery slider


const slider_2 = document.querySelector(".slider_2"); 
const prevButton_2 = document.querySelector(".left"); 
const nextButton_2 = document.querySelector(".raidh"); 
const slides_2 = Array.from(slider_2.querySelectorAll("img")); 
const slideCount_2 = slides_2.length; 
let slideIndex_2 = 0; 
 
prevButton_2.addEventListener("click", showPreviousSlide_2); 
nextButton_2.addEventListener("click", showNextSlide_2); 
 
function showPreviousSlide_2() { 
  slideIndex = (slideIndex_2 - 1 + slideCount_2) % slideCount_2; 
  updateSlider_2(); 
} 
 
function showNextSlide_2() { 
  slideIndex_2 = (slideIndex_2 + 1) % slideCount_2; 
  updateSlider_2(); 
} 
 
function updateSlider_2() { 
  slides_2.forEach((slide_2, index) => { 
    if (index >= slideIndex_2 && index < slideIndex_2 + 1) { 
      slide_2.style.display = "block"; 
    } else { 
      slide_2.style.display = "none"; 
    } 
  }); 
} 
updateSlider_2(); 