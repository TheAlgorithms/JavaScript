'use strict';

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");


function buttonClassCreator() {
    var delButton = document.createElement("button");
    delButton.appendChild(document.createTextNode("Delete Item"));
    delButton.addEventListener("click", DelListButton);
    return delButton;
}


[].forEach.call(li, function (liItem) {
    liItem.innerText += " ";
    liItem.appendChild(buttonClassCreator());
    liItem.addEventListener(listAddEventListener()[0], listAddEventListener()[1]);
});

function listAddEventListener() {
    return ["click", ListStyleAfterClick]
}


function inputLength() {
    return input.value.length;
}

function DelListButton() {
    this.parentElement.remove();
}


function ListStyleAfterClick() {

    this.classList.toggle("done");

    // if (this.className == "done") {
    //     this.className = "";
    // } else {
    //     this.className = "done";
    // }
}

function createListElement() {
    var li = document.createElement("li");
    buttonClassCreator();
    li.appendChild(document.createTextNode(input.value + " "));
    li.appendChild(buttonClassCreator());
    li.addEventListener(listAddEventListener()[0], listAddEventListener()[1]);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
