var selectAge = document.getElementById("selectAge");
for (var i = 0; i < ages.length; i++) {
    var option = ages[i];
    var element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    selectAge.appendChild(element);
};

var selectComp = document.getElementById("selectComp");
for (var i = 0; i < comps.length; i++) {
    var option = comps[i];
    var element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    selectComp.appendChild(element);
};

function calculate() {
    var age = selectAge.options[selectAge.selectedIndex].value;
    var comp = selectComp.options[selectComp.selectedIndex].value;
    var result = document.getElementById("result");

    var age_index = ages.indexOf(age);
    var comp_index = comps.indexOf(comp);

    result.textContent = '$' + data[age_index][comp_index].toLocaleString("en-US");
};