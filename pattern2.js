/*

      column
row   
      * * * * *
      * * * *
      * * *
      * * 
      *
*/
const n = 5;
for(let i = 0; i <= n; i++) {
    let str='';
    for(let j = 1; j <= n - i ; j++) {
        // str += '*'
        str += j
    }
    console.log(str)
}
function printPattern(rows) {
    for (let i = rows; i >= 1; i--) {
        let str = "";
        for (let j = rows; j >= rows - i + 1; j--) {
            str += j;
        }
        console.log(str);
    }
}

printPattern(5);


