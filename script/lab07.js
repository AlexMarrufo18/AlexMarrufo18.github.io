let flag = 1;

function extraer() {
    let nombre = document.getElementById('i_nom').value;
    let partes = nombre.split(" ");

    document.getElementById('ap').value = partes[0];
    document.getElementById('am').value = partes[1];
    for (let i = 0; i < partes.length; i++) {
        if (i >= 2) {
            document.getElementById("nom").value += partes[i] + " ";
        }
    }

    document.getElementById("l_ap").value = partes[0].length + partes[1].length;

    var fecha = new Date();
    fecha = document.getElementById('i_fech').value;
    meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var mesN = fecha.split("-");
    var mes = parseInt(mesN[1] - 1);
    document.getElementById('m_l').value = meses[mes];

    document.getElementById("ed").value = "".concat(calcularEdad(fecha), " años");
}

calcularEdad = function calcularEdad(fecha) {
    var fech_hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = fech_hoy.getFullYear() - cumpleanos.getFullYear();
    var m = fech_hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || m === 0 && fech_hoy.getDate() < cumpleanos.getDate()) {
        edad--;
    }
    return edad;
}

function colorear() {

    if (flag) {
        document.getElementById('ap_nom').style.background = "#f73838";
        document.getElementById('fech').style.background = "#f73838";
        document.getElementById('c_ap').style.background = "#f73838";
        document.getElementById('c_am').style.background = "#f73838";
        document.getElementById('c_nom').style.background = "#f73838";
        document.getElementById('c_lap').style.background = "rgb(70, 70, 139)";
        document.getElementById('c_ed').style.background = "rgb(70, 70, 139)";
        document.getElementById('c_ml').style.background = "rgb(70, 70, 139)";
        document.getElementById('b_r').style.background = "rgb(70, 70, 139)";
        flag = 0;

    } else {
        document.getElementById('ap_nom').style.background = "rgb(70, 70, 139)";
        document.getElementById('fech').style.background = "rgb(70, 70, 139)";
        document.getElementById('c_ap').style.background = "rgb(70, 70, 139)";
        document.getElementById('c_am').style.background = "rgb(70, 70, 139)";
        document.getElementById('c_nom').style.background = "rgb(70, 70, 139)";
        document.getElementById('c_lap').style.background = "#f73838";
        document.getElementById('c_ed').style.background = "#f73838";
        document.getElementById('c_ml').style.background = "#f73838";
        document.getElementById('b_r').style.background = "#f73838";
        flag = 1;
    }
}