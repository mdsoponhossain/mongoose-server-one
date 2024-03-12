

// js classes:

class Car {
    constructor(name, type) {
        this.name = name;
        this.type = type
    };
    Country = 'Bangladesh'
};

// const MyCar = new Car('Bi-Cycle','Two wheeler');
// console.log(MyCar)

// The uses of "extends" and "super":
class BorolokerGari extends Car {
    constructor(name,type,price,warranty){
        super(name,type);
        this.price = price;
        this.warranty = warranty;
    };
    expression(){
        return console.log(` amar ${this.name} gari chole weera weera `)
    };
   static staticMydialog(amarDialog){
        return console.log(`${amarDialog}`)
    }
};


const kamalerGari = new BorolokerGari('pulsar','Two Wheeler',300000,'3 yrs');
// instance :
// kamalerGari.expression()
// console.log(kamalerGari);


// static method:
BorolokerGari.staticMydialog('amar onek taka hole  ami akta gari kinbo')