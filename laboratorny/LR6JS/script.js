let elementP = document.querySelectorAll("p");
let btnChangePositionElements = document.getElementById("btn");
let table = document.querySelector("table");
let elementH = document.querySelectorAll("h2");

btnChangePositionElements.addEventListener("click", () => {
    let rows = table.tBodies[0].rows;

    for (let i = 0; i < rows.length; i++) {
        rows[i].cells[0].insertAdjacentElement("afterbegin", elementH[i]);
        rows[i].cells[1].insertAdjacentElement("afterbegin", elementP[i]);
    }

});