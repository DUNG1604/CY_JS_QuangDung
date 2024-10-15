const arr = ['aa', 'aa', 'aa', 'aa', 'bb', 'bb', 'bb'];
const n = 10;
let count = 0;
const test = {};
for (let i = 0; i < arr.length; i++) {
    if (!test[arr[i]]) {
        test[arr[i]] = 1;
        if (test[arr[i]] > count) {
            count = 1;
        }
    } else {
        test[arr[i]]++;
        if (test[arr[i]] > count) {
            count = test[arr[i]];
        }
    }
}
for (let i = n; i <= count + n; i++) {
    console.log(i)
}

