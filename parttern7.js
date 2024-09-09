/*
 **** 
  ***
   **
    *    
*/

const n = 4;
let str = '';
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if(j >= i){
            str+= '*'
        } else {
            str+= ' '
        }
    }
    str += "\n";
}

console.log(str);