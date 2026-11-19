let x = 0;

// //---------------------------------------------- q1

function q1(){
let sv1 = document.querySelector('input[name="color3"]:checked')?.value
if(sv1 === 'Gray'){
    x = x +1;
    } 
}
//How do you add a point to the score if they click the right button

//---------------------------------------------- q2

function q2(){
let sv2 = document.querySelector('input[name="num3"]:checked')?.value
if(sv2 === '3'){
    x + 1
} else {
   x = x +0;
    }
}

//---------------------------------------------- q3

// let sv3 = document.querySelector('input[name="agree"]:checked')?.value
// if(sv3 === 'True'){
//     x + 1
// } else {
//     x + 0
// };

// //How do you add a point to the score if they click the right button

// //---------------------------------------------- q4

// let q4 = document.querySelector("q4");
// let a4 = 67;
// function q4() {
// if (a4 === "67")
//     x + 1
// } else {
//     x + 0
// };

// //---------------------------------------------- q5

// let q5 = document.querySelector("q5");
// let a5 = "NO";
// function q5() {
// if (a5 === "no")
//     x + 1
// } else {
//     x + 0
// };

// //---------------------------------------------- q6

// let q6 = document.querySelector("q6");


// //---------------------------------------------- q7

// let q7 = document.querySelector("q7");
// let a71 = document.querySelector(".a71").value;
// let a72 = document.querySelector(".a72").value;
// let a73 = document.querySelector(".a73").value;

// let displayOrder = document.querySelector(".display-order");
//  displayOrder.innerHTML = `Your Order: ${a71}, with a side of ${a72}, and ${a73} as your drink.` ;


//---------------------------------------------- submit

let fs = document.querySelector(".finalscore");  


let fbtn = document.querySelector(".finalbtn");


fbtn.addEventListener("click", function () {
    q1();
    q2();
    // q3();
    // q4();
    // q5();
    // q6();
    // q7();
    fs.innerHTML = `You got a ${x}/7`;
        fs.innerHTML = "ssssss";
});

