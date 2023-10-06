const smile = document.querySelector("#smile");
const clear = document.querySelector("#clear");
const decimalPoint = document.querySelector("#decimalPoint");
const remainder = document.querySelector("#remainder");
const division = document.querySelector("#division");
const Multiplication = document.querySelector("#Multiplication");
const Minus = document.querySelector("#Minus");
const addition = document.querySelector("#addition");
const enter = document.querySelector("#enter");

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");

const mathematical = document.querySelector(".mathematical");
const calculatingInput = document.querySelector(".calculatingInput");
const deleteImg = document.querySelector(".deleteImg");
const buttonbutton = document.querySelector(".buttonbutton");


let inputValue = "";
let value = "";

let mathValue;

buttonbutton.addEventListener("click", e => {
  e.preventDefault();

  const target = e.target;
  if(target.id != ''){
    switch(target.id){
      case "zerozero" :
        if(inputValue.length == 0){
          inputValue += "";
        }else{
          inputValue += "00";
        }
        mathematical.value = inputValue;
        break;
      
      case "zero" :
        if(inputValue.length == 0){
          inputValue += "";
        } else {
          inputValue += "0";
        }
        mathematical.value = inputValue;
        break;
      
      case "one" :
        inputValue += "1";
        mathematical.value = inputValue;
        break;
    
      case "two" :
        inputValue += "2";
        mathematical.value = inputValue;
        break;

      case "three" :
        inputValue += "3";
        mathematical.value = inputValue;
        break;

      case "four" :
        inputValue += "4";
        mathematical.value = inputValue;
        break;

      case "five" :
        inputValue += "5";
        mathematical.value = inputValue;
        break;
      
      case "six" :
        inputValue += "6";
        mathematical.value = inputValue;
        break;
    
      case "seven" :
        inputValue += "7";
        mathematical.value = inputValue;
        break;

      case "eight" :
        inputValue += "8";
        mathematical.value = inputValue;
        break;

      case "nine" :
        inputValue += "9";
        mathematical.value = inputValue;
        break;


      case "smile" :
        inputValue = "";
        mathematical.value = inputValue;
        calculatingInput.innerHTML = 0;
        break;
        
      case "clear" :
        inputValue = "";
        mathematical.value = inputValue;
        calculatingInput.innerHTML = 0;
        break;

      case "remainder" :
        if(inputValue.includes("%")
            || inputValue.includes("/")
            || inputValue.includes("*")
            || inputValue.includes("+")
            || inputValue.charAt(0) != "-" && inputValue.includes("-")
        ){
          valuevalue(target);
        }
        else if((inputValue.charAt(inputValue.length-1)) == "%"){
          inputValue += "";
        }
        else if ((inputValue.charAt(inputValue.length-1)) == "/" 
            || (inputValue.charAt(inputValue.length-1)) == "*"
            || (inputValue.charAt(inputValue.length-1)) == "-"
            || (inputValue.charAt(inputValue.length-1)) == "+"
          ){
          inputValue = inputValue.slice(0, -1);
          inputValue += "%";
        }
        else if(inputValue.length != 0){
          inputValue += "%";
        }
        
        mathematical.value = inputValue;
        break;

      case "division" :
        if(inputValue.includes("%")
            || inputValue.includes("/")
            || inputValue.includes("*")
            || inputValue.includes("+")
            || inputValue.charAt(0) != "-" && inputValue.includes("-")
        ){
          valuevalue(target);
        }
        else if((inputValue.charAt(inputValue.length-1)) == "/"){
          inputValue += "";
        }
        else if ((inputValue.charAt(inputValue.length-1)) == "%" 
            || (inputValue.charAt(inputValue.length-1)) == "*"
            || (inputValue.charAt(inputValue.length-1)) == "-"
            || (inputValue.charAt(inputValue.length-1)) == "+"
          ){
          inputValue = inputValue.slice(0, -1);
          inputValue += "/";
        }
        else if(inputValue.length != 0){
          inputValue += "/";
        }
        mathematical.value = inputValue;
        break;

      case "Multiplication" :
        if(inputValue.includes("%")
            || inputValue.includes("/")
            || inputValue.includes("*")
            || inputValue.includes("+")
            || inputValue.charAt(0) != "-" && inputValue.includes("-")
        ){
          valuevalue(target);
        }
        else if((inputValue.charAt(inputValue.length-1)) == "*"){
          inputValue += "";
        }
        else if ((inputValue.charAt(inputValue.length-1)) == "%" 
            || (inputValue.charAt(inputValue.length-1)) == "/"
            || (inputValue.charAt(inputValue.length-1)) == "-"
            || (inputValue.charAt(inputValue.length-1)) == "+"
          ){
          inputValue = inputValue.slice(0, -1);
          inputValue += "*";
        }
        else if(inputValue.length != 0){
          inputValue += "*";
        }
        mathematical.value = inputValue;
        break;
      
      case "Minus" :
        if(inputValue.includes("%")
            || inputValue.includes("/")
            || inputValue.includes("*")
            || inputValue.includes("+")
            || inputValue.charAt(0) != "-" && inputValue.includes("-")
        ){
          valuevalue(target);
        }
        else if((inputValue.charAt(inputValue.length-1)) == "-"){
          inputValue += "";
        }
        else if ((inputValue.charAt(inputValue.length-1)) == "%" 
            || (inputValue.charAt(inputValue.length-1)) == "/"
            || (inputValue.charAt(inputValue.length-1)) == "*"
            || (inputValue.charAt(inputValue.length-1)) == "+"
          ){
          inputValue = inputValue.slice(0, -1);
          inputValue += "-";
        }
        else{
          inputValue += "-";
        }
        mathematical.value = inputValue;
        break;
    
      case "addition" :
        if(inputValue.includes("%")
            || inputValue.includes("/")
            || inputValue.includes("*")
            || inputValue.includes("+")
            || inputValue.charAt(0) != "-" && inputValue.includes("-")
        ){
          valuevalue(target);
        }
        else if((inputValue.charAt(inputValue.length-1)) == "+"){
          inputValue += "";
        }
        else if ((inputValue.charAt(inputValue.length-1)) == "%" 
            || (inputValue.charAt(inputValue.length-1)) == "/"
            || (inputValue.charAt(inputValue.length-1)) == "*"
            || (inputValue.charAt(inputValue.length-1)) == "-"
          ){
          inputValue = inputValue.slice(0, -1);
          inputValue += "+";
        }
        else if(inputValue.length != 0){
          inputValue += "+";
        }
        mathematical.value = inputValue;
        break;

      case "decimalPoint" :
        let A = inputValue.split(/\%|\*|\/|\-|\+/)
        console.log(A)

        if(inputValue.length == 0){
          inputValue += "0.";
        } 
        else if(A[0].includes(".") && !A[1].includes(".")){
          inputValue += "0.";
        }
        else if(!A[0].includes(".")){
          inputValue += ".";
        }
        mathematical.value = inputValue;
        break;

      case "enter" :
        valuevalue(target);

        // const addsplit = inputValue.split("+");
        // let add = [];
        // let notAdd = [];
        // let minsplit = [];
        // let min = [];
        // let notMin = [];
        // let numsplit = [];
        // let addAdd = 0;
        // let minAdd = 0;
        // let numsplitAdd = 0;
        // for(let i=0; i<addsplit.length; i++){
        //   if(!Number(addsplit[i])){
        //     notAdd.push(addsplit[i]);
        //   }else {
        //     add.push(Number(addsplit[i]));
        //   }
        // }
        // console.log("add: ", add);
        // console.log("notAdd: ", notAdd);

        // for(let i=0; i<notAdd.length; i++){
        //   if(notAdd[i].indexOf("-")){
        //     minsplit.push(notAdd[i].split("-"));
        //   }else {
        //     minsplit.push(notAdd[i]);
        //   }
        
        // }
        // console.log("minsplit: ", minsplit);
        
        // for(let i=0; i<minsplit.length; i++){
        //   console.log("ilength", minsplit[i].length);
        //   for(let j=0; j<minsplit[i].length; j++){
        //     if(!Number(minsplit[i][j])){
        //       notMin.push(minsplit[i][j]);
        //     }else{
        //       min.push(Number(minsplit[i][j]));
        //     }
        //   }
        // }
        // console.log("min: ", min);
        // console.log("notMin: ", notMin);

        // for(let i=0; i<notMin.length; i++){
        //   numsplit.push(eval(notMin[i]));
        // }
        // console.log("numsplit: ", numsplit);

        // for(let i=0; i<add.length; i++){
        //   addAdd += parseInt(add[i]);
        // }
        // for(let i=0; i<min.length; i++){
        //   minAdd -= parseInt(min[i]);
        // }
        // for(let i=0; i<numsplit.length; i++){
        //   numsplitAdd += parseInt(numsplit[i]);
        // }
        // console.log("addAdd: ", addAdd);
        // console.log("minAdd: ", minAdd);
        // console.log("numsplitAdd: ", numsplitAdd);
        
        // mathematical.value = (parseInt(addAdd) + parseInt(minAdd) + parseInt(numsplitAdd));

        break;
    }
  }
  
})

deleteImg.addEventListener("click", e => {
  e.preventDefault();
  
  inputValue = inputValue.slice(0, -1);
  mathematical.value = inputValue;

  console.log(inputValue);
})


function valuevalue (target) {
  let A = String(parseFloat(inputValue));
  let oper = inputValue.charAt(A.length);
  let arr = inputValue.split(oper);

  if(oper == "%"){
    mathValue = (Number(arr[0]) % Number(arr[1])).toFixed(2);
    inputValue += "=";
    mathematical.value = inputValue;
    calculatingInput.innerHTML = mathValue;
  } 
  else if(oper == "/"){
    mathValue = (Number(arr[0]) / Number(arr[1])).toFixed(2);
    inputValue += "=";
    mathematical.value = inputValue;
    calculatingInput.innerHTML = mathValue;
  }
  else if(oper == "*"){
    mathValue = (Number(arr[0]) * Number(arr[1])).toFixed(2);
    inputValue += "=";
    mathematical.value = inputValue;
    calculatingInput.innerHTML = mathValue;
  }
  else if(oper == "-"){
    if(arr[0] == ""){
      mathValue = -((Math.abs(Number(arr[1])) + Math.abs(Number(arr[2])))).toFixed(2);
      inputValue += "=";
      mathematical.value = inputValue;
      calculatingInput.innerHTML = mathValue;
    } 
    else{
      mathValue = (Number(arr[0]) - Number(arr[1])).toFixed(2);
      inputValue += "=";
      mathematical.value = inputValue;
      calculatingInput.innerHTML = mathValue;
    }
    }
    else if(oper == "+"){
      mathValue = (Number(arr[0]) + Number(arr[1])).toFixed(2);
      inputValue += "=";
      mathematical.value = inputValue;
      calculatingInput.innerHTML = mathValue;
    }
  
  if(target.id != "" && target.id != "="){
    inputValue = String(mathValue);
  }

  console.log(inputValue);
}
