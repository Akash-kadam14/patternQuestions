/*

      column
row   
      *
      * *
      * * *
      * * * *
      * * * * *
      
      1
      1 2
      1 2 3
      1 2 3 4  

*/

for(let i = 0; i < 5; i++) {
    let str=''; 
    for(let j = 0; j <= i; j++) {
        str += '*'
        // str += j
    }
    console.log(str)
}

