const a = 121;
const check = (a) => {
    const a1 = a;
    let n = 0;
    while (a > 0) {
        let mod = a % 10;
        n = n * 10 + mod;
        a = Math.floor(a/10);
    }
    if (n == a1) {
        
        console.log(n,"true");
    } else {
        console.log(n,false);
    }
}
if (a < 0) {
    console.log("false");
} else {
    check(a)
}