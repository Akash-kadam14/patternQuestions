/*
    * * * * * * * * *
      * * * * * * *
       * * * * *
         * * *
           *   
*/


const row = 5;
const columns = 2 * row - 1;

for(let i = 1; i<= row; i++) {
    let str = '';
    for(let j = 1; j<= columns; j++) {
        if(j >= i && j<= columns + 1 - i) {
            str+= '*'
        } else {
            str+= ' ';
        }
    }
    console.log(str);
}