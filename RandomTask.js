function carFactory(object){

    function wheelPick(wheelsize){
       let wheelSizing = wheelsize % 2 == 0 ? wheelsize - 1 : wheelsize;
       const wheels = new Array(4).fill(wheelSizing);
       return wheels;

    }

    function enginePick(hp){
        const engine = {};
        if(hp <= 90){
            engine.power = 90;
            engine.volume = 1800;
        } else if(hp <= 120){
            engine.power = 120;
            engine.volume = 2400
        } else if(hp <= 200){
            engine.power = 200;
            engine.volume = 3500;
        }
        return engine;
    }


    function newCarriage(type, color){
        const carriage = {type, color};
        return carriage;
    }

  return {
    model: object.model,
    engine: enginePick(object.power),
    carriage: newCarriage(object.carriage, object.color),
    wheels: wheelPick(object.wheelsize)
  }
    
}
console.log(carFactory({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
}))

console.table(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
));