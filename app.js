'use strict';

let empArr = [];

function Employee(fullName, department, level, imgPath) {
    this.imgPath = imgPath;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = 0;
    this.employeeID = 0;
    empArr.push(this);

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

function render() {

    const container = document.getElementById('myMain');
    console.log(container);
    container.innerHTML = '';

   // getEmployee();

    if (empArr == null) //localstorage is empty
    {
        empArr = [];
    }
    for (let i = 0; i < empArr.length; i++) {


        const container = document.getElementById('myMain');
        //console.log(container);


        const divEl = document.createElement('div');
        container.appendChild(divEl);
        container.classList.add("card");
        divEl.classList.add("content");

        // const divEl2 = document.createElement('div');
        // container.appendChild(divEl2);

        const imgEl = document.createElement('img');
        divEl.appendChild(imgEl);
        imgEl.setAttribute('src', empArr[i].imgPath);
        imgEl.width = "150";
        imgEl.height = "150";

        const nameEl = document.createElement('h4');
        divEl.appendChild(nameEl);
        nameEl.textContent = `Full Name: ${empArr[i].fullName}`;

        const idfEl = document.createElement('h4');
        divEl.appendChild(idfEl);
        idfEl.textContent = `ID : ${empArr[i].employeeID}`;




        const deptEl = document.createElement('h4');
        divEl.appendChild(deptEl);
        deptEl.textContent = `Department: ${empArr[i].department}`;

        /*const dept = ["Administration", "Marketing", "Development", "Finance"];
        for (let i = 0; i < 4; i++) {
            if (dept[i] == this.department) {
                const result = dept.filter(this.department);
            }
        }
        deptEl.textContent = `Department: ${result}`;*/


        const levEl = document.createElement('h4');
        divEl.appendChild(levEl);
        levEl.textContent = `Level: ${empArr[i].level}`;

    }
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

let eventS = document.getElementById("fo");
fo.addEventListener('submit', addNewEmployeeHandler);

function addNewEmployeeHandler(fo) {
    fo.preventDefault();
    console.log(fo);
    let FullName = fo.target.name.value;
    let Department = fo.target.department.value;
    let Level = fo.target.level.value;
    let ImgPath = fo.target.ImgUrl.value;


    let newEmployee = new Employee(FullName, Department, Level, ImgPath);
    newEmployee.empID();
    newEmployee.Salary();

    let jsonArr = JSON.stringify(empArr);
    localStorage.setItem("allEmployee", jsonArr);

    render();


}

function getEmployee() {

    let jsonArr = localStorage.getItem("allEmployee");
    if (jsonArr !== null) {
    empArr= JSON.parse(jsonArr);
      }
}

getEmployee();

render();