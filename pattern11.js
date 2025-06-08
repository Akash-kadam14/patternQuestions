
/**
 
1
2 3
4 5 6
7 8 9 10

*/
const totalRows = 4;

let k = 1
for(let i = 1; i <= totalRows; i++){
 let str= '';
 for(j = 1; j <= i; j++){
    str+= k
    k+=1       
   }
   console.log(str)
 }