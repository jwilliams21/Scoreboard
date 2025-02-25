let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeOneBtn = document.getElementById("home-plus-one");
let homeTwoBtn = document.getElementById("home-plus-two");
let homeThreeBtn = document.getElementById("home-plus-three");
let guestOneBtn = document.getElementById("guest-plus-one");
let guestTwoBtn = document.getElementById("guest-plus-two");
let guestThreeBtn = document.getElementById("guest-plus-three");
let newGameBtn = document.getElementById("new-game-btn");

let homeCount = 0;
let guestCount = 0;

homeScore.textContent = homeCount;
guestScore.textContent = guestCount;

homeOneBtn.addEventListener("click", function() {
    homeCount += 1;
    homeScore.textContent = homeCount;
})

homeTwoBtn.addEventListener("click", function() {
    homeCount += 2;
    homeScore.textContent = homeCount;
})

homeThreeBtn.addEventListener("click", function() {
    homeCount += 3;
    homeScore.textContent = homeCount;
})

guestOneBtn.addEventListener("click", function() {
    guestCount += 1;
    guestScore.textContent = guestCount;
})

guestTwoBtn.addEventListener("click", function() {
    guestCount += 2;
    guestScore.textContent = guestCount;
})

guestThreeBtn.addEventListener("click", function() {
    guestCount += 3;
    guestScore.textContent = guestCount;
})

newGameBtn.addEventListener("click", function() {
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent = homeCount;
    guestScore.textContent = guestCount;
})