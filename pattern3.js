/*

1
12
123
1234
12345
 print the a4bove pattern
*/


const n = 5;
for(let i = 0; i <= n; i++) {
    let str='';
    for(let j = 1; j <= i ; j++) {
        str += j
    }
    console.log(str)
}