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
        this.numberBorn = 0;
        this.ticketNr = 0;
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
        this.numberBorn = number;
         
    }

    //Statistics enquiry - method
    stats() {
        let countLeeuw = 0;
        let countKrokodil = 0;
        this.collection.forEach( function(element) {
            if (element.constructor.name === 'Leeuw'){countLeeuw += 1}
            else if (element.constructor.name === 'Krokodil'){countKrokodil += 1};
           });

        let collColor =  this.collection[1].color = "brown";  
           console.log(collColor);
           
           //Insert to html
           document.getElementById('showStats').innerHTML = 'Number of animals born: ' + this.numberBorn + '</br>' + 'Number of lions: ' + countLeeuw + '<br>' + 'Number of krokodiles: ' + countKrokodil;
        }
    
    ticketSale() {
        this.ticketNr = helperFnct.randomNmbr(0, 10000);
        alert("Your ticketnumber: " +this.ticketNr)
    }    


    //Create text arch on frontpage for the entry of the zoo based on the park name
    nameEntry() {
        let nameLength = this.name.length;
        let deg = -75;
        for (let i=0; i<=nameLength-1; i++) {
            let div = document.createElement("DIV");
            div.innerHTML = this.name[i];
            div.style.transform = "rotate(" + deg + "deg)";
            document.getElementById("banner").appendChild(div);
            deg += 150 / nameLength+1;
        }
    }    
}

$(".imageContainer").mouseenter(function() {
    $(".imageContainer").css("background-image", "url('frontgateopen.svg')");
    $(".gateBtnCl").css("display", "inline-block");
})  
$(".imageContainer").mouseleave(function() {
    $(".imageContainer").css("background-image", "url('Frontgate.svg')");
    $(".gateBtnCl").css("display", "none");
})
$(".gateBtnCl").click(function() {
    mikeZoo.ticketSale();
})



let mikeZoo = new park("Mike's dierentuin");

//activate methods
mikeZoo.addAnimals(1000);
mikeZoo.stats();
mikeZoo.nameEntry();

//Final bracket
});
