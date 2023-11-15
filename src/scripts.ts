
document.getElementById('btn1').onclick = function(){
    document.getElementById('div1').style.backgroundColor = 'Yellow';
}

document.getElementById('btn2').onclick = function(){
    document.getElementById('div2').innerText = 'Success';
}

document.getElementById('btn3').onclick = function(){
    document.getElementById('div3').style.display = 'none';
}



var switchButton = document.getElementById('btn4');
var div4 = document.getElementById('div4');

var isNone = false;
const changeDisplay = () => {
    if (isNone) {
        div4.style.display = 'none';
    } else {
        div4.style.display = 'block';
    }
    isNone =!isNone;
}
switchButton.onclick = changeDisplay;