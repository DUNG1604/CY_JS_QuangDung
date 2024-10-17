const btnPlay = document.querySelector(".play-icon");
const homeScreen = document.querySelector(".play-comtainer");
const mainScreen = document.querySelector(".main-screen");
let isPlay = false;

btnPlay.addEventListener("click", () => {
    homeScreen.style.display = "none";
    mainScreen.style.display = "block";
})

const questions = [
    {
        content: "Câu hỏi 1: Đông Lào là nước nào ?",
        answers: [
            "A.Việt Nam",
            "B.Lào",
            "C.Philipine",
            "D.Indonesia"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 2: Tây Lào là nước nào",
        answers: [
            "A.Miến Điện",
            "B.Ấn Độ",
            "C.Nepal",
            "D.Thái Lan"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 3: Nam Lào là nước nào",
        answers: [
            "A.Campuchia",
            "B.Malaysia",
            "C.Singapore",
            "D.Việt Nam"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 4: Bắc Lào là nước nào",
        answers: [
            "A.Trung Quốc",
            "B.Hàn Quốc",
            "C.Nhật Bản",
            "D.Hoa Kỳ"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 5: Lào có bao nhiêu tỉnh thành",
        answers: [
            "A.14",
            "B.15",
            "C.16",
            "D.17"
        ],
        correctAnswer: 1
    },
    {
        content: "Câu hỏi 6: Đâu là thủ đô của Lào",
        answers: [
            "A.Hà Nội",
            "B.Bangkok",
            "C.Vientiane",
            "D.Phnom Penh"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 7: Lào có biển không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 1
    },
    {
        content: "Câu hỏi 8: Lào có sân bay quốc tế không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 9: Lào có biên giới với Việt Nam không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 10: Thủ đô của Brueni là gì",
        answers: [
            "A.Bangkok",
            "B.Bandar Seri Begawan",
            "C.Vientiane",
            "D.Phnom Penh"
        ],
        correctAnswer: 1
    }
];
const elementQs = document.querySelector(".question");
const elementAns = document.querySelector(".answers");
// console.log(elementAns);

let countTrue = 0;
let currentQuestion = 0;

const changeQuestion = (n) => {
    currentQuestion += n;

    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
    }
    if (currentQuestion < 0) {
        currentQuestion = questions.length - 1;
    }
    elementQs.innerHTML = questions[currentQuestion].content;
    for (let i = 0; i < 4; i++) {
        elementAns.children[i].innerHTML = questions[currentQuestion].answers[i];
    }
    for (let i = 0; i < 4; i++) {
        if (questions[currentQuestion].select === i) {
            elementAns.children[i].style.backgroundColor = "#FF7F50";
        } else {
            elementAns.children[i].style.backgroundColor = "#FFFFFF";
        }
    }
}

const tickQuestion = (choose) => {
    const ans = choose.innerHTML;
    console.log(ans);

    if (ans[0] == "A") {
        questions[currentQuestion]["select"] = 0;
    } else if (ans[0] == "B") {
        questions[currentQuestion]["select"] = 1;
    } else if (ans[0] == "C") {
        questions[currentQuestion]["select"] = 2;
    } else if (ans[0] == "D") {
        questions[currentQuestion]["select"] = 3;
    }
    for (let i = 0; i < 4; i++) {
        if (questions[currentQuestion].select === i) {
            elementAns.children[i].style.backgroundColor = "#FF7F50"; // Màu cho câu trả lời đã chọn
        } else {
            elementAns.children[i].style.backgroundColor = "#FFFFFF"; // Đặt lại màu cho các câu trả lời khác
        }
    }
    changeQuestion(1);
    console.log(questions)
}

const elementScore = document.querySelector(".score-total");
const elementTable = document.querySelector(".table-answer");
const elementTotal = document.querySelector(".total-resul");

const submitTest = () => {
    let count = 0;
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].select >= 0 && questions[i].select < 4) {
            count++;
        }
        if (questions[i].correctAnswer == questions[i].select) {
            countTrue++;
        }
    }
    if (count < questions.length) {
        alert(`Hãy làm đủ ${questions.length} câu hỏi`)
        return
    }
    elementScore.innerHTML = countTrue;
    for (let i = 0; i < questions.length; i++) {
        const colum = document.createElement("div");
        let answerUser;
        let answerTrue;
        if(questions[i].correctAnswer==0) answerTrue = "A";
        if(questions[i].select==0) answerUser = "A";
        if(questions[i].correctAnswer==1) answerTrue = "B";
        if(questions[i].select==1) answerUser = "B";
        if(questions[i].correctAnswer==2) answerTrue = "C";
        if(questions[i].select==2) answerUser = "C";
        if(questions[i].correctAnswer==3) answerTrue = "D";
        if(questions[i].select==3) answerUser = "D";
        colum.innerHTML = `Câu ${i+1}: Đáp án của bạn ${answerUser} ------ Đáp án Đúng: ${answerTrue}`;
        elementTable.appendChild(colum)
    }
    mainScreen.style.display = "none";
    elementTotal.style.display = "block";
}

const returnBtn = ()=>{
    location.reload();
}





