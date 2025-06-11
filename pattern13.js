/**
 A B C D E 
 A B C D 
 A B C 
 A B 
 A  
 
 */

 for(let i = 1; i <= 5; i++){
    let str='';
    let charAsciiNum = 65;
    for(let j = 1; j<= 5+ 1 - i ; j++){
    str+= String.fromCharCode(charAsciiNum) + ' '
    charAsciiNum++;
    }
    console.log(str)
  }