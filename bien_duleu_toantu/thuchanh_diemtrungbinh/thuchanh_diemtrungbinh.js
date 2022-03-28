let button = document.getElementById('result');
button.addEventListener('click',click);
function click(){
    let math = parseInt(document.getElementById('math').value);
    let physical = parseInt(document.getElementById('phisical').value);
    let chemical = parseInt(document.getElementById('chemical').value);
    document.getElementById('tongdiem').innerHTML =  ' Tổng điểm' + (math+physical+chemical);
    document.getElementById('diemtb').innerHTML =  'Điểm trung bình' +((math+physical+chemical)/3);
}