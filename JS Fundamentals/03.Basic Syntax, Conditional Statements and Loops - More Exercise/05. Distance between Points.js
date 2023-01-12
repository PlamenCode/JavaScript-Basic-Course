function distanceBetweenPoints(x1, y1, x2, y2){
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);
    let distance = Math.sqrt((a * a) + (b * b))
    console.log(distance)
}

function distanceBetweenPoints(x1, y1, x2, y2){
    let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    console.log(distance)
}