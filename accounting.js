'use strict';
let deptArr = [];

function getEmployee() {

    let jsonArr = localStorage.getItem("allEmployee");
    if (jsonArr !== null){
    deptArr = JSON.parse(jsonArr);}
}

getEmployee();

// dept = ["Administration", "Marketing", "Development", "Finance"];
function empNum() {
    let empCount1 = 0, empCount2 = 0, empCount3 = 0, empCount4 = 0;
    let arr = [];
    for (let i = 0; i < deptArr.length; i++) {
        if (deptArr[i].department == "Administration") {
            empCount1 += 1;
        }

        if (deptArr[i].department == "Marketing") {
            empCount2 += 1;

        }

        if (deptArr[i].department == "Development") {
            empCount3 += 1;

        }

        if (deptArr[i].department == "Finance") {
            empCount4 += 1;

        }
    }
    arr = [empCount1, empCount2, empCount3, empCount4];
    return arr;

}

function averageSalary() {
    let sumSalary = [0,0,0,0], AvgSalary = [0,0,0,0] ;
    let arr = empNum();
    for (let i = 0; i < deptArr.length; i++) {
    
        if (deptArr[i].department == "Administration") {
            sumSalary[0] += deptArr[i].salary;
            AvgSalary[0] = sumSalary[0]/arr[0];
        }

        if (deptArr[i].department == "Marketing") {
            sumSalary[1] += deptArr[i].salary;
            AvgSalary[1] = sumSalary[1]/arr[1];

        }

        if (deptArr[i].department == "Development") {
            sumSalary[2] += deptArr[i].salary;
            AvgSalary[2] = sumSalary[2]/arr[2];

        }

        if (deptArr[i].department == "Finance") {
            sumSalary[3] += deptArr[i].salary;
            AvgSalary[3] = sumSalary[3]/arr[3];

        }
    }
   
    return AvgSalary ;
}

function totalSalary() {
    let sumSalary = [0,0,0,0];
    for (let i = 0; i < deptArr.length; i++) {
    
       if (deptArr[i].department == "Administration") {
        console.log(deptArr[i].salary);
            sumSalary[0] += deptArr[i].salary;
        }

        if (deptArr[i].department == "Marketing") {
            sumSalary[1] += deptArr[i].salary;
        }

        if (deptArr[i].department == "Development") {
            sumSalary[2] += deptArr[i].salary;
           

        }

        if (deptArr[i].department == "Finance") {
            sumSalary[3] += deptArr[i].salary;
          

        }
    }
    console.log(sumSalary);
    return sumSalary ;
}

function render() {

    const container = document.getElementById('myMain');
    console.log(container);
    container.innerHTML = '';

   // getEmployee();
    for (let i = 0; i < deptArr.length; i++) {


        const tablee = document.createElement('table');
        container.appendChild(tablee);
        tablee.setAttribute("border","2");

        // the heading of the table
        const tableHead = document.createElement('thead');
        tablee.appendChild(tableHead);
        // tableHead.textContent = `Department Name `;

        // the content table heading  <thead> <tr> <td> </td> <td> </td> </tr> </thead>
        const tRow = document.createElement('tr');
        tableHead.appendChild(tRow);

        const hCol1 = document.createElement('td');
        tRow.appendChild(hCol1);
        hCol1.textContent = `Department Name`;

        const hCol2 = document.createElement('td');
        tRow.appendChild(hCol2);
        hCol2.textContent = `# of employees`;

        const tCol3 = document.createElement('td');
        tRow.appendChild(tCol3);
        tCol3.textContent = `Average Salary`;

        const tCol4 = document.createElement('td');
        tRow.appendChild(tCol4);
        tCol4.textContent = `Total Salary`;

        // the body of the table 
        const tableBody = document.createElement('tbody');
        tablee.appendChild(tableBody);


        const bRow = document.createElement('tr');
        tableBody.appendChild(bRow);

        const bCol1 = document.createElement('td');
        bRow.appendChild(bCol1);
        bCol1.textContent = `${deptArr[i].department}`;

        const bCol2 = document.createElement('td');
        bRow.appendChild(bCol2);
        // for return the # of employee for each dept.
        let arr2 = empNum();
        if (deptArr[i].department == "Administration") {
            bCol2.textContent = `${arr2[0]}`;
        }

        if (deptArr[i].department == "Marketing") {
            bCol2.textContent = `${arr2[1]}`;

        }

        if (deptArr[i].department == "Development") {
            bCol2.textContent = `${arr2[2]}`;

        }

        if (deptArr[i].department == "Finance") {
            bCol2.textContent = `${arr2[3]}`;

        }
    
        const bCol3 = document.createElement('td');
        bRow.appendChild(bCol3);
    // to return the avg salary for each dept.
        let avg = averageSalary();
        if (deptArr[i].department == "Administration") {
            bCol3.textContent = `${avg[0]}`;
        }

        if (deptArr[i].department == "Marketing") {
            bCol3.textContent = `${avg[1]}`;

        }

        if (deptArr[i].department == "Development") {
            bCol3.textContent = `${avg[2]}`;

        }

        if (deptArr[i].department == "Finance") {
            bCol3.textContent = `${avg[3]}`;

        }

        const bCol4 = document.createElement('td');
        bRow.appendChild(bCol4);
        // to return the total salary for each dept.
        let summ =  totalSalary();
        console.log(summ);
       // bCol4.textContent = `${totalSalary()}`;
       if (deptArr[i].department == "Administration") {
        bCol4.textContent = `${summ[0]}`;
    }

    if (deptArr[i].department == "Marketing") {
        bCol4.textContent = `${summ[1]}`;

    }

    if (deptArr[i].department == "Development") {
        bCol4.textContent = `${summ[2]}`;

    }

    if (deptArr[i].department == "Finance") {
        bCol4.textContent = `${summ[3]}`;

    }
        

       // the table footer 
       const tableFooter = document.createElement('tfoot');
        tablee.appendChild(tableFooter);
        const fRow = document.createElement('tr');
        tableFooter.appendChild(fRow);

        const fCol0 = document.createElement('td');
        fRow.appendChild(fCol0);
        fCol0.textContent = ` `;

        const fCol1 = document.createElement('td');
        fRow.appendChild(fCol1);
        let empSum = 0;
        empSum = arr2[0]+arr2[1]+arr2[2]+arr2[3];
        fCol1.textContent = `${empSum}`;

        const fCol2 = document.createElement('td');
        fRow.appendChild(fCol2);
        let a = 0;
        a = avg[0]+avg[1]+avg[2]+avg[3];  // avg assign above and took the return value from avgSalary()
        fCol2.textContent = `${a}`;;

        const fCol3 = document.createElement('td');
        fRow.appendChild(fCol3);
        let s = 0;
        s = summ[0]+summ[1]+summ[2]+summ[3];    // summ assign above and took the return value from totalSalary()
        fCol3.textContent = `${s}`;



    }
}




// function getEmployee() {

//     let jsonArr = localStorage.getItem("allEmployee");
//     deptArr = JSON.parse(jsonArr);
// }

//getEmployee();
console.log(deptArr);

render();
