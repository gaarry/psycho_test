var index = 0;
var ind = 0;
var ind2=1;
var xyt = 0;
let set = '';
var xxnr = '';
var fieldset = document.getElementsByTagName("fieldset");
function xztj() {
    if (index == 0) {
       timedCount();
       fieldset[ind].style.display = "block";
        ind=ind+1;
        document.getElementById("au").style.display = "none";        
        document.getElementById("jj").style.display = "none";
        document.getElementById("slck").style.display = "none";
    } else {
        var a = document.getElementsByName('xztm');
        for (var i = 0; i < a.length; i++) {
            if (a[i].checked) {
                var b = '';
                if (csb == 1) {
                    var bb1 = tmxx[index];
                    var bb2 = tmxx[index - 1];
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
    var jgsj=0;
    }else{
    var jgsj=400;   
    }
    set = setTimeout("sty()", jgsj);
};

function sty() {
    if (csb == 1) {
        var bb1 = bb2 = tmxx[index];
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
    index++
    if (index > tmnr.length) {
        document.getElementById("xztm").style.display = "none";
        document.getElementById("xzxx").style.display = "none";
        fieldset[ind].style.display = "block";
    }
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
    gx();
    if (index == tmnr.length) {
        document.getElementById("xztm").style.display = "block";
        document.getElementById("xzxx").style.display = "block";
        fieldset[ind+1].style.display = "none";
        fieldset[ind].style.display = "none";
        ind2--;
    }
};
Btn1.onclick = function(a) {
    index++;
    document.getElementById("btn2").style.display = "block";
    gx();
    xyt = xyt - 1;
    if (xyt == 0) {
        document.getElementById("btn1").style.display = "none"
    }
    if (index > tmnr.length) {
        document.getElementById("xztm").style.display = "none";
        document.getElementById("xzxx").style.display = "none";
        fieldset[ind].style.display = "block";
    }
};

function gx() {
    document.getElementById("xztm").innerHTML = [index] + '.' + tmnr[index - 1];
    var a = document.getElementById('sjz').value;
    var b = a.toString().split('');
    var c = '';
    if (csb == 1) {
        var bb1 = tmxx[index];
        var bb2 = tmxx[index - 1];
    } else {
        var bb1 = bb2 = tmxx;
    }
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
//用户信息
window.onload = function() {
    var inputarray = document.getElementsByClassName("next");
    var len = inputarray.length;
    for (i = 0; i < len; i++) {
        inputarray[i].onclick = kscs;
    }
};

function kscs() {
if (ind2==2) {
var label=fieldset[ind2].getElementsByTagName("label");
        var name = "a" + [tmnr.length+ind2];
        var obj = document.getElementsByName(name);
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].checked) {
            label[i].style.color = "white";
            label[i].style.background = "#0088cc";
            }else{
            label[i].style.color = "black";
            label[i].style.background = "#ddd";
            }
        }
}
if (ind2==1) {
fieldset[ind].style.display = "none";
fieldset[ind+1].style.display = "block";
ind2++;
}
};
//计时
var tj = 0;
function timedCount() {
    document.getElementById('txt').value = tj;
    tj = tj + 1;
    jsq=setTimeout("timedCount()", 1000);
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