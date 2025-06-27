/*

1 2 3 4 5
1 2 3 4
1 2 3
1 2 
1

*/


const row = 5;
for(let i = 1; i <= row; i++) {
    let str= ''
    for(let j = 1; j <= row + 1 - i; j++) {
        str+= j;
    }
    console.log(str);
}