var buttonAdd = document.getElementById("buttonAdd");   // creating variable 'buttonAdd' and linking with HTML element which has ID = 'buttonAdd'
var inputAdd = document.getElementById("inputAdd");    // creating variable 'inputAdd' and linking with HTML element which has ID = 'inputAdd'
var unorderListAdd = document.getElementById("unorderListAdd");    // creating variable 'unorderListAdd' and linking with HTML element which has ID = 'unorderListAdd'

buttonAdd.addEventListener("click", function() {    // enabling EventListener for 'buttonAdd' variable. EventListener will be triggered when 'buttonAdd' button will be clicked with mouse
    if (inputAdd.value.length > 0) {    // if statement checks if input value has more than 0 char and executes below code lines only if input has more than 0 char
        var listAdd = document.createElement("li");     // creating new element 'li' and assigning it to variable 'listAdd'
        var listButtonAdd = document.createElement("button");   // creating new element 'button' and assigning to variable 'listButtonAdd'
        listButtonAdd.classList.add("removeButtonVisual");      // for variable 'listButtonAdd' adding new class 'removeButtonVisual'
        var buttonRemove = document.createElement("button");    // creating new element 'button' and assigning it to variable 'buttonRemove'
        buttonRemove.classList.add("buttonRemove");     // adding new class 'buttonRemove' for variable 'buttonRemove'

        listButtonAdd.appendChild(document.createTextNode(inputAdd.value));     // creating TextNode with value from 'inputAdd' field for 'listButtonAdd' variable 
        listAdd.appendChild(listButtonAdd);     // for variable 'listAdd' adding child element which is 'listButtonAdd' variable
        unorderListAdd.appendChild(listAdd);    // for variable 'unorderListAdd' adding child element which is 'listAdd' variable
        buttonRemove.appendChild(document.createTextNode("Remove"));    // for variable 'buttonRemove' creating TextNode with Text = 'Remove'
        listButtonAdd.appendChild(buttonRemove);    // for variable 'listButtonAdd' adding child element which is 'buttonRemove' variable
        inputAdd.value = "";    // resetting 'inputAdd' value to empty

        listButtonAdd.addEventListener("click", function() {    // enabling EventLIstener for variable 'listButtonAdd' which will be triggered when button 'listButtonAdd' is pressed by mouse
            listButtonAdd.classList.toggle("crossOutDone");     // changing class to 'crossOutDone' for variable 'listButtonAdd'
        });

        buttonRemove.addEventListener("click", function() {     // enabling EventLIstener for variable 'buttonRemove' which will be triggered when button 'buttonRemove' is pressed by mouse
            buttonRemove.parentElement.parentElement.remove();      // removing parentElement -> parentElement of 'buttonRemove' element (two parentElements)
        });
    };
});

inputAdd.addEventListener("keypress", function(event) {
    if ((inputAdd.value.length > 0) && (event.code === "Enter")) {
        var listAdd = document.createElement("li");
        var listButtonAdd = document.createElement("button");
        listButtonAdd.classList.add("removeButtonVisual");
        var buttonRemove = document.createElement("button");
        buttonRemove.classList.add("buttonRemove");

        listButtonAdd.appendChild(document.createTextNode(inputAdd.value));
        listAdd.appendChild(listButtonAdd);
        unorderListAdd.appendChild(listAdd);
        buttonRemove.appendChild(document.createTextNode("Remove"));
        listButtonAdd.appendChild(buttonRemove);
        inputAdd.value = "";

        listButtonAdd.addEventListener("click", function() {
            listButtonAdd.classList.toggle("crossOutDone");
        });

        buttonRemove.addEventListener("click", function() {
            buttonRemove.parentElement.parentElement.remove();
        });
    };
});