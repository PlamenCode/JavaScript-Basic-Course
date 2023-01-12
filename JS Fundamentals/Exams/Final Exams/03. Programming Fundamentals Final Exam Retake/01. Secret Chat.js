function secretChart(input){
    let messege = input.shift();
    
    let line = input.shift();

    while(line != 'Reveal'){
        line = line.split(':|:');
        let action = line.shift();
        
        switch(action){
            case 'ChangeAll':{
                let oldSub = line.shift();
                let newSub = line.shift();

                while(messege.includes(oldSub)){
                    messege = messege.replace(oldSub, newSub)
                }
                console.log(messege);
     
            break;
            }

            case 'Reverse':{
                let substring = line.shift();
                if(messege.includes(substring)){
                    let startIndex = messege.indexOf(substring)
                    let endIndex = startIndex + substring.length;
                    let cuttedPart = messege.slice(startIndex, endIndex);
                    messege = messege.replace(cuttedPart, '');
                    cuttedPart = cuttedPart.split('').reverse().join('');
                    messege += cuttedPart;
                    console.log(messege);

                } else{
                    console.log('error');
                }
                
            break;
            }

            case 'InsertSpace':{
                let index = Number(line.shift());
                messege = messege.split('');
                messege.splice(index, 0, ' ');
                messege = messege.join('');
                console.log(messege);
                
            break;
            }

        }

        line = input.shift();
    }
    console.log(`You have a new text message: ${messege}`);


}
secretChart([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  )