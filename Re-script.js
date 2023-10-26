const smile = document.querySelector("#smile");
const clear = document.querySelector("#clear");

const mathematical = document.querySelector(".mathematical");
const calculatingInput = document.querySelector(".calculatingInput");
const deleteImg = document.querySelector(".deleteImg");
const buttonbutton = document.querySelector(".buttonbutton");
const buttonQuery = document.querySelectorAll("button");

let inputValue = "";
let value = "";

let mathValue;

buttonQuery.forEach((element)=>{
  element.addEventListener("click",(e)=>{
    e.preventDefault();

    switch(e.target.className){
      case "num" :
        if(e.target.id == "zerozero" || e.target.id == "zero"){
          if(inputValue.length == 0){
            inputValue += "";
          }else if(e.target.id == "zerozero"){
            inputValue += "00";
            mathematical.value = inputValue;
          }else if(e.target.id == "zero"){
            inputValue += "0";
            mathematical.value = inputValue;
          }
        }else {
          inputValue += e.target.innerHTML;
          mathematical.value = inputValue;
        }
        break;
      
      case "enter" : 
        valuevalue(e.target);
        break;

      case "clear" : 
        inputValue = "";
        mathematical.value = inputValue;
        calculatingInput.innerHTML = 0;
        break;

      case "decimalPoint" : 
        let A = inputValue.split(/\%|\*|\/|\-|\+/);
        if(inputValue.length === 0){
          inputValue += "0.";
        }else if(!A[0].includes(".") || !A[1].includes(".")){
          inputValue += ".";
        }
        mathematical.value = inputValue;
        break;

      case "operator" : 
        const Ilength = inputValue.length - 1;
        
        if((inputValue.charAt(Ilength)) === "%" 
        || (inputValue.charAt(Ilength)) === "/"
        || (inputValue.charAt(Ilength)) === "*"
        || (inputValue.charAt(Ilength)) === "-"
        || (inputValue.charAt(Ilength)) === "+"){
          inputValue = inputValue.slice(0, -1);
          inputValue += e.target.innerHTML;
        }else if(inputValue.length !== 0){
          inputValue += e.target.innerHTML;
        }
        mathematical.value = inputValue;
        break;
    }
  })
});


//delete 기능
deleteImg.addEventListener("click", e => {
  e.preventDefault();
  
  inputValue = inputValue.slice(0, -1);
  mathematical.value = inputValue;

  console.log(inputValue);
})


//입력값 계산하는 함수
function valuevalue (target) {
  let A = String(parseFloat(inputValue));
  let oper = inputValue.charAt(A.length);
  let arr = inputValue.split(oper);

  if(oper == "%"){
    mathValue = (Number(arr[0]) % Number(arr[1]));
  }else if(oper == "/"){
    mathValue = (Number(arr[0]) / Number(arr[1]));
  }else if(oper == "*"){
    mathValue = (Number(arr[0]) * Number(arr[1]));
  }else if(oper == "-"){
    if(arr[0] == ""){
      mathValue = -((Math.abs(Number(arr[1])) + Math.abs(Number(arr[2]))));
    } else{
      mathValue = (Number(arr[0]) - Number(arr[1]));
    }
  }else if(oper == "+"){
    mathValue = (Number(arr[0]) + Number(arr[1]));
  }
  inputValue += "=";
  mathematical.value = inputValue;
  calculatingInput.innerHTML = mathValue;
  
  if(target.id != "="){
    inputValue = String(mathValue);
  }
}
