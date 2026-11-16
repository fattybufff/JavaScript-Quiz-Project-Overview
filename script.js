let btn1 = document.querySelector("btn1");
let btn2 = document.querySelector("btn2");
let btn3 = document.querySelector("btn3");
let btn4 = document.querySelector("btn4");
let btn5 = document.querySelector("btn5");
let btn6 = document.querySelector("btn6");
let btn7 = document.querySelector("btn7");
let btn8 = document.querySelector("btn8");
let btn9 = document.querySelector("btn9");
let btn10 = document.querySelector("btn10");
let q1 = document.querySelector("q1");
let q2 = document.querySelector("q2");
let q3 = document.querySelector("q3");
let q4 = document.querySelector("q4");
let q5 = document.querySelector("q5");
let q6 = document.querySelector("q6");
let q7 = document.querySelector("q7");



let a71 = document.querySelector(".a71").value;
let a72 = document.querySelector(".a72").value;
let a73 = document.querySelector(".a73").value;
let displayOrder = document.querySelector(".display-order");
 displayOrder.innerHTML = `Your Order: ${a71}, with a side of ${a72}, and ${a73} as your drink.` ;
  
  displayOrder.classList.remove("fade-in");
  void displayOrder.offsetWidth;
  displayOrder.classList.add("fade-in");

let fs = document.querySelector("finalscore");  
let fbtn = document.querySelector("finalbtn");
fbtn.addEventListener("click", function () {
    fs.innerHTML = `you got a $()/7`;
});


