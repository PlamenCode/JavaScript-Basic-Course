// function distinctArray(input){
//     for(let i = 0; i < input.length; i++){
//         let currentEl = input[i];
//         for(let j = i + 1; j < input.length; j++){
//             let currentEl2 = input[j];
//             if(currentEl === currentEl2){
//                 input.splice(j , 1);
//             }
//         }
//     }
//     console.log(input.join(' '));
// }
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])

function distinctArrays(input){
    
    let distinctArray = [];

    for(let i = 0; i < input.length; i++){
        let element = input[i]
        if(!distinctArray.includes(element)){
            distinctArray.push(element);
        }
    }
    console.log(distinctArray.join(' '));
}
distinctArrays([7, 8, 9, 7, 2, 3, 4, 1, 2])
