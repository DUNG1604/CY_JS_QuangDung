const obj = {
    a: 1,
    b: 2,
    c: 3
}

const cpy = (obj) => {
    return { ...obj }
}
const objCpy = cpy(obj);
console.log(objCpy);