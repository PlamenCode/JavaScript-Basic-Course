function lastKEl(n, k){
    let result = [1];

    for(let i = 1; i < n ; i++){
        let index = Math.max(result.length - k, 0)
        let lastElements = result.slice(index);

        let sum = 0
        for (const el of lastElements) {
            sum += el;
        }
        result.push(sum)
    }
    
    
    console.log(result.join(' '));
}
lastKEl(6,3)