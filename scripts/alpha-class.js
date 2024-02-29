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
