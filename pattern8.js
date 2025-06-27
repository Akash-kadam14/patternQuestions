/*
          *
        * * *
      * * * * *
    * * * * * * *
  * * * * * * * * *
  
*/

const row = 5
const column = row * 2 - 1;

for(let i = 1; i <= row; i++) {
    let str = '';
    for(let j = 1; j<= column; j++) {
        if(j>= row+ 1 - i && j<= row - 1 + i){
            str+= '*'
        } else {
            str+= ' ';
        }
    }
    console.log(str);
}