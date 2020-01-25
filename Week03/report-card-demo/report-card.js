// Report-card demo

//Declare a variable name and assign it to the value of the element with the class of student-1
//Change the innerText of the name variable to your name
let name = document.querySelector(".student-1");
name.innerText = "Lorran";

//Declare a variable schoolName and assign it to the value of the h3 element
//Change the innerText of the schoolName variable to be the name of a school you’ve attended
let schoolName = document.querySelector("h3");
schoolName.innerText = "George Brown";

//Declare a variable bestGrade and assign it to the value of the element with a class of grade-2
//Change the innerText of the bestGrade variable to be an A+!
let bestGrade = document.querySelector(".grade-2");
bestGrade.innerText = "A+";

// Change Message
function changeMessage() {
    var p = document.querySelector(".message");
    p.innerText = "Good job!";
}

let msgBtn = document.getElementById("msgBtn");
msgBtn.addEventListener("click", changeMessage);

function changeFinalStatus(){
    var student2 = document.querySelector(".student-2");
    var status = document.querySelector("#status");

    student2.innerText = "Lorran"
    status.innerText = "approved!";
}

let statusBtn = document.getElementById("statusBtn");
statusBtn.addEventListener("click", changeFinalStatus);