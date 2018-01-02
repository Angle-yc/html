function show(){
    var showimg = document.getElementById("showimg");
    var imginput = document.getElementById("file_input");
    if (typeof FileReader === 'undefined') {
        showimg.innerHTML = "抱歉，你的浏览器不支持 FileReader";
        imginput.setAttribute('disabled', 'disabled');
    } else {
        imginput.addEventListener('change', function() {
            var file = this.files[0];
            if (!/image\/\w+/.test(file.type)) {
                alert("请确保文件为图像类型");
                return false;
            }
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e) {
                showimg.innerHTML = '<img src="' + this.result + '"  width="220" height="220" alt=""/>'
            }
        }, false);
    }
}