window.onload  = function () {
    var img = document.getElementById("main_img");
    var main_top = document.getElementById("main_top");
    var pp = document.getElementById("yuan").getElementsByTagName("span");
    var on = document.getElementsByClassName("on");
    var xxx = document.getElementById("xxx");
    var ab = document.getElementById("qwe");
    var www = document.getElementById("www");
    var ww = document.getElementById("ww");
    var eee = document.getElementById("eee");
    var ee = document.getElementById("ee");
    var k = document.getElementById("k");
    var l = document.getElementById("l");
    var qq = 1;

    function showbutton() {
        for (e = 0; e <= pp.length; e++) {
            if (pp[e].className == 'sss') {
                pp[e].className = '';
                break;
            }
        }
        pp[qq - 1].className = 'sss';

    }

    for (var e = 0; e < pp.length; e++) {
        pp[e].onclick = function () {
            var t = this.getAttribute('index');
            main_top.style.left = (t - 1) * (-900) + "px";
            qq = t;
            showbutton();
        }
    }
    k.onclick = function () {

        if (parseInt(main_top.style.left) < 0) {
            main_top.style.left = parseInt(main_top.style.left) + 900 + "px";
            qq -= 1;
            showbutton();
        } else {
            main_top.style.left = -4500 + "px";
            qq = 6;
            showbutton();
        }
    }
    l.onclick = function () {
        if (parseInt(main_top.style.left) > -4500 && parseInt(main_top.style.left) <= 0) {
            main_top.style.left = parseInt(main_top.style.left) - 900 + "px";
            qq = qq + 1;
            showbutton();
        }
        else {
            main_top.style.left = 0 + "px";
            qq = 1;
            showbutton();
        }
    }

    var a = setInterval(l.onclick, 2000);
    img.onmouseover = function () {
        clearInterval(a)

    }
    img.onmouseout = function () {
        a = setInterval(l.onclick, 2000);

    }
    ab.onmouseover = function () {
        xxx.style.display = "inline";
    }
    ab.onmouseout = function () {
        xxx.style.display = "none";

    }
    www.onmouseover = function () {
        ww.style.display = "inline";
    }
    www.onmouseout = function () {
        ww.style.display = "none";

    }

    eee.onmouseover = function () {
        ee.style.display = "inline";
    }
    eee.onmouseout = function () {
        ee.style.display = "none";

    }
}