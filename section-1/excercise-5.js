const str = ' XIn ch@ào cy';
const formatStr = str.toLocaleLowerCase()
    .replace(/[@#\[\]()!{}]/g, '')
    .split(' ').filter(s => s != '')
    .map(str => str.charAt(0).toLocaleUpperCase() + str.slice(1))
    .reverse();
console.log(formatStr);

const str1 = 'Xin 20 c{h}ào 60  #Cy30@!Tech(VN)  100 ';
// const str1 = ''
const formatStr1 = str1.replace(/[@#\[\]()!{}]/g, '')
    .split(' ')
    .filter(s => s != '')
    .filter(word => !isNaN(word));
const arrNumber = formatStr1.map(Number);
let sum = 0;
for (let i = 0; i < arrNumber.length; i++) {
    sum += arrNumber[i];
}
const avr = arrNumber.length > 0 ? (sum / arrNumber.length) : 0;
const formatAvr = avr.toFixed(1);

console.log(formatAvr);
