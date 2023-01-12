function worldTour(input){
    let stops = input.shift();
    
    let command = input.shift();
    
    while(command != 'Travel'){
        let line = command.split(':');
        let action = line.shift();

        switch(action){
            case 'Add Stop':{
                let [index, string] = line;
                if(index >=0 && index < stops.length){
                    stops = stops.slice(0,Number(index)) + string + stops.slice(index);
                    console.log(stops);
                }
                break;
            }
            case 'Remove Stop':{
                let [startIndex, endIndex] = line.map(Number);
                if(startIndex >= 0 && endIndex < stops.length){
                    let removedStops = stops.slice(startIndex, endIndex + 1);
                    stops = stops.replace(removedStops, '');
                    console.log(stops);
                }
                break;
            }
            case 'Switch':{
                let [oldStr, newStr] = line;
                while(stops.includes(oldStr)){
                stops = stops.replace(oldStr,newStr);
                console.log(stops);
                }
                break;
            }
        }
        command = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);

}

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])

