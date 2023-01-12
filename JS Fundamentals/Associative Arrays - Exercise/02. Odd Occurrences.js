function oddOccurences(input){
    let elements = input.split(' ').map(w => w.toLowerCase());

    let occurences = {};

    for (let element of elements) {
        
        if(!occurences.hasOwnProperty(element)){
            occurences[element] = 1;
        } else{
            occurences[element] += 1;
        }      
    }


    let oddOccurences = Object.entries(occurences)
    .filter(([word, value]) => {
        if(value % 2 !== 0 ){
        return word;}
        }
    )
    .map(el => el[0])
  
    console.log(oddOccurences.join(' '));


}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')