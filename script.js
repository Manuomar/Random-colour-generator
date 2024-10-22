// step 1 -- FUNCTION (jo random number banayega)
// step 2 -- function  -> a. setInterval    b. function for setInterval
// step 3 -- FUNCTION clearInterval
// step 4 -- addEventListener

// step 1;
const randomColor = function(){
let hexValue = "01234567889ABCDEDF"
let colour = "#";
for(let i=0;i<6;i++){
  colour += hexValue[Math.ceil(Math.random()*16)];
}
return colour;

}
console.log(randomColor())

// step 2;
let invail;
let ChangeBg = function(){
  
  // agar if nhi use karenge to hamara stop button work nhi karega.

  if(!invail){
    invail = setInterval(changeColorReal , 1000)
  }
  function changeColorReal(){
  document.querySelector("body").style.backgroundColor = randomColor();
  }
}

// step 3
let stopcolour = function(){
  clearInterval(invail);
  invail = null;
}

// step 4
document.querySelector(".btn1").addEventListener("click",ChangeBg);
document.querySelector(".btn2").addEventListener("click",stopcolour);

