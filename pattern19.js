/*

****
*  *
*  *
****

*/ 

const n = 4
for(let i = 1; i<= n; i++) {
    let str = '';
    for(let j = 1; j<= n; j++) {
      if(i === 1 || j === 1 || i === n || j === n) {
        str+= '*'
      } else {
        str+= ' ';
      }
    }
    console.log(str)
  }