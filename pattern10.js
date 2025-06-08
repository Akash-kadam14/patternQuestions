/*

*********
**** ****
***   ***
**     **
*       *

*/

const totalRows = 5;
const totalColms = 2 * totalRows - 1
const halfcolm = Math.ceil((2 * totalRows - 1)/ 2 );

console.log(halfcolm);
for(let i = 1 ; i <= totalRows; i++) {
  let str = ''
  for(let j = 1; j <= totalColms; j++) {
    if((j<= halfcolm + 1 - i) || (j>= halfcolm - 1 + i && j<= totalColms)) {
      str+= '*'
    } else {
      str+= ' '
    }
  }
  console.log(str);
}
console.log('\n')

/**
 
*       *
**     **
***   ***
**** ****
*********

 **/ 


for(let i = 1 ; i <= totalRows; i++) {
  let str = ''
  for(let j = 1; j <= totalColms; j++) {
    if((j <=  i) || ( j >= totalColms  + 1 - i)) {
      str+= '*'
    } else {
      str+= ' '
    }
  }
  console.log(str);
}
console.log('\n')
/*

1      1
12    21
123  321
12344321

*/

const totalColumns = 2 * totalRows;

 for(let i = 1; i <= totalRows; i++){
   let str= '';
   for(j = 1; j <= totalColumns; j++){
     if(j<= i) {
      str+= j;
     } else if(j > totalColumns - i ) {
        str+= totalColumns - j + 1;
     } else {
       str+= ' ';
     }
       
     }
     console.log(str)
   }
