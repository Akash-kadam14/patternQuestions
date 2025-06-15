/**
 A 
B B 
C C C 
D D D D 
E E E E E 
 */

let charAsciiNum = 65;
for(let i = 1 ; i <= 5; i++) {
  let str = '';
  for(let j = 1; j<= i; j++) {
    str+= String.fromCharCode(charAsciiNum) + ' ';
  }
  charAsciiNum++
  console.log(str)
}