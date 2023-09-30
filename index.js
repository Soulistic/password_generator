const inputSlider=document.querySelector("[data-lengthSlider]");
const lengthDisplay=document.querySelector("[data-lengthNumber]");
const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const copyBtn=document.querySelector("[data-copy]");
const copyMsg=document.querySelector("[data-copyMsg]");
const uppercaseCheck=document.querySelector("#uppercase");
const lowercaseCheck=document.querySelector("#lowercase");
const numbersCheck=document.querySelector("#numbers");
const symbolsCheck=document.querySelector("#symbols");
const indicator=document.querySelector("[data-indicator]");
const allCheckBox=document.querySelectorAll("input[type=checkbox]");
const regeneratePassword=document.querySelector(".RegenerateBtn")

let password="";
let passwordLength=10;
let checkCount=0;

handleSlider();
setIndicator("#ccc");
//setting password length
function handleSlider(){
    inputSlider.value=passwordLength;
    lengthDisplay.innerHTML=passwordLength;
    //missing
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%"

}

function setIndicator(color){
    indicator.style.backgroundColor=color;
    //shadow
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
    
}

function getRandomInteger(min,max){
    return Math.floor(Math.random()*(max-min)+min) ;
}

function generateRandomNumber(){
    return getRandomInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRandomInteger(97, 123));
}

function generateUpperCase(){
    return String.fromCharCode(getRandomInteger(65,91));
}

function generateSymbols(){
    let symbols="~`!@#$%^&*()_+-={[}]|<,>./?:;"
    return symbols [getRandomInteger (0 ,symbols.length)];
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

async function copyContent(content){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerHTML = "copied";
    }
    catch(e){
        copyMsg.innerHTML ="Failed";
    }
    copyMsg.classList.add("active");
    setTimeout(()=>{
        copyMsg.classList.remove('active');
    },2000 );

}

function handleCheckBoxChange(){
    checkCount =0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkCount++;
        }
    });
    if(passwordLength<checkCount){
        passwordLength =checkCount;
        handleSlider();
    }
}

function shufflePassword(array){
    //fisher yates method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function generatePassword(){
    if(checkCount<=0){
        passwordDisplay.value = '';
        return;
    }
    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider();
    }

    password="";
    let funcArray=[];
    if(uppercaseCheck.checked){
        funcArray.push(generateUpperCase);
    }
    if(lowercaseCheck.checked){
        funcArray.push(generateLowerCase);
    }
    if(numbersCheck.checked){
        funcArray.push(generateRandomNumber);
    }
    if(symbolsCheck.checked){
        funcArray.push(generateSymbols);
    }

    for(let i=0;i<funcArray.length;i++){
        password+=funcArray[i]();
    }
    for(let i=0;i<passwordLength-funcArray.length;i++){
        let randIndex=getRandomInteger(0,funcArray.length);
        password+=funcArray[randIndex]();
    }
    password=shufflePassword(Array.from(password));
    passwordDisplay.value=password;
    calcStrength();
}
// event listeners

allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange);
})

inputSlider.addEventListener('input',(e)=>{
    passwordLength=e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click',()=>{
    if(passwordDisplay.value){
        copyContent();
    }
})

inputSlider.addEventListener('input',generatePassword);
uppercaseCheck.addEventListener('change',generatePassword);
lowercaseCheck.addEventListener('change',generatePassword);
symbolsCheck.addEventListener('change',generatePassword);
numbersCheck.addEventListener('change',generatePassword);
regeneratePassword.addEventListener('click',generatePassword);
