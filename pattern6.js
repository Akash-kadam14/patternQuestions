/**
         *
        **
       ***
      ****
 */
    //   let rows = 5;

    //   // pattern variable carries the final pattern in string format
    //   let pattern = "";
      
    //   // outer loop runs for `rows` no. of times
    //   for (let n = 1; n <= rows; n++) {
    //      // Inner loop - I -> prints spaces
    //      for (let space = 1; space <= rows - n; space++) {
    //         pattern += " ";
    //      }
      
    //      // Inner Loop - II -> prints stars
    //      for (let num = 1; num <= n; num++) {
    //         pattern += "*";
    //      }
    //      pattern += "\n";
    //   }
    //   console.log(pattern);

const n = 5;
let str=''; 
for(let i = 1; i <= n; i++) {
    for(let j = 0; j <= n; j++) {
        if( j >= n + 1 - i){
            str += '*'
        } else {
            str += " ";
        }
    }
    str += "\n";
}
console.log(str);