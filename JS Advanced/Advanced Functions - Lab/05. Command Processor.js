function solution(){
    let resultStr = ''
    return {
        append(str){
            resultStr += str;
        },
        removeStart(num){
            resultStr = resultStr.substring(num);
        },
        removeEnd(num){
            resultStr = resultStr.substring(0, resultStr.length - num);
        },
        print(){
            console.log(resultStr);
        }
    }

}

let firstZeroTest = solution()
firstZeroTest.append('hello'); 
firstZeroTest.append('again'); 
firstZeroTest.removeStart(3); 
firstZeroTest.removeEnd(4); 
firstZeroTest.print();