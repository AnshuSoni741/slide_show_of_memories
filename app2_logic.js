let left_button = document.getElementById("left_btn");
let Right_button = document.getElementById("right_btn");
let slide = document.querySelectorAll(".slide");



//basic logic to track slides
let current_slide = 0;
let previous_slide = current_slide-1;
let next_slide = current_slide+1;


slide[current_slide].classList.remove('hide');



function controller(s){ } //unused function to not show error


left_button.addEventListener("click",()=>{
    if(current_slide == 0){
        previous_slide = slide.length - 1;
    }
    // console.log("heloo");
    slide[current_slide].classList.add('hide');
    slide[previous_slide].classList.remove('hide');
    current_slide = previous_slide;
    previous_slide = previous_slide-1;
    next_slide = current_slide+1;
    // console.log(previous_slide + " " +current_slide +" "+ next_slide);
});


Right_button.addEventListener("click",()=>{

    if(current_slide == slide.length-1){
        next_slide = 0;
    }
    slide[current_slide].classList.add('hide');
    slide[next_slide].classList.remove('hide');
    current_slide = next_slide;
    next_slide = next_slide+1;
    previous_slide = current_slide - 1;
    // console.log(previous_slide + " " +current_slide +" "+ next_slide);
});