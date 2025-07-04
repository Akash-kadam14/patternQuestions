/*

1
0 1
1 0 1
0 1 0 1
1 0 1 0 1

*/ 
let start = 1;
for(let i = 1; i<= 5; i++) {
    let str = ''
    console.log( i, 'i % 2 === 0', i % 2 === 0,);
    if( i % 2 === 0) start = 0;
    else start = 1;
    for(let j = 1; j <= i; j++) {
        str+= start;
        start = 1 - start
    }
    console.log(str);
}