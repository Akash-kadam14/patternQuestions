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
for(let i = 0; i < n; i++) {
    let str='';
    for(let j = 0; j < n - i; j++) {
        str += '*'
    }
    console.log(str)
}

