const arr1 = [1, 2];
const arr2 = [3,4];
const arr = [...arr1, ...arr2];
if (arr.length % 2 == 0) {
    res = (arr[(arr.length / 2)] + arr[(arr.length / 2) -1]) / 2;
    console.log( "chan",res);
} else {
    console.log("le",arr[Math.ceil(arr.length / 2)-1])
}
