// Lấy các phần tử cần sử dụng
const elementForm = document.querySelector(".add-container");
const elementAddform = document.querySelector(".add-form");
const elementAddItem = document.querySelector(".btn-add");
const elementInputTitle = document.querySelector(".input-title");
const elementInputContent = document.querySelector("#input-content");
const elementListItem = document.querySelector(".item-container");
let checkAdd = true; // Biến kiểm tra trạng thái Thêm/Sửa

// Khi nhấn nút "Thêm", hiển thị form để thêm mục mới
elementAddItem.addEventListener("click", () => {
    checkAdd = true; // Đặt về chế độ thêm mới
    elementForm.style.display = "block"; // Hiển thị form
});

// Lấy danh sách từ localStorage hoặc khởi tạo mảng rỗng
let listTodo = JSON.parse(localStorage.getItem("list")) || [];

// Hàm render lại danh sách các mục todo
const renderLists = () => {
    elementListItem.innerHTML = ''; // Xóa nội dung cũ
    listTodo.forEach((item, index) => {
        const listItem = document.createElement("div");
        listItem.classList.add("item");
        listItem.setAttribute('data-index', index);
        listItem.innerHTML = `
            <div class="item-main">
                <div class="item-title">${item.title}</div>
                <div class="item-content">${item.content}</div>
            </div>
            <div class="item-btn">
                <button type="button" class="change-item-btn btn btn-warning">Sửa</button>
                <button type="button" class="delete-item-btn btn btn-danger">Xoá</button>
            </div>
        `;
        elementListItem.appendChild(listItem);

        const deleteBtn = listItem.querySelector(".delete-item-btn");
        deleteBtn.addEventListener("click", () => {
            const indexToDelete = listItem.getAttribute('data-index');
            listTodo.splice(indexToDelete, 1);
            localStorage.setItem("list", JSON.stringify(listTodo));
            renderLists(); 
        });

        const updateBtn = listItem.querySelector(".change-item-btn");
        updateBtn.addEventListener("click", () => {
            updateItem(index); 
        });
    });
};

const submitForm = (e) => {
    e.preventDefault(); 
    const title = elementInputTitle.value;
    const content = elementInputContent.value;

    if (checkAdd) {
        const itemTodo = {
            title: title,
            content: content
        };
        listTodo.push(itemTodo); 
    } else {
        const indexToUpdate = elementAddform.getAttribute('data-index'); 
        listTodo[indexToUpdate] = {
            title: title,
            content: content
        };
    }

    localStorage.setItem("list", JSON.stringify(listTodo));

    elementInputTitle.value = "";
    elementInputContent.value = "";

    elementForm.style.display = "none";
    renderLists();
};


const updateItem = (index) => {
    checkAdd = false; 
    elementForm.style.display = "block";

    const todoItem = listTodo[index];
    elementInputTitle.value = todoItem.title;
    elementInputContent.value = todoItem.content;

    elementAddform.setAttribute('data-index', index);
};

elementAddform.addEventListener("submit", submitForm);

renderLists();
