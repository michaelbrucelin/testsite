//window.alert('hello world.');
//window.confirm('are you ok?');
//window.setInterval('alert(\'hello world\')', 5000);

var timer0;
function f1() {
    alert("start");
    timer0 = setInterval(() => {
        alert('hello timer.')
    }, 2000);
}
function f2() {
    alert("stop");
    if (timer0) { clearInterval(timer0); }
}
function zizeng1() {
    alert("start");
    setInterval(() => {
        var numbox = document.getElementById("zizeng1");
        num = numbox.value;
        num = parseInt(num) + 1;
        numbox.value = num;
    }, 1000);
}
function zizeng2() {
    alert("start");
    setInterval(() => {
        var numbox = document.getElementById("zizeng2");
        numbox.value++;
    }, 1000);
}

function srcElementSample() {
    var v = window.event.srcElement.value;
    if (v == "+") { alert("加法"); }
    else if (v == "-") { alert("减法"); }
    else { alert("I don't kown."); }
}

function AddCopyRight() {
    var v = document.getElementById("addcr").value;
    console.log(v);
    v = v + "<br />CopyRight: http://mlin.403found.cn";
    console.log(v);
    clipboardData.setData("text", v);
    console.log(clipboardData.getData("text"));
}

function GetSex() {
    var rdos = document.getElementsByName("sex");
    for (let i = 0; i < rdos.length; i++) {
        if (rdos[i].checked) {
            alert(rdos[i].value);
            break;
        }
    }
}

function SetAllChks() {
    var ifchk = event.srcElement.checked;
    var chks = document.getElementsByName("chks");
    for (let i = 0; i < chks.length; i++) {
        //if (chks[i].type == "checkbox") {
        chks[i].checked = ifchk;
        //}
    }
}

function SetAllChk() {
    var chk = document.getElementsByName("allchk");
    var chks = document.getElementsByName("chks");
    for (let i = 0; i < chks.length; i++) {
        if (!chks[i].checked) {
            chk[0].checked = false;
            break;
        }
        if (i == chks.length - 1) {
            chk[0].checked = true;
        }
    }
}

function CreateTableDynamic() {
    var json = [
        { "name": "microsoft", "stie": "https://www.microsoft.com" },
        { "name": "google", "stie": "https://www.google.com" },
        { "name": "github", "stie": "https://www.github.com" },
    ];

    var div = document.getElementById("div2");
    var table = document.createElement("table");
    table.border = 1;
    for (let i = 0; i < json.length; i++) {
        var site = json[i];
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerText = site.name;
        tr.appendChild(td1);
        var td2 = document.createElement("td");
        td2.innerHTML = "<a href='" + site.stie + "'>" + site.name + "</a>";
        tr.appendChild(td2);
        var td3 = document.createElement("td");
        td3.innerText = site.stie;
        tr.appendChild(td3);
        table.appendChild(tr);
    }

    div.appendChild(table);
}

function DocWriteTable() {
    document.write("<table><tr><td>AA11</td><td>BB11</td><td>CC11</td><td>DD11</td></tr><tr><td>AA22</td><td>BB22</td><td>CC22</td><td>DD22</td></tr><tr><td>AA33</td><td>BB33</td><td>CC33</td><td>DD33</td></tr><tr><td>AA44</td><td>BB44</td><td>CC44</td><td>DD44</td></tr></table>")
}

function StaticRegister() {
    console.log("this is register static.");

    var btn = document.getElementById("btn02");
    //这样是不对的，这样相当于将函数的结果注册给了onclick事件
    //btn.onclick = DynamicRegister();
    btn.onclick = DynamicRegister;
    console.log("done");
}

function DynamicRegister() {
    console.log("this is register dynamic.");
}

function console1() {
    console.log("1111111111111111");
}
function console2() {
    console.log("2222222222222222");
}

//这样注册第二个注册会覆盖第一个注册
function regularRegister() {
    var btn = document.getElementById("btn14");
    btn.onclick = console1;
    btn.onclick = console2;
    btn.value = "regularRegister";
    console.log("done");
}

//js不支持这样注册委托链
function csharpRegister() {
    var btn = document.getElementById("btn14");
    btn.onclick += console1;
    btn.onclick += console2;
    btn.value = "csharpRegister";
    console.log("done");
}

//IE中这样注册多个事件
function attachRegister() {
    var btn = document.getElementById("btn14");
    btn.attachEvent("onclick", console1);
    btn.attachEvent("onclick", console2);
    btn.value = "attachRegister";
    console.log("done");
}

//w3c标准，在chrome和firefox中这样注册多个事件
function listenerRegister() {
    var btn = document.getElementById("btn14");
    btn.addEventListener("click", console1);
    btn.addEventListener("click", console2);
    btn.value = "listenerRegister";
    console.log("done");
}

function testThis() {
    console.log(this.value);
}
function testSrcElement() {
    console.log(event.srcElement.value);
}

window.onload = () => {
    var div3 = document.getElementById("div3");
    document.onmousemove = () => {
        document.title = event.clientX + "-" + event.clientY;

        div3.innerText = "{" + event.clientX + "-" + event.clientY + "}";
        div3.style.left = (event.clientX + 8) + "px";
        div3.style.top = (event.clientY + 8) + "px";
        div3.style.fontSize = "1px";
    }

    //var btn = document.createElement("<input type='button' value='动态创建'>")
    var btn = document.createElement("input");
    btn.type = "button";
    btn.value = "动态创建";
    var div1 = document.getElementById("div1");
    div1.appendChild(btn);

    btn.onclick = () => {
        var txt1 = document.getElementById("txt1");
        div1.removeChild(txt1);
    }

    var course = document.getElementsByName("course");
    for (let i = 0; i < course.length; i++) {
        course[i].onclick = () => {
            srcValue = event.srcElement.value;
            var tbodysfather = document.getElementById("table3");
            var tbodys = tbodysfather.getElementsByTagName("tbody");
            for (let i = 0; i < tbodys.length; i++) {
                if (tbodys[i].id == "tbody0") {
                    tbodys[i].style.display = "block";
                }
                else if (tbodys[i].id == srcValue) {
                    tbodys[i].style.display = "block";
                }
                else {
                    tbodys[i].style.display = "none";
                }
            }
        }
    }
}