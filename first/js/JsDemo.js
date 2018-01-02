/**
 * 比较大小并弹窗
 * @param a
 * @param b
 */
function compare(a,b) {
    if (a>b){
        alert("A is less than B");
    }else if(a > b){
        alert("A is greater than B");
    }else {
        alert("A is equal to B")
    }
}
/**
 * 确定按钮加弹窗
 */
function confirmOrAlert() {
    if (confirm("Are you sure?")){
        alert("I'm so glad you're sure!");
    }else {
        alert("I'm so sorry to hear you're not sure.");
    }
}

/**
 * 输入弹窗
 */
function promptResult() {
    var result = prompt("What is your name?","");
    if (result!==null){
        alert("Welcome , "+result);
    }
}

function documentResult() {
    // var html = document.documentElement;
    var html = document.body;
    if (html!==null){
        alert(html);
    }
}
