/*
          *
        * * *
      * * * * *
    * * * * * * *
  * * * * * * * * *
  * * * * * * * * *
    * * * * * * *
      * * * * *
        * * *
          *  
  
*/

const row = 11
const column = row - 1;
const halfRow = Math.floor((row + 1) / 2); 
console.log(halfRow);
let k = 0;
for(let i = 1; i <= row; i++) {
    let str = '';
    if(i < halfRow) k++;
    if(i > halfRow) k--;
    for(let j = 1; j<= column; j++) {
        if(j>= halfRow + 1 - k && j<= halfRow - 1 + k){
            str+= '*'
        } else {
            str+= ' ';
        }
    }
    console.log(str);
}