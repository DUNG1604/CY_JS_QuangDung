const str = "[]()"
const arr = [];
for (let i = 0; i < str.length; i++) {
    if (arr[arr.length - 1] == '[' && str[i] == ']') {
        arr.pop();
    } else
        if (arr[arr.length - 1] == '{' && str[i] == '}') {
            arr.pop();
        } else
            if (arr[arr.length - 1] == '(' && str[i] == ')') {
                arr.pop();
            } else (
                arr.push(str[i])
            )
}
if (arr.length == 0) {
    console.log("true");
} else {
    console.log("false");
}