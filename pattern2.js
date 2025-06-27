/*

      column
row   
    *
    * *
    * * *
    * * * *
    * * * * *
*/
const n = 5;
for(let i = 0; i <= n; i++) {
    let str='';
    for(let j = 1; j <= i ; j++) {
        // str += '*'
        str += j
    }
    console.log(str)
}


