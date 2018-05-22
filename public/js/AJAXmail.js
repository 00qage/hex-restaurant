//AJAX
var send = document.getElementById('send');
var person = document.getElementById('person');
var phone = document.getElementById('phone');
var mail = document.getElementById('mail');
var NumberOfpeople = document.getElementById('NumberOfpeople');
var Vegetarian = document.getElementById('Vegetarian');

send.addEventListener('click',function (e) {
    e.preventDefault();
    var csrf = _csrf.value
    var per = person.value;
    var ph = phone.value;
    var m = mail.value;
    var NOP = NumberOfpeople.value;
    var V = Vegetarian.value;

    var postData = {
        _csrf:csrf,
        person:per,
        phone:ph,
        mail:m,
        NumberOfpeople:NOP,
        Vegetarian:V,
    }
    var xhr = new XMLHttpRequest();
    xhr.open('post','/post');
    xhr.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(postData);
    xhr.send(data);
    // xhr.onload = function () {
    //     console.log(xhr.responseText);
        
    // }
  })