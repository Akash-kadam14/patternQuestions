/*
1 2 3 4 5 6 7 8 9 10

1                 1
1 2             2 1
1 2 3         3 2 1 
1 2 3 4     4 3 2 1
1 2 3 4 5 5 4 3 2 1

*/

const rows = 5;
const columns = 2 * rows 
const halfColums = columns / 2
// brute force
for(let i = 1; i <= rows; i++ ) {
    let str = '';
    for(let j = 1; j<= columns; j++) {
        if(j<= halfColums) {
            if(j<=i) {
                str+= j;
            } else {
                str+= ' '
            }
        } else {
            if( j <= columns - i) {
                str+= ' '
            } else {
                str+= columns - j + 1
            }
        }
    }
    console.log(str);
}

// optimized

for(let i = 1; i <= rows; i++ ) {
    let str = '';
    for(let j = 1; j<= columns; j++) {
        if(j<= i) {
            str+= j;
        } else if ( j > columns - i) {
            str+= columns - j + 1
        } else {
            str+= ' '
        }
    }
    console.log(str);
}