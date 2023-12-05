var Btn1 = document.getElementById("btn1");
var Btn2 = document.getElementById("btn2");
var fieldset = document.getElementsByTagName("fieldset");
var index = 1;
var xyt = 0;
var fh = 0;

let set='';
function kscs() {
    if (index == 1) {
        document.getElementById("jj").style.display = "none";
        document.getElementById("slck").style.display = "none";
        fieldset[index].style.display = "block";
        fieldset[index - 1].style.display = "none";
        document.getElementById("btn2").style.display = "block";
        document.getElementById('btn2').value='退出测试';
        document.getElementById("btn2").style.background = "#0a7910";
        if (fh>0) {
        document.getElementById("btn1").style.display = "block";    
        }
        index++;
    } else {
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
        set=setTimeout("sty()", 400);
    }
};

function sty() {
    fieldset[index].style.display = "block";
    fieldset[index - 1].style.display = "none";
    if (index == 2) {
    document.getElementById('btn2').value='上一题';
    document.getElementById("btn2").style.background = "#0088cc";
    }
    index++;
    if (xyt > 0) {
        xyt = xyt - 1;
        if (xyt == 0) {
            document.getElementById("btn1").style.display = "none";
        }
    }
    fh++;
}

Btn1.onclick = function(ev) {
    fieldset[index].style.display = "block";
    fieldset[index - 1].style.display = "none";
    if (index == 2) {
        document.getElementById("btn2").style.display = "block";
        document.getElementById('btn2').value='上一题';
        document.getElementById("btn2").style.background = "#0088cc";
    }
    index++;
    xyt = xyt - 1;
    if (xyt == 0) {
        document.getElementById("btn1").style.display = "none";
    }
};

Btn2.onclick = function(ev) {
    fieldset[index - 1].style.display = "none";
    fieldset[index - 2].style.display = "block";
    if (index == 3) {
    document.getElementById('btn2').value='退出测试';
    document.getElementById("btn2").style.background = "#0a7910";
    }
    index = index - 1;
    if (index == 1) {
    document.getElementById("jj").style.display = "block";
    document.getElementById("slck").style.display = "block";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn1").style.display = "none";
    }else{
    document.getElementById("btn1").style.display = "block";
    xyt++;
    }
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