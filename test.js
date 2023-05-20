function fibonacci(n) {
    let arr = [0, 1];
    //[0, 1, 1];
    for (i = 1; i < n; i++) {
        let last = i - 1;
        let current = i;

        let num = last + current;
        arr.push(num)
    }

    for (i = 1; i < arr.length; i++) {
        
    }
}

fibonacci(7)