/*

E
DE
CDE
BCDE
ABCDE

*/


let strAsciiNum = 'E'.charCodeAt();
for(let i = 1 ; i <= 5; i++) {
    let str='';
  for(let j = 1; j<= i; j++) {
    str+= String.fromCharCode(strAsciiNum + j - i)+ ' ';
  }
  console.log(str);
}
