function tranglesArea(a, b, c){
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s *(s-a)*(s-b)*(s-c));
    console.log(area)
}
tranglesArea(2, 3.5, 4)