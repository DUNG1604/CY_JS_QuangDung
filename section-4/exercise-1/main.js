const inputBtn = document.querySelector(".input-upload");
const imgUpload = document.querySelector(".img-upload");
const listImg = document.querySelector(".list-img");

const validImageTypes = ['image/jpeg', 'image/png'];
const addImg = (res) => {
    for (let i = 0; i < res.length; i++) {
        const fileType = res[i]['type']
        if (!validImageTypes.includes(fileType)) {
            const newImgContainer = document.createElement("div");
            newImgContainer.classList.add("img-container");
            const newImg = document.createElement("img");
            newImg.src = url;
            newImg.classList.add("img-upload");
            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add("delete-btn");
            deleteBtn.innerHTML = "x";
            newImgContainer.appendChild(newImg);
            newImgContainer.appendChild(deleteBtn);
            listImg.appendChild(newImgContainer);
            inputBtn.value = "";
            return
        }
        const fileReader = new FileReader();
        fileReader.readAsDataURL(res[i]);
        fileReader.onload = () => {
            const url = fileReader.result;
            const newImgContainer = document.createElement("div");
            newImgContainer.classList.add("img-container");
            const newImg = document.createElement("img");
            newImg.src = url;
            newImg.classList.add("img-upload");
            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add("delete-btn");
            deleteBtn.innerHTML = "x";
            newImgContainer.appendChild(newImg);
            newImgContainer.appendChild(deleteBtn);
            listImg.appendChild(newImgContainer);
            inputBtn.value = "";
            deleteBtn.addEventListener("click", (event) => {
                const deleteBtn = event.target;
                const imgContainer = deleteBtn.closest('.img-container');
                imgContainer.remove();
            })
        }
    }
}

inputBtn.addEventListener("change", (e) => {
    e.stopPropagation();
    const res = e.target.files;
    addImg(res);
})

listImg.addEventListener("dragover", (e) => {
    e.preventDefault();
    listImg.classList.add("drag-over");
})
listImg.addEventListener("dragleave", (e) => {
    e.preventDefault();
    listImg.classList.remove("drag-over");
})
listImg.addEventListener("drop", (e) => {
    e.preventDefault();
    listImg.classList.remove("drag-over");
    const res = e.dataTransfer.files;
    addImg(res);
})







