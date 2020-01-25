function printer(input) {
    console.log(`input is: ${input}`);
    var target = document.getElementById("target");

    for (var i = 0; i < input.length; i++) {
        var paragraph = document.createElement("p");
        paragraph.innerText = input[i];        

        target.appendChild(paragraph);
    }
}

var h1 = document.querySelector("h1").innerText;
// printer(h1);

function printerPrompt() {
    var input = prompt("Insert string");

    console.log(`input is: ${input}`);

    var target = document.getElementById("target");

    for (var i = 0; i < input.length; i++) {
        var paragraph = document.createElement("p");
        paragraph.innerText = input[i];        

        target.appendChild(paragraph);
    }
}

// printerPrompt();

function printerButton() {
    var input = document.querySelector("input").value;

    console.log(`input is: ${input}`);

    var target = document.getElementById("target");

    for (var i = 0; i < input.length; i++) {
        var paragraph = document.createElement("p");
        paragraph.innerText = input[i];        

        target.appendChild(paragraph);
    }
}

let printBtn = document.getElementById("printBtn");
printBtn.addEventListener("click", printerButton);


// Change Message

function changeMessage() {
    var h1 = document.querySelector("h1");
    h1.innerText = "New cool message";
}

let msgBtn = document.getElementById("msgBtn");
msgBtn.addEventListener("click", changeMessage);