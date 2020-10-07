window.onload = () => {
    let flag = 0;
    document.getElementById("btn1").addEventListener("click", btn1);
    document.getElementById("btn2").addEventListener("click", btn2);
    document.getElementById("btn3").addEventListener("click", btn3);
    document.getElementById("btn4").addEventListener("click", btn4);
}

function btn1() {
    if (flag == 0) {
        document.getElementById("l1").innerHTML = "Lectura completada";
        flag = 1;
    } else {
        document.getElementById("l1").innerHTML = "Lectura de 3 min";
        flag = 0;
    }
}

function btn2() {
    if (flag == 0) {
        document.getElementById("l2").innerHTML = "Lectura completada";
        flag = 1;
    } else {
        document.getElementById("l2").innerHTML = "Lectura de 2 min";
        flag = 0;
    }
}

function btn3() {
    if (flag == 0) {
        document.getElementById("l3").innerHTML = "Lectura completada";
        flag = 1;
    } else {
        document.getElementById("l3").innerHTML = "Lectura de 3 min";
        flag = 0;
    }
}

function btn4() {
    if (flag == 0) {
        document.getElementById("l4").innerHTML = "Lectura completada";
        flag = 1;
    } else {
        document.getElementById("l4").innerHTML = "Lectura de 5 min";
        flag = 0;
    }
}