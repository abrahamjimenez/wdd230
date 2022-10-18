// Define Audio

const doSoundStart = document.querySelector("#key_one");

const reSound = document.querySelector("#key_two");

const miSound = document.querySelector("#key_three");

const faSound = document.querySelector("#key_four");

const soSound = document.querySelector("#key_five");

const laSound = document.querySelector("#key_six");

const tiSound = document.querySelector("#key_seven");

const doSoundEnd = document.querySelector("#key_eight");

// Functions

function playKeyOne() {
  doSoundStart.play();
}
function playKeyTwo() {
  reSound.play();
}
function playKeyThree() {
  miSound.play();
}
function playKeyFour() {
  faSound.play();
}
function playKeyFive() {
  soSound.play();
}
function playKeySix() {
  laSound.play();
}
function playKeySeven() {
  tiSound.play();
}
function playKeyEight() {
  doSoundEnd.play();
}
