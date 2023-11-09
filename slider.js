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
  slideIndex_2 = (slideIndex_2 - 1 + slideCount_2) % slideCount_2; 
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


// ...meijo

const slider_students_videos = document.querySelector(".slider_students_videos");
const prev_button_slider_students_videos = document.querySelector(".prev_button_slider_students_videos");
const next_button_slider_students_videos = document.querySelector(".next_button_slider_students_videos");
const slides_stud_video = Array.from(slider_students_videos.querySelectorAll("img"));
const slideCount_stud_video = slides_stud_video.length;
let slideIndex_3 = 0;

prev_button_slider_students_videos.addEventListener("click", showPreviousSlide_3);
next_button_slider_students_videos.addEventListener("click", showNextSlide_3);

function showPreviousSlide_3() {
  slideIndex_3 = (slideIndex_3 - 1 + slideCount_stud_video) % slideCount_stud_video;
  updateSlider_3();
}

function showNextSlide_3() {
  slideIndex_3 = (slideIndex_3 + 1) % slideCount_stud_video;
  updateSlider_3();
}

function updateSlider_3() {
  slides_stud_video.forEach((slide_3, index) => {
    if (index >= slideIndex_3 && index < slideIndex_3 + 1) {
      slide_3.style.display = "block";
    } else {
      slide_3.style.display = "none";
    }
  });
}
updateSlider_3(); 