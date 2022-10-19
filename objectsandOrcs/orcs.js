// const adventurer = {
//     name: "Cynthia",
//     hitpoints: 10,
//     belongings: ["sword", "potion", "tums"],
//     companion: {
//         name: "Durian",
//         type: "Frenchton",
//         companion: {
//             name: "Shadow",
//             type: "Demonhound",
//             belongings: ["SCUBA tank", "Rogan Josh", "health insurance"],
//         }
//     }
// }
// console.log(adventurer.belongings[0]);
// console.log(adventurer.companion.name);
// console.log(adventurer.companion.type);
// console.log(adventurer.companion.companion.type);
// console.log(adventurer.companion.companion.belongings[2]);

// // for(let i = 0; i < adventurer.belongings.length; i++) {
//     // console.log(adventurer.belongings[i]);
// // }

// const movies = [
//     {title: "Tokyo Story" },
//     {title: "Toy Story" },
//     {title: "Mad Max" },
// ];

// // console.log(movies)
// // console.log(movies[0])
// // console.log(movies[0].title)

// // for(let i = 0; i < movies.length; i++){
// //     console.log(movies[i].title);
// // }

// const foo = {
//     someArray: [1,2,3],
//     someObject: {
//         someProp: 'oh hai, mark'
//     },
    
// }
// console.log(foo.someObject.someProp);
// console.log(foo.someArray);
// console.log(foo.someMethod())

// const foo = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ]
// console.log(foo[1][2]);

// const foo = [
//     1,
//     "hi",
//     ()=>{
//         console.log("fun")
//     }
// ];
// console.log(foo[2]() );

// const player = {
//     name: "Durian the Great",
//     health: 1000,
//     power: 1000,
//     stamina: 1000
// }

// const bigBadBoss = {
//     name: "Max the Annoying",
//     health: 1000000000,
//     power: 1000000000,
//     stamina: "Infinity"
// }

// const createEnemy = (nameIs, healthIs, powerIs, StaminaIs) => {
//     const newPlayer = {
//         name: nameIs,
//         health: healthIs,
//         power: powerIs,
//         stamina: StaminaIs,
//     };
    
//     return newPlayer;
// }

class Character {
    //constructor
    constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
        this.legs = 2;
        this.arms = 2;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs;
    }
    setHair(hairColor){
        this.hair = hairColor;
    }
    greet(otherCharacter) {
        console.log('Greetings Adventurer ' + otherCharacter + "!");
    }
    classyGreeting(otherClassyCharacter) {
        console.log("Hello Horrid " + otherClassyCharacter.name + '!');
    }
    smite() {
        console.log('You are now smitten!');
    }
}

const p1= new Character("Durian", 18, "brown", "brindle", true, true);
const enemy = new Character();

// console.log(p1.greet("bob"));
// console.log(p1.smite());

// console.log(enemy.greet("sauron"));


console.log(p1.hair);
p1.setHair('Burgundy');
console.log(p1);

console.log(p1.classyGreeting(enemy));

class Hobbit extends Character{
    steal() {
        console.log("Run away!")
    }
    greet (otherCharacter){
        console.log(`Hobbit says hello to ${otherCharacter}`)
    }
    smite(){
        super.smite();
        super.steal();
    }
}

const frodo = new Character("Mr Baggins", 33, "blue","brown");
console.log(frodo);
console.log(frodo.smite());
console.log(frodo.steal());
console.log(frodo.greet("Sam"));