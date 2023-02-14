'use strict';

function Employee(fullName, department, level, imgPath) {
    this.imgPath = imgPath;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = 0;
    this.employeeID = 0;

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

Employee.prototype.empID = function () {
    this.employeeID = ("" + Math.random()).substring(2, 6);
}

Employee.prototype.render = function () {
    /* document.write(`Employee Name : ${this.fullName}`);
     document.write(`Net Salary : ${this.Salary ()}`);
     document.write(`<br>`);*/

    const container = document.getElementById('event');
    //console.log(container);


    const divEl = document.createElement('div');
    container.appendChild(divEl);

    const imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src', this.imgPath);
    imgEl.width = "150";
    imgEl.height = "150";

    const nameEl = document.createElement('h4');
    divEl.appendChild(nameEl);
    nameEl.textContent = `Full Name: ${this.fullName}`;

    const idfEl = document.createElement('h4');
    divEl.appendChild(idfEl);
    idfEl.textContent = `ID : ${this.employeeID}`;

    const deptEl = document.createElement('h4');
    divEl.appendChild(deptEl);
    deptEl.textContent = `Department: ${this.department}`;

    /*const dept = ["Administration", "Marketing", "Development", "Finance"];
    for (let i = 0; i < 4; i++) {
        if (dept[i] == this.department) {
            const result = dept.filter(this.department);
        }
    }
    deptEl.textContent = `Department: ${result}`;*/


    const levEl = document.createElement('h4');
    divEl.appendChild(levEl);
    levEl.textContent = `Level: ${this.level}`;

}


/*let i1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
let i2 = new Employee(1001, "Lana Ali", "Finance", "Senior");
let i3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let i4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
let i5 = new Employee(1004, "Omar Zaid", "Development", "Senior");
let i6 = new Employee(1005, "Rana Saleh", "Development", "Junior");
let i7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");*/

/*i1.render();
i2.render();
i3.render();
i4.render();
i5.render();
i6.render();
i7.render();*/

let eventS = document.getElementById("event");
eventS.addEventListener('submit', addNewEmployeeHandler);

function addNewEmployeeHandler(event) {
    event.preventDefault();
    console.log(event);
    let FullName = event.target.name.value;
    let Department = event.target.department.value;
    let Level = event.target.level.value;
    let ImgPath = event.target.ImgUrl.value;


    let newEmployee = new Employee(FullName, Department, Level, ImgPath);
    newEmployee.empID();
    newEmployee.render();


}