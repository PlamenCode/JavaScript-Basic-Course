function evenPosition(array){
    let filtredArr = array.filter((el,index) => index % 2 == 0)
    console.log(filtredArr.join(' '));

}
evenPosition(['20', '30', '40', '50', '60'])

function evenPosition2(array){
    let result = [];
    for (let element of array) {
        if(array.indexOf(element) % 2 == 0){
            result.push(element)
        }
    }
    console.log(result.join(' '));

}
evenPosition2(['20', '30', '40', '50', '60'])