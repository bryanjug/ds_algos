let A = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];

function findOdd(A) {
    let foundCounts = false;
    let counts = {};
    let odd = 0;
  
    for (i = 1; i <= A.length; i++) {
      if (!counts[A[i - 1]]) {
        counts[A[i - 1]] = +1;
      } else {
        counts[A[i - 1]] = counts[A[i - 1]] + 1;
      }
      
      if (i === A.length) {
        for (j = 0; j <= Object.keys(counts).length; j++) {
          console.log(Object.keys(counts)[j]);
          if (Object.keys(counts)[j] % 2 !== 0) {
            odd = counts[j];
          }
        }
      }
    }
    
  //   return odd;
}

findOdd(A);