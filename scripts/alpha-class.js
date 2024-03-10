// function play(){
//  step-1: Hide the home Screen. To hide the screen add the class hidden to the home section.
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');
// console.log(homeSection.classList);


// step-2: show the playground
// const playgroundSection = document.getElementById('play-ground');
// console.log(playgroundSection.classList)
// playgroundSection.classList.remove('hidden')
// }
// function handleKeyBoardButtonPress(){
//     console.log('Button Pressed');
// }

// capture keyboard keypress
// document.addEventListener('keyup', handleKeyBoardButtonPress)

function handleKeyboardKeyUpEvent(){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    //Stop game if pressed esc
    if(playerPressed === 'Escape'){
        gameOver();
    }
    // console.log('Player Pressed',playerPressed);
    // Get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;       
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    // console.log(playerPressed,expectedAlphabet);
    // check matched or not
     if(playerPressed === expectedAlphabet){
        console.log('You got a Point ^_^ ');
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);





        // ----------------------------------------------
        // update score
        // 1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // const currentScore = getTextElementValueById('current-score');
        // 2.Increase the score by one
        const newScore = currentScore + 1;
        // 3.Show the updates score
        // currentScoreElement.innerText = newScore;



        // start a new round

        // console.log('You have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

}
else{
    console.log('You Missed. You lost a life.');
    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life',updatedLife);
    if(updatedLife === 0){
        gameOver();
    }

    // -------------------------------------------------
    // Step-1: get the current life number
    // const currentLifeELement = document.getElementById('current-life');
    // const currentLifeText = currentLifeELement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // step-2: reduce the life count
    // const newLife = currentLife - 1 ;
    // step-3:Updated life count
    // currentLifeELement.innerText = newLife;
}

}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);
function continueGame(){
    // step-1:Generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet', alphabet);

    // set random generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    
    // set background color
    setBackgroundColorById(alphabet);
}
function play(){
    //hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0)
}

function gameOver(){

    hideElementById('play-ground');
    showElementById('final-score');
    //update final score
    // 1.get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore);

    //clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    // removeBackgroundColorById(currentAlphabet);

}
