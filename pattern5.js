/**
 
    * * * * *
    * * * *
    * * *
    * *
    * 


 */

const row = 5;

for(let i = 1; i <= row; i++) {
    let str = '';
    for(let j = 1; j <= row + 1 - i; j++) {
        str+= '*';
    }
    console.log(str);
}