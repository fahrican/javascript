// JavaScript File

var Drupov = {

    firstName: "Dimitar",
    lastName: "Rupov",
    age: 34,
    profession: "Developer"
};

var Robschi = {

    firstName: "Robert",
    lastName: "Nachbargauer",
    age: 37,
    profession: "CFO"  
};

var myContacts = [Drupov, Robschi];

function theName(person){

    console.log(person.firstName + " " + person.lastName);
};

function theList(){

    for(var a = 0; a < myContacts.length; a++){

    theName(myContacts[a]);
    }
};

function search(aName){

    for(var b = 0; b < myContacts.length; b++){

        if(aName == myContacts[b].firstName){

            theName(myContacts[b]);
        }
    }
};

search("Robert");

function newFriend(firstName, lastName, age, profession){

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.profession = profession;
};

myContacts[2] = new newFriend("John", "Smile", 22, "Singer");

theList();


