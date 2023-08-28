
let celcius = document.getElementById("celci");
let kelvin = document.getElementById("kelvi");

celcius.addEventListener('input', function () {
    let celcivalue = this.value;

    let resultedCelci = parseFloat(celcivalue) + (273.15);
    // console.log(resultedCelci);
    // if (!(Number.isInteger(resultedCelci))) {
    //     resultedCelci = resultedCelci.toFixed(4);
    // }

    kelvin.value = resultedCelci;
    if (this.value == "") {
        kelvin.value = "";
    }
});


kelvin.addEventListener('input', function () {
    let f = this.value;
    celci = f - 273.15;
    celcius.value = celci;
    if (this.value == "") {
        celcius.value = "";
    }
})