const questions = [
    {
        content: 'Sông nào chảy qua Hà Nội',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/MatnuocSongHong-06112008333.JPG',
        correctAnswer: 'Sông Hồng',
        maxShowingCharacter: 2
    },
    {
        content: 'Ai là người phát minh ra bóng đèn sợi đốt',
        image: 'https://st.quantrimang.com/photos/image/2016/10/25/thomsa-edison-4.jpg',
        correctAnswer: 'Edison',
        maxShowingCharacter: 3
    },
    {
        content: 'Nguời giàu nhất thế giới ',
        image: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455',
        correctAnswer: 'Jezz Bezos',
        maxShowingCharacter: 2
    }
]

const elementNotification = document.querySelector(".notification");
const elementQuestion = document.querySelector(".question");
const elementListChar = document.querySelector(".list-char");
const elementImg = document.querySelector("img");
let currentQuestion = 0;

const renderItemChar = () => {
    let str = questions[currentQuestion].correctAnswer.replace(" ", "").split("");
    let countHelp = questions[currentQuestion].maxShowingCharacter;
    elementQuestion.innerHTML = questions[currentQuestion].content;
    elementNotification.innerHTML = `Còn ${countHelp} sự trợ giúp`;
    elementImg.src = questions[currentQuestion].image;
    let arrActive = [];
    for (let i = 0; i < str.length; i++) {
        arrActive.push(false);
    }
    for (let i = 0; i < str.length; i++) {
        const charItem = document.createElement("div");
        // charItem.innerHTML = str[i];
        console.log(str[i])
        charItem.style.width = "50px";
        charItem.style.height = "50px";
        charItem.style.display = "flex";
        charItem.style.justifyContent = "center";
        charItem.style.alignItems = "center";
        charItem.style.backgroundColor = "#FF7F50";
        charItem.style.cursor = "pointer";
        charItem.addEventListener("click", function () {
            if (countHelp < 1) {
                alert("Đã hết lượt trợ giúp");
                return;
            }
            --countHelp;
            elementNotification.innerHTML = `Còn ${countHelp} sự trợ giúp`;
            this.innerHTML = str[i];
        });
        elementListChar.appendChild(charItem);
    }
}
renderItemChar();


const elementInput = document.querySelector(".input-user");
const elementNext = document.querySelector(".next-btn");

const submitGame = () => {
    let str = questions[currentQuestion].correctAnswer.replace(" ", "").split("");
    const resUser = elementInput.value.toLowerCase();
    const resTrue = questions[currentQuestion].correctAnswer.toLowerCase();

    if (resUser == resTrue) {
        alert("kết quả đúng rồi");
        for (let i = 0; i < str.length; i++) {
            elementListChar.children[i].innerHTML = str[i];
        }
        elementNext.style.display = "block";
        elementInput.value = "";
    } else {
        alert("kết quả sai rồi");
    }
}
const elementWin = document.querySelector(".win-btn");
const elementMain = document.querySelector(".main-container");

const nextFunc = () => {
    while (elementListChar.firstChild) {
        elementListChar.removeChild(elementListChar.firstChild);
    }
    currentQuestion++;
    if(currentQuestion>=questions.length){
        elementWin.style.display = "block";
        elementMain.style.display = "none";
        return
    }
    renderItemChar();
    elementNext.style.display = "none";
}

const winFunc = () => {
    location.reload();
}









