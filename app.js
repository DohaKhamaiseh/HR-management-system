'use strict';

function Employee(employeeID, fullName, department, level) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = 0;


}


Employee.prototype.Salary = function () {
    if (this.level == "Senior") {
        this.salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
        return this.salary -= 7.5;

    }

    if (this.level == "Mid-Senior") {
        this.salary = Math.floor(Math.random() * (1500 - 1000) + 1000);
        return this.salary -= 7.5;


    }

    if (this.level == "Junior") {
        this.salary = Math.floor(Math.random() * (1000 - 500) + 500);
        return this.salary -= 7.5;

    }
}


Employee.prototype.render = function () {
    document.write(`Employee Name : ${this.fullName}`);
    document.write(`Net Salary : ${this.Salary ()}`);
    document.write(`<br>`);
 
}

let i1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
let i2 = new Employee(1001, "Lana Ali", "Finance", "Senior");
let i3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let i4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
let i5 = new Employee(1004, "Omar Zaid", "Development", "Senior");
let i6 = new Employee(1005, "Rana Saleh", "Development", "Junior");
let i7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

i1.render();
i2.render();
i3.render();
i4.render();
i5.render();
i6.render();
i7.render();