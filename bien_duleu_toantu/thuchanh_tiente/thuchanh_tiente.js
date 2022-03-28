
function do_some_thing(){
    let amount = document.getElementById('amount').value;
    let frcurrency = document.getElementById('fromcurency').value;
    let tocurrency = document.getElementById('tocurency').value;
    let result = amount*tocurrency/frcurrency;
    document.getElementById('result').innerHTML = result
}
