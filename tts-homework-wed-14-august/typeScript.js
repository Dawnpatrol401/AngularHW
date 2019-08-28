function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
//CREATE THE PERSON CLASS
var person = /** @class */ (function () {
    function person(fName, lName, age, telNumber, location, payRate, certifications) {
        this.certs = new Array();
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.phoneNumber = telNumber;
        this.location = location;
        this.hourlyWage = payRate;
        this.certs = certifications;
    }
    person.prototype.greet = function () {
        return "Hello my name is " + this.firstName + " " + this.lastName;
    };
    person.prototype.getCoffee = function () {
        return this.firstName + " is going to Starbucks";
    };
    //Wage function that multiplies hourly rate times hours worked.  If hours work is not entered use 40 as default.
    person.prototype.weeklyWage = function (hours) {
        if (hours == null) {
            return String(this.hourlyWage * 40);
        }
        else {
            return String(this.firstName + " earned " + this.hourlyWage * hours + " this week.");
        }
    };
    person.prototype.addCerts = function (argument) {
        this.certs.push(argument);
    };
    return person;
}());
//CREATE INSTANCES OF PERSONS
var Chris = new person('Chris', 'Nelson', 33, 3434343, 'rhode island', 29);
var Alex = new person('Alexandra', 'Degidio', 23, 3423245, 'gansett', 15);
var Milo = new person('Milo', 'Degidio', 44, 3423123, 'CT', 10);
var Callie = new person('Callie', 'Nelson', 24, 3245555, 'CT', 35);
//PRINT SOME METHODS OUT TO HTML DIVS
document.getElementById("nelson-get-coffee").innerHTML = Chris.getCoffee();
document.getElementById("callie-get-coffee").innerHTML = Callie.getCoffee();
document.getElementById('callie-greet').innerHTML = Callie.greet();
//PRINT OUT THE WEEKLY WAGES
document.getElementById('wage1').innerHTML = Chris.weeklyWage(30);
document.getElementById('wage2').innerHTML = Alex.weeklyWage(24);
document.getElementById('wage3').innerHTML = Milo.weeklyWage(0);
document.getElementById('wage4').innerHTML = Callie.weeklyWage(10);
