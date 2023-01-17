function rectanguler(width, height, color){

    let colorFixed = color.charAt(0).toUpperCase() + color.slice(1);
    
    let rectanguler = {
        width,
        height,
        color: colorFixed,
        calcArea() {
            return this.width * this.height;
        }
    }
    return rectanguler;

}
let rect = rectanguler(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
