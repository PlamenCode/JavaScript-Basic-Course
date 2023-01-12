function greatestCommonDivider(x, y) {
    while (y) {
        let t = y;
        y = x % y;
        x = t;
    }
    console.log(x);
}
greatestCommonDivider(15, 5);
greatestCommonDivider(2154, 458)
