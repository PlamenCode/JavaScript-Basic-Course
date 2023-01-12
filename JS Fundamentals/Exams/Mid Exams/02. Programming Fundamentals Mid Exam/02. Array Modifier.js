function arrayModifier(arr){
    let arrayToWork = arr[0].split(' ');
    let index = 1;
    let arrayPart = arr[index++];

    while(arrayPart !== 'end'){
        arrayPart = arrayPart.split(' ');
        let command = arrayPart[0];
        let firstIndex = arrayPart[1];
        let secondIndex = arrayPart[2];

        switch(command){
            case 'swap': 
            let tempEl = arrayToWork[firstIndex];
            arrayToWork[firstIndex] = arrayToWork[secondIndex];
            arrayToWork[secondIndex] = tempEl; 
            break;

            case 'multiply':
                let elementToMultiply = arrayToWork[secondIndex];
                let element = arrayToWork[firstIndex] * elementToMultiply;
                arrayToWork[firstIndex] = element;
            break;
            
            case 'decrease': 
            for(let i = 0 ; i < arrayToWork.length; i++){
                let element = arrayToWork[i] - 1;
                arrayToWork[i] = element;
            }
            break;
        }
        arrayPart = arr[index++];
    }
    console.log(arrayToWork.join(', '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])