const a = 7;

const checkSnt = (n) => {
    if (n < 2) return false;
    for (i = 2; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
const checkShh = (n) => {
    let sum = 0;
    for (i = 1; i < n; i++) {
        if (n % i == 0) sum += i;
    }
    if(sum == a)return true;
    else return false
}
if (checkSnt(a)) console.log("Là số nt");
else console.log("không là snt");
if (checkShh(a)) console.log("Là số hh");
else console.log("Không là số hh");