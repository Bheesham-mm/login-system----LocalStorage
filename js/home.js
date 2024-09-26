var getName = document.getElementById('addName');
var getEmail = document.getElementById('addEmail');
var getPass = document.getElementById('addPass');
var storData = localStorage.getItem('All users')
var usersArray = JSON.parse(storData)

// Use a 'for' loop to display each object
for (var prop in usersArray) {
    getName.innerHTML = usersArray[prop].name;
    getEmail.innerHTML = usersArray[prop].email;
    getPass.innerHTML = usersArray[prop].password;
    // console.log(usersArray[prop])
}

// logout
function logout() {
    window.location.href = 'login.html'
    console.log('ready')
}