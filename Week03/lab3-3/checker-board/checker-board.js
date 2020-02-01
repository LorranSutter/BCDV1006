function checkerBoard() {
    var target = document.querySelector("body");
    var color = true;

    for (let i = 0; i < 8; i++) {
        var row = document.createElement("div");
        row.classList.add("row");

        target.appendChild(row);

        for (let j = 0; j < 8; j++) {
            var check = document.createElement("input")
            check.setAttribute("type", "checkbox");

            var div = document.createElement("div");
            div.classList.add("square");
            div.classList.add(color ? "square-white" : "square-black");

            row.appendChild(div);
            div.appendChild(check);

            color = !color;
        }
        color = !color;
    }
}

checkerBoard();