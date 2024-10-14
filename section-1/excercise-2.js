const arr = [10, 2, 3, 2, 5];
const arr1 = [5, 6, 7, 8, 9];


for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {  
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
}
for (let i = 0; i < arr1.length - 1; i++) {
    for (let j = 0; j < arr1.length - 1; j++) {  
        if (arr1[j] < arr1[j + 1]) {
            [arr1[j], arr1[j + 1]] = [arr1[j + 1], arr1[j]];
        }
    }
}

console.log(arr);
console.log(arr1);
