const listCheckTrue = [];

function makeInput() {
    const elementContent = document.getElementById('content');
    const arr = elementContent.innerHTML.split(/{{(.*?)}}/g);
    console.log(arr)
    elementContent.innerHTML = "";

    let count = 1;
    arr.forEach((value, index) => {
        if (index % 2 === 0) {
            elementContent.appendChild(document.createTextNode(value));
        } else {
            listCheckTrue.push(value);
            const spanElement = document.createElement('span');
            spanElement.innerHTML = count++;
            elementContent.appendChild(spanElement);
            const inputElement = document.createElement('input');
            inputElement.type = "text";
            elementContent.appendChild(inputElement);
        }
    });
}

makeInput();

const checkInput = (event) => {
    event.preventDefault();
    let listInput = document.querySelectorAll('input');
    listInput.forEach((element, index) => {
        if (element.value == listCheckTrue[index]) {
            element.style.borderBottom = "1px dotted green";
            element.previousElementSibling.style.backgroundColor = 'green'
        } else {
            element.style.borderBottom = "1px dotted red";
            element.previousElementSibling.style.backgroundColor = 'red'
        };
    });
}

const resetBtn = () => {
    location.reload();
}