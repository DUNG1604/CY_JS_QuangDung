const data = [
    { question: "Thủ đô của Việt Nam là", answer: "Hà Nội" },
    { question: "Thủ đô của Nhật Bản là", answer: "Tokyo" },
    { question: "Thủ đô của Hàn Quốc là", answer: "Seoul" },
    { question: "Thủ đô của Trung Quốc là", answer: "Bắc Kinh" },
    { question: "Thủ đô của Indonesia là", answer: "Jakarta" },
    { question: "Thủ đô của Philippines là", answer: "Manila" },
    { question: "Thủ đô của Singapore là", answer: "Singapore" },
    { question: "Thủ đô của Malaysia là", answer: "Kuala Lumpur" },
    { question: "Thủ đô của Campuchia là", answer: "Phnom Penh" },
    { question: "Thủ đô của Lào là", answer: "Vientiane" },
    { question: "Thủ đô của Myanmar là", answer: "Naypyidaw" },
    { question: "Thủ đô của Thái Lan là", answer: "Bangkok" },
    { question: "Thủ đô của Ấn Độ là", answer: "New Delhi" },
    { question: "Thủ đô của Nepal là", answer: "Kathmandu" },
    { question: "Thủ đô của Bhutan là", answer: "Thimphu" },
    { question: "Thủ đô của Bangladesh là", answer: "Dhaka" },
    { question: "Thủ đô của Sri Lanka là", answer: "Colombo" },
    { question: "Thủ đô của Pakistan là", answer: "Islamabad" },
    { question: "Thủ đô của Afghanistan là", answer: "Kabul" },
    { question: "Thủ đô của Iran là", answer: "Tehran" },
    { question: "Thủ đô của Iraq là", answer: "Baghdad" },
    { question: "Thủ đô của Ả Rập Xê Út là", answer: "Riyadh" },
    { question: "Thủ đô của Qatar là", answer: "Doha" },
    { question: "Thủ đô của Kuwait là", answer: "Kuwait City" }
];

function loadQuestions() {
    const questionsContainer = document.getElementById('questions');
    const questionsText = data.map((item, index) => {
        return `
        <span class="question">
         ${item.question}
         <span class="indicator" id="indicator-${index}">${index + 1}</span>
         <input type="text" id="answer-${index}"placeholder="_______________________"></span>
         
         ${index < data.length - 1 ? '.' : ''}`;
    }).join(' '); // Dùng dấu chấm giữa các câu hỏi

    questionsContainer.innerHTML = questionsText; // Hiển thị tất cả câu hỏi
}

document.getElementById('submitBtn').addEventListener('click', () => {
    data.forEach((item, index) => {
        const userAnswer = document.getElementById(`answer-${index}`).value.trim();
        const indicator = document.getElementById(`indicator-${index}`);

        if (userAnswer.toLowerCase() === item.answer.toLowerCase()) {
            indicator.classList.add('correct');
            indicator.classList.remove('wrong');
            indicator.style.backgroundColor = 'green';
        } else {
            indicator.classList.add('wrong');
            indicator.classList.remove('correct');
            indicator.style.backgroundColor = 'red';
        }
    });
});

// Load questions on page load
loadQuestions();