function firtLastKElements(input){
    let count = input.shift(); 
    let firstEl = input.slice(0, count)
    console.log(firstEl.join(" "));
    let lastEl = input.slice(input.length - count);
    console.log(lastEl.join(' '));

}
firtLastKElements([2, 7, 8, 9])