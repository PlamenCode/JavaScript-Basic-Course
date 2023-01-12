function commonElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let y = 0; y < arr2.length; y++) {
            if (arr1[i] === arr2[y]) {
                console.log(arr1[i]);
            }
        }
    }
}
commonElements
(['Hey', 'hello', 2, 4, 'Peter', 'e'],
 ['Petar', 10, 'hey', 4, 'hello', '2'])