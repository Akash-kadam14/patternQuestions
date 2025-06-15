/*
   A   
  ABA  
 ABCBA 
ABCDCBA

*/
const totalRows = 4;
const totalColums = 2 * totalRows - 1;
const halfColums = Math.ceil(totalColums / 2);

for(let i = 1; i <= totalRows; i++) {
  let str='';
  let charAsciiNum = 64;
  for(let j = 1; j<= totalColums; j++) {
    if(j>= halfColums + 1 - i && j<= halfColums - 1 + i) {
        if(j<= halfColums) {
          charAsciiNum++
        str+= String.fromCharCode(charAsciiNum);
    } else if(j> halfColums) {
      --charAsciiNum
       str+= String.fromCharCode(charAsciiNum);
       ;
    }
    }
    else {
      str+= ' ';
    }
  }
  console.log(str)
}
