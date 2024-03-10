function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;//Generate a random Number
    const index = Math.round(randomNumber); //coverting float to Interger 
    const alphabet = alphabets[index];
    return alphabet;
}



function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');

}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}
function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

    


}

// function getARandomAlphabet(){
//     //get or create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);

//     //get a random index in between 0-25
//     const randomNumber = Math.random()*25;
//     const index = Math.round(randomNumber);
    

//     const alphabet = alphabets[index];
//     // console.log(index,alphabet);
//     return alphabet;

// }