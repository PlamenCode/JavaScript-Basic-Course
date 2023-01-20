function calculator(area,vol,input){
    let cordinates = JSON.parse(input);

    let result = [];
    for (const line of cordinates) {
        result.push({
            area: area.call(line),
            volume: vol.call(line)
        })
    }
    return result;
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};


console.table(calculator(area,vol,`[
    {"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`))