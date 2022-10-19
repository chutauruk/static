class Governor {
    constructor(name, money, law, age){
        this.name = name;
        this.money = money;
        this.law = law;
        this.age = age;
    }
    static takeTax(personName){
        console.log(this.name + " will take tax from " + personName);
       }
}
Governor.takeTax("Will");
