// function play(){
// // step-1: Hide the home Screen. To hide the screen add the class hidden to the home section.
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden')
// // console.log(homeSection.classList)

// //step-2: show the playground
// const playgroundSection = document.getElementById('play-ground');
// // console.log(playgroundSection.classList)
// playgroundSection.classList.remove('hidden')
// }
// function handleKeyBoardButtonPress(){
//     console.log('Button Pressed');
// }

// //capture keyboard keypress
// document.addEventListener('keyup', handleKeyBoardButtonPress)

function handleKeyboardKeyUpEvent(){
    const playerPressed = event.key;
    console.log('Player Pressed',playerPressed);

    //Get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;       
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed,expectedAlphabet);
     //check matched or not
     if(playerPressed === expectedAlphabet){
        console.log('You got a Point ^_^ ');

}
else{
    console.log('You Missed. You lost a life.');
}

}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);
function continueGame(){
    //step-1:Generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet);

    //set random generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    
    //set background color
    setBackgroundColorById(alphabet);
}
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
