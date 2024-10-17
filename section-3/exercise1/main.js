const date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let time = hour.toLocaleString() + ":" + minute.toLocaleString()

const elementTime = document.querySelector(".current-time");
elementTime.innerHTML = time;
const inputs = document.querySelectorAll("input");

let currentInput = null;

inputs.forEach((input) => {
    input.addEventListener("focus", () => {
        currentInput = input;
    });
});

const fillNumber = (number, event) => {
    event.preventDefault();

    if (currentInput) {
        currentInput.value += number;
        currentInput.focus();
    } else {
        console.log("Không có ô input nào đang được focus");
    }
}

const deleteInput = (event) => {
    event.preventDefault();
    currentInput.value = "";
    currentInput.focus();
}
const valid1 = document.getElementsByClassName("valid1")[0];
const valid2 = document.getElementsByClassName("valid2")[0];
const valid3 = document.getElementsByClassName("valid3")[0];

const validateInputNumber = (input) => {
    const regex = /^(?:[1-9][0-9]{0,4})$/;
    if (regex.test(input)) {
        return true;
    } else {
        return false;
    }
}
const validateInputMath = (input) => {
    const regex = /^[\+\-x\/]$/;
    if (regex.test(input)) {
        return true;
    } else {
        return false;
    }
}
const resInput = document.querySelector(".response-input");
const calculator = (input1, math, input2)=>{
    if(math == "+") return input1 + input2;
    if(math == "-") return input1 - input2;
    if(math == "x") return input1 * input2;
    if(math == "/"){
        const res = input1/input2;
        return parseFloat(res.toFixed(2));
    };
}

const cal = () => {
    const input1 = inputs[0].value;
    const input2 = inputs[2].value;
    const input3 = inputs[1].value;
    let checkValid = true;
    if (validateInputNumber(input1)) {
        valid1.style.display = "none";
    } else {
        valid1.style.display = "block";
        checkValid = false;
    }
    if (validateInputNumber(input2)) {
        valid2.style.display = "none";
    } else {
        valid2.style.display = "block";
        checkValid = false;
    }
    if (validateInputMath(input3)) {
        valid3.style.display = "none";
    } else {
        valid3.style.display = "block";
        checkValid = false;
    }
    if(!checkValid){
        console.log("vẫn sai")
        return;
    }
    const number1 = parseInt(input1, 10);;
    const number2 = parseInt(input2, 10);;
    const res =  calculator(number1,input3,number2);
    console.log("res",res)
    resInput.innerHTML = res;
}
