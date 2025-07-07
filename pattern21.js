/**
     1 2 3 4 5 5 4 3 2 1
     1 2 3 4     4 3 2 1
     1 2 3         3 2 1
     1 2             2 1
     1                 1    
 */

     const row = 5;
     const colums = 2 * row;
     const halfcolm = Math.floor(colums / 2);
     console.log(halfcolm);

     for(let i = 1; i <= row; i++) {
        let str = '';
        let k = 0;
        for(let j = 1; j<= colums; j++) {
            if( j<= halfcolm + 1 - i || (j > halfcolm - 1 + i && j<= colums)) {
                if(j<= halfcolm) k++;
                if(j > halfcolm + i) k--;
                str+= k;
            } else {
                str+= ' '
            }

        }
        console.log(str);
     }