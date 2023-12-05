window.onload = function() {
    var inputarray = document.getElementsByClassName("next");
    var len = inputarray.length;
    for (i = 0; i < len; i++) {
        inputarray[i].onclick = kscs;
    }
};

var Btn1 = document.getElementById("btn1");
var Btn2 = document.getElementById("btn2");
var fieldset = document.getElementsByTagName("fieldset");
var index = 1;
var xyt = 0;

let set='';
function kscs() {
    if (index == 1) {
        timedCount();
        fieldset[index].style.display = "block";
        fieldset[index - 1].style.display = "none";
        document.getElementById("jj").style.display = "none";
        index++;
    } else {
        if (index == tzjs) {
        clearTimeout(jsq);
        }
        var label=fieldset[index-1].getElementsByTagName("label");
        var name = "a" + (index - 1);
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
        clearTimeout(set);
        set=setTimeout("sty()", 500);
    }
};

var tj = 0;
function timedCount() {
    document.getElementById('txt').value = tj;
    tj = tj + 1;
    jsq=setTimeout("timedCount()", 1000);
};

function sty() {
    fieldset[index].style.display = "block";
    fieldset[index - 1].style.display = "none";
    if (index == 2) {
        document.getElementById("btn2").style.display = "block";
    }
    index++;
    if (xyt > 0) {
        xyt = xyt - 1;
        if (xyt == 0) {
            document.getElementById("btn1").style.display = "none";
        }
    }
}

Btn1.onclick = function(ev) {
    fieldset[index].style.display = "block";
    fieldset[index - 1].style.display = "none";
    if (index == 2) {
        document.getElementById("btn2").style.display = "block";
    }
    index++;
    xyt = xyt - 1;
    if (xyt == 0) {
        document.getElementById("btn1").style.display = "none";
    }
};

Btn2.onclick = function(ev) {
    if (index == 3) {
        document.getElementById("btn2").style.display = "none";
    }
    fieldset[index - 1].style.display = "none";
    fieldset[index - 2].style.display = "block";
    index = index - 1;
    document.getElementById("btn1").style.display = "block";
    xyt++;
};