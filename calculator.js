var selectAge = document.getElementById("selectAge");
for (var i = 0; i < ages.length; i++) {
    var option = ages[i];
    var element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    selectAge.appendChild(element);
};

var selectCompensation = document.getElementById("selectCompensation");
for (var i = 0; i < compensations.length; i++) {
    var option = compensations[i];
    var element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    selectCompensation.appendChild(element);
};

var selectBusinessType = document.getElementById("selectBusinessType");
for (var i = 0; i < businessTypes.length; i++) {
    var option = businessTypes[i];
    var element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    selectBusinessType.appendChild(element);
};

var selectEmployees = document.getElementById("selectEmployees");
for (var i = 0; i < employeeTypes.length; i++) {
    var option = employeeTypes[i];
    var element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    selectEmployees.appendChild(element);
};

function calculate() {
    var age = selectAge.options[selectAge.selectedIndex].value;
    var compensation = selectCompensation.options[selectCompensation.selectedIndex].value;
    var result = document.getElementById("result");

    var age_index = ages.indexOf(age);
    var compensation_index = compensations.indexOf(compensation);

    result.textContent = '$' + data[age_index][compensation_index].toLocaleString("en-US");
};