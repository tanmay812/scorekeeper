const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const iswin = document.querySelector('#playto');
let p1Score = 0;
let p2Score = 0;
let winningscore = 3;
let gameover = false;

p1Button.addEventListener('click', function () {
    if (!gameover) {
        p1Score += 1;
        if (p1Score === winningscore) {
            gameover = true;
        }
        p1Display.textContent = p1Score;

    }
})

p2Button.addEventListener('click', function () {
    if (!gameover) {
        p2Score += 1;
        if (p2Score === winningscore) {
            gameover = true;
        }
        p2Display.textContent = p2Score;

    }
})
iswin.addEventListener('change', function () {
    winningscore = parseInt(this.value); //convert the string taken from drop down menu to number
    reset();
})
resetButton.addEventListener('click', reset)
function reset() {
    gameover = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
}