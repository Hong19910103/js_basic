
let button = document.getElementById('result');
button.addEventListener('click',data())
function data() {
    let input1 = parseInt(document.getElementById('width').value);
    let input2 =parseInt(document.getElementById('height').value);
    document.getElementById('Dientich').innerText = " Diện tích " + input1 * input2;
    document.getElementById('chuvi').innerText = "chu vi" + ((input1 + input2)*2);
}
