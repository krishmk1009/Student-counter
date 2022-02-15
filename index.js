
let count = 0;

function increment(){
    count ++;
    document.querySelector(".count").innerText=count;
    // console.log(count)
}
function decrement(){
    count --;
    document.querySelector(".count").innerText=count;
    // console.log(count)
}
let para = document.getElementById("saveP")

function save(){
    para.innerText += count + " - "
    console.log(count);

    // set back to zero
    count =0;
    document.querySelector(".count").innerText=count;

}


// practice section of FreeCodeCamp --- recap
let points = 3;

function add3points(){
    points +=3;
}
function removepoint(){
    points --;
}
add3points()
add3points()
add3points()
removepoint()
removepoint()
console.log(points);