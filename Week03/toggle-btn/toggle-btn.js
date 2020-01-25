var button = document.querySelector('.click');
button.classList.add('pink');

function toggleBtnCss(){
  if (button.classList.contains("pink")){
    button.classList.remove("pink");
    button.classList.add("yellow");
  }else {
    button.classList.remove("yellow");
    button.classList.add("pink");
  }
}

button.addEventListener("click", toggleBtnCss);