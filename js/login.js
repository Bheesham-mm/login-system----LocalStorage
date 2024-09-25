var mail = document.getElementById('email');
var pass = document.getElementById('password');
var storData = localStorage.getItem('All users');
var usersArrayData = JSON.parse(storData);

function login() {
    if (mail.value === '') {
        alert('Email is empty');
    } else if (pass.value === '') {
        alert('Password is empty');
    } else {
        var user = usersArrayData.find(function (user) {
            return user.email === mail.value && user.password === pass.value;
        });

        if (user) {
            console.log(user.email);
            console.log(user.password);
            window.location.href = 'home.html';
        } else {
            alert('User data is not found');
        }
    }
}

//  password hide show
function hideShow() {
    var pass = document.getElementById('password');
    var toggleText = document.getElementById('show');

    if (pass.getAttribute('type') === 'password') {
        pass.setAttribute('type', 'text');
        toggleText.innerHTML = 'hide';
    } else {
        pass.setAttribute('type', 'password');
        toggleText.innerHTML = 'show';
    }
}