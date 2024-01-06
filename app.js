// let slide_img = document.querySelector(".im");
let slide_img = document.getElementsByClassName("im")[0];
let slide = document.querySelectorAll(".slide");
let left_button = document.getElementById("left_btn");
let Right_button = document.getElementById("right_btn");

function controller(s){ }

slide[0].style.display = "block";


let a = 1;
Right_button.addEventListener("click",()=>{
    a=a+1;

    if(a>22){
        a=1;
    }
    // console.log("a is = "+a);
    let new_src = `image_to_show\\${a}.jpg`;
    slide_img.setAttribute("src",new_src);
});

left_button.addEventListener("click",()=>{
    a=a-1;
    if(a<=0){
        a=22;
    }
    // console.log("a is = "+a);
    let new_src = `image_to_show\\${a}.jpg`;
    slide_img.setAttribute("src",new_src);
});