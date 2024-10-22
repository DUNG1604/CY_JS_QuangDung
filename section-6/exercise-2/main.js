class Egg {
    constructor(x, y, element) {
        this.x = x;
        this.y = y;
        this.element = element;
    }

    setY(y) {
        this.y = y;
        this.element.style.top = `${this.y}px`;
    }

    moveY(step) {
        this.y += step;
        this.element.style.top = `${this.y}px`;
    }

    remove() {
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
    }
}
class Basket {
    constructor(x, y, element) {
        this.x = x;
        this.y = y;
        this.element = element;
    }
    moveLeft() {
        if (this.x > 0) {
            this.x -= 20;
            this.element.style.left = `${this.x}px`;
        }
    }
    moveRight() {
        if (this.x < eggContainer.clientWidth - elementBasket.clientWidth) {
            this.x += 20;
            this.element.style.left = `${this.x}px`;
        }
    }
}

const eggContainer = document.querySelector(".egg-container");
const elementBasket = document.querySelector(".basket");
const elementScore = document.querySelector(".count-score");
const elementMiss = document.querySelector(".count-miss");
const elementCountDown = document.querySelector(".count-down");

let countMiss = 0;
let score = 0;
let time = 30;

function createEgg() {
    const maxWidth = eggContainer.clientWidth;
    const leftX = Math.random() * (maxWidth - 50);
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
    const newEgg = document.createElement("div");
    newEgg.innerHTML = randomCharacter;
    newEgg.style.left = `${leftX}px`;
    newEgg.classList.add("egg");
    eggContainer.appendChild(newEgg);

    let egg = new Egg(leftX, 0, newEgg);
    const ranMove = Math.random() * 30 + 5;
    const interval = setInterval(() => {
        egg.moveY(ranMove);
        const containerHeight = eggContainer.clientHeight;
        const eggHeight = newEgg.clientHeight;
        const boundBasket = basket.element.getBoundingClientRect();
        console.log("toạ độ", boundBasket);
        const boundEgg = egg.element.getBoundingClientRect();
        const isHit = (
            boundEgg.left < boundBasket.right &&
            boundEgg.right > boundBasket.left &&
            boundEgg.top < boundBasket.bottom &&
            boundEgg.bottom > boundBasket.top
        );
        if (isHit) {
            score++;
            elementScore.innerHTML = score;
            clearInterval(interval);
            egg.remove();
        } else if (egg.y + eggHeight >= containerHeight) {
            countMiss++;
            elementMiss.innerHTML = countMiss;
            clearInterval(interval);
            egg.remove();
        }
    }, 100);
}

let basket = new Basket(0, 0, elementBasket);

document.addEventListener("keydown", (e) => {
    const key = e.key;
    if (key == "ArrowRight") {
        basket.moveRight();
    }
    if (key == "ArrowLeft") {
        basket.moveLeft();
    }
})

const intervalCreate = setInterval(() => {
    time--;
    elementCountDown.innerHTML = time;
    if(time<=0){
        clearInterval(intervalCreate);
        alert("hết giờ")
        location.reload();
    }
    createEgg();
}, 1000);
