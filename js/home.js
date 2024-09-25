var getName = document.getElementById('addName');
var getEmail = document.getElementById('addEmail');
var getPass = document.getElementById('addPass');
var user_name = document.getElementById('user_name');
var storData = localStorage.getItem('All users')
var usersArray = JSON.parse(storData)

// Use a 'for' loop to display each object
for (var prop in usersArray) {
    getName.innerHTML = usersArray[prop].name;
    // user name dropdown
    user_name.innerHTML = usersArray[prop].name;
    getEmail.innerHTML = usersArray[prop].email;
    getPass.innerHTML = usersArray[prop].password;
    // console.log(usersArray[prop])
}

// logout
function logout() {
    window.location.href = 'login.html'
    console.log('ready')
}