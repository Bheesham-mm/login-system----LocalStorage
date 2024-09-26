// get user element
var user_name = document.getElementById('user_name');

var storData = localStorage.getItem('All users')
var usersArray = JSON.parse(storData)

// user name dropdown list show
for (var prop in usersArray) {
    user_name.innerHTML = usersArray[prop].name;
    // console.log(usersArray[prop])
}

// notification bar
var notificationBox = document.getElementById('box');
function show() {
    if (notificationBox.style.display === 'none') {
        notificationBox.style.display = 'block';
    } else {
        notificationBox.style.display = 'none'
    }
}