let id = prompt("Введіть поштовий індекс")

function testPhoneNumber(id) {
    if (!id.length) alert("Неправильний поштовий індекс");
    var phoneTemplate = new RegExp("790?[0-9]{2}");
    id = id.replace(phoneTemplate, "");

    if (id != "")
        alert("Неправильний поштовий індекс");
}

testPhoneNumber(id)
alert("Поштовий індекс який було введено: " + id);