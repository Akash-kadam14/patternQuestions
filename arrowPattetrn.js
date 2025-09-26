/**
  *
  * *
  * * *
  * * * *
  * * * * *
  * * * *
  * * *
  * *
  * 
  
 */

const row = 10 
const halfRow = Math.floor((row + 1) / 2); 
console.log(halfRow);
let k = 0;
for(let i = 1; i <= row - 1; i++) {
    let str = ''
    if( i <= halfRow) k++;
    if(i > halfRow) k--;
    for(let j = 1; j <= halfRow; j++) {
        if(j<=k) {
            str+= '*'
        } else {
            str+= ' '
        }
    }
    console.log(str);
}

