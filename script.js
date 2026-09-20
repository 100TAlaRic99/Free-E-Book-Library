//End of Navigaion
const menuIcon = document.querySelector(".menu-icons");
const container = document.querySelector(".container");

menuIcon.addEventListener("click", ()=>{
    container.classList.toggle("navigate");
});
//End of Navigaion

// Testimonials
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".controls i:nth-child(1)");
const rightArrow = document.querySelector(".controls i:nth-child(2)");
const dots = document.querySelectorAll(".dots span");

let currentSlide = 0;

function updateSlider() {

    slider.style.transform = `translateX(-${currentSlide * 20}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });

}


// Right Arrow
// Right Arrow
rightArrow.addEventListener("click", () => { 
    if (currentSlide < slides.length - 1) { 
        currentSlide++; 
        updateSlider();
    } 
});

// Left Arrow

leftArrow.addEventListener("click", () => { 
    if (currentSlide > 0) { 
        currentSlide--; 
        updateSlider();
    } 
});

// Add click functionality to each slider dot
dots.forEach((dot, index) => { 
 
    // When a dot is clicked, move to its corresponding slide
    dot.addEventListener("click", () => { 
 
        // Set the current slide to the clicked dot's index
        currentSlide = index; 
 
        // Update the slider position and active dot
        updateSlider(); 
 
    }); 
 
});

// Make the first dot active when the page loads
updateSlider();
// End of Testimonials