function changeName() {
    var names = document.querySelectorAll(".student");
    names.forEach((n) => n.innerText = "Lorran");
    // for(var i = 0; i < names.length; i++) {
    //   names[i].innerText = "Lorran";
    // }
  }
  
function changeGrades() {
    var grades = document.querySelectorAll(".grade");

    grades.forEach((g) => g.innerText = "A+");
    // for(var i = 0; i < grades.length; i++) {
    //     grades[i].innerText = "A+";
    // }
}

document.querySelector("#change-name").addEventListener("click", changeName);
document.querySelector("#change-grades").addEventListener("click", changeGrades);