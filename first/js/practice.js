/**
 * 导入图片
 */
function showImg() {
    var showing = document.getElementById("showing")
    var fileInput = document.getElementById("fileinput")
    if (typeof FileReader === 'undefined'){
        showing.innerHTML = "抱歉您的浏览器不支持FileReader"
        fileInput.setAttribute('disabled','disabled')
    }else {
        fileInput.addEventListener('change',function () {
            var file = this.files[0];
            if (!/image\/\w+/.test(file.type)) {
                alert("请确保文件为图像类型");
                return false;
            }
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {
                showing.innerHTML = '<img src="'+this.result+'" width="300" height="260" alt="">'
            }
        },false)
    }
}

/**
 * 判断数字
 */
function testNum() {
    try {
        var x = document.getElementById("num").value;
        if ( x == "") throw "值为空";
        if (isNaN(x)) throw "不是数字";
        if (x > 10) throw "数字太大";
        if (x < 5) throw "数字太小";
        if ( x > 4 && x < 11) throw "very good!"
    }catch (e){
        var mess = document.getElementById("mess");
        mess.innerHTML = "错误："+e+"。";
    }
}
//返回上一页
function goBack() {
    window.history.forward();
    
}