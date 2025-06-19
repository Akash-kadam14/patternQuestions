let totalRows = 5;
totalRows = 2 * totalRows - 1;
const totalColums = totalRows + 1;
let k = 0;
const halfRows = Math.floor((totalRows +1) / 2 );
console.log(totalRows, totalColums, halfRows)
for(let i = 1; i <= totalRows; i++) {
  let str = '';
      if(i <= halfRows) k++;
  if(i > halfRows) k--;
  for(let j = 1; j<= totalColums; j++ ) {
    if(j <= k || j >= totalColums + 1 - k) {
      str+='*'
    } else {
      str+= ' ';
    }
  }
   console.log(str)
}