

const totalRows = 9;
const totalColms = 9
const halfRows = Math.floor((totalRows + 1) / 2);
let k = 0;
for(let i = 1; i <= totalRows; i++) {
    i <= halfRows ? k++ : k--;
    let str = ''
    for( j= 1; j<= totalColms; j++) {
        if(j<= halfRows+1-k || j>= halfRows-1+k) {
            str+='*'
        } else {
            str+=' '
        }
    }
    console.log(str)
}