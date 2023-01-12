function upperCase(string){
    const pattern = /[A-z0-9]+/g

    let matches = string.match(pattern);
    console.log(matches.join(', ').toUpperCase());  

}
upperCase('Hi, how are you?');
upperCase('hello')