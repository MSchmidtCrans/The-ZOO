$(document).ready(function(){

//Declare test variables
let colorAnimal = [
    "blue",
    "black",
    "brown",
    "Green",
    "Pink"
];

let naamAnimal = [
    "Ivo",
    "Michael",
    "Jeroen"
]

//Set main class
class Animal {
    constructor(name, color, year_of_birth) {
        this.color = color;
        this.year_of_birth = year_of_birth;
        this.name = this.createName();
    }
    createName() {
        let randomVal = helperFnct.randomNmbr (0, 2); 
        return naamAnimal[randomVal];
    }
};

//Extend subclass zoogdier form animal
class Zoogdier extends Animal {
    constructor(name, color, year_of_birth) {
        super(name, color, year_of_birth); 
    }
};

//Extend subclass reptiel from animal
class Reptiel extends Animal {
    constructor(name, color, year_of_birth) {
        super(name, color, year_of_birth); 
    }
};

//Extend krokodil from subclass reptiel
class Krokodil extends Reptiel {
    constructor(name, color, year_of_birth) {
        super(name, color, year_of_birth); 
};
}


//Extend leeuw from subclass zoogdier
class Leeuw extends Zoogdier {
    constructor(name, color, year_of_birth) {
        super(name, color, year_of_birth); 
    }
};


//Create a class with methods
class park {
    constructor(name) {
        this.name = name;
        this.collection = [];
    }

    //Fill collection with random animals - method
    addAnimals(number) {
        let colorVal = "";
        let yearBirthVal = "";
        let randomVal = 0;
        for (let count = 0; count <= number-1; count++) {
            randomVal = helperFnct.randomNmbr (0, 4); colorVal = colorAnimal[randomVal];//add color to class
            yearBirthVal = helperFnct.randomNmbr (1998, 2019);//add birth year to class

            randomVal = helperFnct.randomNmbr(0, 1);
            if (randomVal == 0) {
                this.collection.push(new Leeuw(this.name, colorVal, yearBirthVal));
            } else if (randomVal == 1) {
                this.collection.push(new Krokodil(this.name, colorVal, yearBirthVal));
            }
        };
        document.getElementById('fillPar').innerHTML = 'Number of animals added: ' + number; 
    }

    //Statistics enquiry - method
    stats() {
        let countLeeuw = 0;
        let countKrokodil = 0;
        this.collection.forEach( function(element) {
            if (element.constructor.name === 'Leeuw'){countLeeuw += 1}
            else if (element.constructor.name === 'Krokodil'){countKrokodil += 1};
           });
           
           //Insert to html
           document.getElementById('showStats').innerHTML = 'Number of lions: ' + countLeeuw + '<br>' + 'Number of krokodiles: ' + countKrokodil;
        }
    }

/*Generate random number function - method
function randomNmbr(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    };
*/
let mikeZoo = new park("Michael ZOO");

//Buttons to activate methods
$('#fillBtn').click(function() {
mikeZoo.addAnimals(100);
console.log(mikeZoo);
});

$('#statsBtn').click(function() {
mikeZoo.stats();
});

//Final bracket
});
