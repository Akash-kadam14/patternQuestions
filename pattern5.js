/*

1 *    
2 **  
3 ***
4 ****
5 *****
6 ****
7 ***
8 **
9 *

n = number of lines = 9
our actual row is 5 till row 5 column is increased by row no. as soon as the column number start decreasing and column size increase w7e need to specify the condition

that is for this pattern 
1 *    
2 **  
3 ***
4 ****
5 *****

our column condition will be col = 1 ; col = row
to print 
6 ****
7 ***
8 **
9 *
our column condition will be col = 2 * n - row - 1  -1 when col = 1 else fomula will be 2 * n - row
*/

const n = 10;
// the row will run twice the n when row = 1 our formula will be 2 * n - 1 row is 0 formula will be 2 * n
for(let row = 0; row < 2 * n; row++) {
    let str = '';
     const columnPrintingCondition = row > n ? 2 * n - row : row;
    for(let col = 0; col < columnPrintingCondition ; col++) {
        str+= '*'
    }
    console.log(str)
}