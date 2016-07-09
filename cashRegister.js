// JavaScript File

var cashRegister = {

    total: 0,

    theLast: 0,

    add: function(itemCost){

        this.total += itemCost;
        this.theLast = itemCost;
    },

    scan: function(anyItem, quantity){

        switch(anyItem){

            case "magazine":
                this.add(20.40 * quantity);
                break;

            case "milk":
                this.add(1.49 * quantity);
                break;

            case "beef":
                this.add(11.99 * quantity);
                break;

            case "candies":
                this.add(2.00 * quantity);
                break;

            default:
                console.log("Something went wrong!");

        }
    },

    deleteLast: function(){

        this.total -= this.theLast;
        this.theLast = 0;
    },

    getDiscount: function(employee){

        cashRegister.total -= cashRegister.total * employee.discount / 100;        
    }
};

// here is the discount function for the staff
function staffDiscount(name, discount){

    this.name = name;
    this.discount = discount;
};

// here I start to run my program
var itsMe = new staffDiscount("Fahri", 30);

cashRegister.scan("candies", 3);
console.log(cashRegister.total);

cashRegister.scan("magazine", 2);
console.log(cashRegister.total);

cashRegister.deleteLast();
console.log(cashRegister.total);

cashRegister.getDiscount(itsMe);
console.log(cashRegister.total);
