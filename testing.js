function greet(name){ 
    console.log(`Hello ${name}`)
  }
  
  greet(Khaled);

function isOdd(n){
    if (n % 2 !== 0) { return true;
  
    } else { return false;
    } 
  }

  isOdd(9);

function oddsSmallerThan(n) {
    if(n % 2 !== 0) {return ((n - 1) / 2)
    } else {return n / 2;
    }
  }

  oddsSmallerThan(9);

  function squareOrDouble(n) {
    if(n % 2 !== 0) { return n * n;
    } else {return n * 2;
    }
  }

  squareOrDouble(9);