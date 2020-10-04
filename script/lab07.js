let flag = 1;

function extraer() {

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