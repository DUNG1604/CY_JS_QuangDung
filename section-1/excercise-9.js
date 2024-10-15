const matrix = [
    [1,2,3],
    [4,5,6], 
    [9,10,11]
 ]
const arr = [[0,0,0],[0,5,0],[0,0,0]]
for(let j=0;j<3;j++){
    let i = 0;
    let count = j+2;
    if(j+2<=2){
        arr[i][j+2]=matrix[i][j]
    }
    else{
        count =j+2-2
        arr[i+count][2]=matrix[i][j]
    }
}
for(let j=0;j<3;j++){
    let i=2;
    if(j-2>=0){
        arr[i][j-2]=matrix[i][j]
    }
    else{
        count = 2-(2-j)
        arr[count][0]=matrix[i][j]
    }
}
for(let i=1;i<2;i++){
    let j=0;
    if(i-2<0){
        arr[0][2-i]=matrix[i][j]
    }
}
for(let i=1;i<2;i++){
    let j=2;
    if(i-2<0){
        arr[2][2-i]=matrix[i][j]
    }
}
console.log(arr)