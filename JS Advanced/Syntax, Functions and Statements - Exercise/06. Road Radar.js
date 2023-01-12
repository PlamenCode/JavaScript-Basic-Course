function roadRadar(speed,area){

    switch(area){

        case 'motorway': {
            let speedLimit = 130;
            if(speed > speedLimit){
                const difference = speed - speedLimit;
                let status = '';
                if(difference <= 20){
                    status = 'speeding';
                } else if(difference <= 40){
                    status = 'excessive speeding'
                } else{
                    status = 'reckless driving'
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }
            break;
        }


        case 'interstate': {
            let speedLimit = 90;
            if(speed > speedLimit){
                const difference = speed - speedLimit;
                let status = '';
                if(difference <= 20){
                    status = 'speeding';
                } else if(difference <= 40){
                    status = 'excessive speeding'
                } else{
                    status = 'reckless driving'
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }
            break;
        }


        case 'city': {
            let speedLimit = 50;
            if(speed > speedLimit){
                const difference = speed - speedLimit;
                let status = '';
                if(difference <= 20){
                    status = 'speeding';
                } else if(difference <= 40){
                    status = 'excessive speeding'
                } else{
                    status = 'reckless driving'
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }
            break;
        }


        case 'residential': {
            let speedLimit = 20;
            if(speed > speedLimit){
                const difference = speed - speedLimit;
                let status = '';
                if(difference <= 20){
                    status = 'speeding';
                } else if(difference <= 40){
                    status = 'excessive speeding'
                } else{
                    status = 'reckless driving'
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }
            break;
        }


    }
}
roadRadar(40, 'city');