$(document).ready(function(){

//Set main class
class Animal {
    constructor(eyes, year_of_birth) {
        this.eyes = eyes;
        this.year_of_birth = year_of_birth;
    }
    eat() {
        console.log("nomnomnom")
    }
};

//Extend subclass zoogdier form animal
class Zoogdier extends Animal {
    constructor(eyes, year_of_birth, vacht) {
        super(eyes, year_of_birth); 
        this.vacht = vacht;
    }
};

//Extend subclass reptiel from animal
class Reptiel extends Animal {
    constructor(eyes, year_of_birth, eieren) {
        super(eyes, year_of_birth); 
        this.eieren = eieren;
    }
    slijm() {
        console.log("getver slimy")
    }
};

//Extend krokodil from subclass reptiel
class Krokodil extends Reptiel {
    constructor(eyes, year_of_birth, eieren, naam) {
        super(eyes, year_of_birth, eieren); 
        this.naam = naam;
    }
    hap() {
        console.log("Hap weg.......")
    }
};


//Extend leeuw from subclass zoogdier
class Leeuw extends Zoogdier {
    constructor(eyes, year_of_birth, vacht, naam) {
        super(eyes, year_of_birth, vacht); 
        this.naam = naam;
    }
    roar() {
        console.log("bruuuuuuuul")
    }
};

//Create a class with standard methods
class park {
    constructor(name) {
        this.name = name;
        this.collection = [];
    }
    //Generate random number function
    randomNmbr(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      };
    //Fill collection with random animals
    addAnimals(number) {
        for (let count = 0; count <= number-1; count++) {
            let randomVal = this.randomNmbr(0, 1);
            if (randomVal == 0) {
                this.collection.push(new Leeuw());
            } else if (randomVal == 1) {
                this.collection.push(new Krokodil());
            }
        };
    }
    //Statistics enquiry
    stats() {
        let countLeeuw = 0;
        let countKrokodil = 0;
        let test = typeof(this.collection[0]);
        console.log(test);
        console.log(this.collection[1]);

        this.collection.forEach(function(element){
            if (element.constructor.name === 'Leeuw'){countLeeuw += 1}
           });
/*
        for (let count = 0; count <= this.collection.length-1; count++) {
            if(this.constructor.name == "Leeuw") {
                countLeeuw += 1;
            } else if (this.collection[count] == "Krokodil") {
                    countKrokodil += 1;
                }
            };
*/            
            console.log(countLeeuw);
            console.log(countKrokodil);
        }
    }

let mikeZoo = new park("Michael ZOO");

console.log(mikeZoo.name);
console.log(mikeZoo.collection);


mikeZoo.addAnimals(10);

mikeZoo.stats();

//Final bracket
});
