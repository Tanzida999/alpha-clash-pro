function play(){
// step-1: Hide the home Screen. To hide the screen add the class hidden to the home section.
const homeSection = document.getElementById('home-screen');
homeSection.classList.add('hidden')
// console.log(homeSection.classList)

//step-2: show the playground
const playgroundSection = document.getElementById('play-ground');
// console.log(playgroundSection.classList)
playgroundSection.classList.remove('hidden')
}