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
        //update score
        //1.get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);
        //2.Increase the score by one
        const newScore = currentScore + 1;
        //3.Show the updates score
        currentScoreElement.innerText = newScore;



        //start a new round

        console.log('You have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

}
else{
    console.log('You Missed. You lost a life.');
    //Step-1: get the current life number
    const currentLifeELement = document.getElementById('current-life');
    const currentLifeText = currentLifeELement.innerText;
    const currentLife = parseInt(currentLifeText);
    //step-2: reduce the life count
    const newLife = currentLife - 1 ;
    //step-3:Updated life count
    currentLifeELement.innerText = newLife;
}

}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);
function continueGame(){
    //step-1:Generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet', alphabet);

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
