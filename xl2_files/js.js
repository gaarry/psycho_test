var index = 0;
var xyt = 0;
let set = '';
var xxnr = '';

function xztj() {
    if (index == 0) {
        document.getElementById("csnr").style.display = "block";
        document.getElementById("au").style.display = "none";
        document.getElementById("jj").style.display = "none";
        document.getElementById("slck").style.display = "none";
    } else {
        var a = document.getElementsByName('xztm');
        for (var i = 0; i < a.length; i++) {
            if (a[i].checked) {
                var b = '';
                if (csb == 1) {
                    var bb1 = bb2 = tmxx[index - 1];
                } else {
                    var bb1 = bb2 = tmxx;
                }

                for (var k = 0; k < bb1.length; k++) {
                    if (k == i) {
                        var c = ' style="background:#0088cc;color:#fff"'
                    } else {
                        var c = ''
                    }
                    var b = b + '<label' + c + '><input name="xztm" type="radio" class="next" onclick="xztj()">' + bb2[k] + '</label>'
                }
                document.getElementById("xzxx").innerHTML = b;
                var d = document.getElementById('sjz').value
                var e = d.toString().split('');
                if (index > e.length) {
                    document.getElementById('sjz').value = d + [i + 1]
                } else {
                    for (var n = 0; n < e.length; n++) {
                        if ((n + 1) == index) {
                            e[n] = [i + 1]
                        }
                    }
                    document.getElementById('sjz').value = e.join('')
                }
            }

        }
    }

    clearTimeout(set);
    if (index == 0) {
        var jgsj = 0;
    } else {
        var jgsj = 400;
    }
    set = setTimeout("sty()", jgsj);
};

function sty() {
    if (csb == 1) {
        if (index == tmnr.length) {
            var jt = index - 1;
        } else {
            var jt = index;
        }
        var bb1 = bb2 = tmxx[jt];
    } else {
        var bb1 = bb2 = tmxx;
    }
    if (xyt <= 0) {
        var a = '';
        for (var i = 0; i < bb1.length; i++) {
            var a = a + '<label><input name="xztm" type="radio" class="next" onclick="xztj()">' + bb2[i] + '</label>'
        }
        document.getElementById("xzxx").innerHTML = a;
    } else {
        var a = document.getElementById('sjz').value.toString().split('');
        var b = '';
        for (var k = 0; k < bb1.length; k++) {
            if ((k + 1) == a[index]) {
                var c = ' style="background:#0088cc;color:#fff"'
            } else {
                var c = ''
            }
            var b = b + '<label' + c + '><input name="xztm" type="radio" class="next" onclick="xztj()">' + bb2[k] + '</label>'
        }
        document.getElementById("xzxx").innerHTML = b
    }
    document.getElementById("xztm").innerHTML = [index + 1] + '.' + tmnr[index];
    if (index == 1) {
        document.getElementById("btn2").style.display = "block"
    }
    if (xyt > 0) {
        xyt = xyt - 1;
        if (xyt == 0) {
            document.getElementById("btn1").style.display = "none"
        }
    }

    if (index == tmnr.length) {
        document.getElementById("xztm").style.display = "none";
        document.getElementById("xzxx").style.display = "none";
        document.getElementById("sub").style.display = "block";
    }
    index++;
};
var Btn1 = document.getElementById("btn1");
var Btn2 = document.getElementById("btn2");
Btn2.onclick = function(a) {
    document.getElementById("btn1").style.display = "block";
    index--;
    if (index == 1) {
        document.getElementById("btn2").style.display = "none"
    } else {
        document.getElementById("btn1").style.display = "block"
    }
    xyt++;
    if (csb == 1) {
        if (index == tmnr.length) {
            var jt = index - 1;
        } else {
            var jt = index;
        }
        bb1 = tmxx[jt];
        bb2 = tmxx[index - 1];
    } else {
        bb1 = bb2 = tmxx;
    }
    gx();
    if (index == tmnr.length) {
        document.getElementById("xztm").style.display = "block";
        document.getElementById("xzxx").style.display = "block";
        document.getElementById("sub").style.display = "none";
    }
};
Btn1.onclick = function(a) {
    document.getElementById("btn2").style.display = "block";
    if (csb == 1) {
        if (index == tmnr.length) {
            var jt = index - 1;
        } else {
            var jt = index;
        }
        bb1 = tmxx[jt];
        bb2 = tmxx[index];
    } else {
        bb1 = bb2 = tmxx;
    }
    index++;
    gx();
    xyt = xyt - 1;
    if (xyt == 0) {
        document.getElementById("btn1").style.display = "none"
    }
    if (index > tmnr.length) {
        document.getElementById("xztm").style.display = "none";
        document.getElementById("xzxx").style.display = "none";
        document.getElementById("sub").style.display = "block";
    }

};

function gx() {
    document.getElementById("xztm").innerHTML = [index] + '.' + tmnr[index - 1];
    var a = document.getElementById('sjz').value;
    var b = a.toString().split('');
    var c = '';

    for (var k = 0; k < bb1.length; k++) {
        if ((k + 1) == b[index - 1]) {
            var d = ' style="background:#0088cc;color:#fff"'
        } else {
            var d = ''
        }
        var c = c + '<label' + d + '><input name="xztm" type="radio" class="next" onclick="xztj()">' + bb2[k] + '</label>'
    }
    document.getElementById("xzxx").innerHTML = c
};

var dkgb=1;
function jgsl(){
if (dkgb%2==0) {
document.getElementById("slnr").style.display = "none";
document.getElementById('jgsl').value='查看结果示例';
}else{
document.getElementById("slnr").style.display = "block";
document.getElementById('jgsl').value='关闭';
}
dkgb++;
}