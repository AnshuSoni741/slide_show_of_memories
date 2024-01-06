
flag = 0;
let slide = document.querySelectorAll(".slide");
slide[flag].style.display = "block";

function controller(x){
    // console.log(x);
    flag = flag + x;

    if(flag<0){
        flag = slide.length-1;
    }

    if(flag>=slide.length){
        flag = 0;
    }

    slide_show(flag);
}


function slide_show(flag){

    for(let sl of slide){
        //hide all logic
        sl.style.display = "none";
    }

    slide[flag].style.display = "block";

}