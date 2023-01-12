function cat(input){

    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    
    for (let line of input){
        let arg = line.split(' ');
        let name = arg[0];
        let age = Number(arg[1]);

        let cat = new Cat(name,age);

        cat.meow();
    }

}
cat(['Mellow 2', 'Tom 5'])