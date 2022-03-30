let cong = document.getElementById('cong');
let tru = document.getElementById('tru');
let nhan = document.getElementById('nhan');
let chia = document.getElementById('chia');
cong.addEventListener('click',cong1)
function cong1(){
    let num1 = +document.getElementById('a').value;
    let num2 = +document.getElementById('b').value;
    document.getElementById('result').innerHTML= num1 + num2;
}
tru.addEventListener('click',tru1)
function tru1(){
    let num1 = +document.getElementById('a').value;
    let num2 = +document.getElementById('b').value;
    document.getElementById('result').innerHTML=  num1-num2;
}
nhan.addEventListener('click',nhan1)
function nhan1(){
    let num1 = +document.getElementById('a').value;
    let num2 = +document.getElementById('b').value;
    document.getElementById('result').innerHTML= num1*num2;
}
nhan.addEventListener('click',chia1)
function chia1(){
    let num1 = +document.getElementById('a').value;
    let num2 = +document.getElementById('b').value;
    document.getElementById('result').innerHTML= num1/num2;
}