/* 
 * Copyright (C) Aaron Harabedian - All Rights Reserved
 * Unauthorized copying of this file is strictly prohibited
 * Written by Aaron Harabedian in 2021
 */

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
    // Grab values from select fields
    var age = selectAge.options[selectAge.selectedIndex].value;
    var compensation = selectCompensation.options[selectCompensation.selectedIndex].value;
    var businessType = selectBusinessType.options[selectBusinessType.selectedIndex].value;
    var employeeCount = selectEmployees.options[selectEmployees.selectedIndex].value;

    // Grab result element
    var result = document.getElementById("result");

    // Calculate matrix index
    var age_index = ages.indexOf(age);
    var compensation_index = compensations.indexOf(compensation);

    var PBGC = null;

    if (employeeCount == "None") {
        PBGC = false;
    } else if (employeeCount == "1-25") {
        if (businessType != "Other") {
            PBGC = false;
        } else if (businessType != "Choose your business type.") {
            PBGC = true;
        }
    } else if (employeeCount == "26 or more") {
        PBGC = true;
    }

    // Determine which matrix to use
    var data = (PBGC == true) ? pbgc_data : non_pbgc_data;

    result.textContent = '$' + data[age_index][compensation_index].toLocaleString("en-US");
};