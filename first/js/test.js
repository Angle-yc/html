function mOver(obj) {
    obj.innerHTML = "谢谢";
}

function mOut(obj) {
    obj.innerHTML = "把鼠标移到上面";
}

function mDown(obj) {
    obj.innerHTML = "鼠标按下了";
}

function mUp(obj) {
    obj.innerHTML = "鼠标抬起了";
}

function mMove(obj) {
    obj.innerHTML = "鼠标移动中";
}

function mEnter(obj) {
    obj.innerHTML = "鼠标进入区域";
}

function mLeave(obj) {
    obj.innerHTML = "鼠标离开区域";
}

//相当于给容器中添加新的子孩子
function addChild() {
    var p = document.createElement("p");
    var con = document.createTextNode("新加的段落");
    p.appendChild(con);
    var div = document.getElementById("div");
    div.appendChild(p)
}

//移除div中指定的孩子
function removeChild() {
    var parent = document.getElementById("div");
    var child = document.getElementById("p1");
    var child2 = document.getElementById("p2");
    child2.innerHTML = "执行了删除操作" + name;
    parent.removeChild(child);
}

//好像不可行，暂没有找到原因
function btnMove() {
    var btn = document.getElementById("btn");
    btn.addEventListener("change", removeChild);
}

var name;
var age;
var sex;
//对象，并为对象赋值
function person(name, age, sex) {
    this.name = name;
    this.sex = sex;
    this.age = age;
}

// 定时弹窗
function timemsg() {
    var t = setTimeout("confirm('我是确认弹窗')",5000)
}
//检查Cookies
function checkCookie() {
    username=getCookie('username')
    if (username!=null && username!="") {
        alert('Welcome again '+username+'!')
    } else {
        username=prompt('Please enter your name:',"")
        if (username!=null && username!="")
        {
            setCookie('username',username,365)
        }
    }
}

function setCookie(c_name,value,expiredays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : "; expires="+exdate.toGMTString());
}

function getCookie(c_name) {
    if (document.cookie.length>0) {
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1) {
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return "";
}

function playMusic(){
    var video = document.getElementById("play");
    video.play();
}
var $ = require('jquery');
function onClicks() {
    $('#btn').click(function (){
        confirm("hello world")
    })
}
