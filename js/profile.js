// Get user input update
var usrName = document.getElementById('getName');
var getEmail = document.getElementById('getEmail');
var getProfileName = document.getElementById('getNameProfile');
var getProfileEmail = document.getElementById('getEmailProfile');
var getSurname = document.getElementById('surname');
var getMobileNumber = document.getElementById('mNumber');
var getAddress = document.getElementById('address');
var getPostCode = document.getElementById('PostCode');
var getState = document.getElementById('state');
var getUserPass = document.getElementById('userPass');

// Get localStorage Data
var storData = localStorage.getItem('All users');

// check data and update data
if (storData) {
    var usersArray = JSON.parse(storData);

    // Update data
    for (var prop in usersArray) {
        usrName.innerHTML = usersArray[prop].name || 'No Name';
        getEmail.innerHTML = usersArray[prop].email || 'No Email';
        getProfileName.innerHTML = usersArray[prop].name || 'No Name';
        getProfileEmail.innerHTML = usersArray[prop].email || 'No Email';
        getSurname.innerHTML = usersArray[prop].surname || 'No Surname';
        getMobileNumber.innerHTML = usersArray[prop].mobileNum || 'No Mobile Number';
        getAddress.innerHTML = usersArray[prop].address || 'No Address';
        getPostCode.innerHTML = usersArray[prop].postcode || 'No Postcode';
        getState.innerHTML = usersArray[prop].state || 'No State';
        getUserPass.innerHTML = usersArray[prop].password || 'No Password';
        console.log(usersArray[prop]);
    }
} else {
    usrName.innerHTML = 'Data is not found';
    getEmail.innerHTML = 'Data is not found';
    getProfileName.innerHTML = 'Data is not found';
    getProfileEmail.innerHTML = 'Data is not found';
    getSurname.innerHTML = 'Data is not found';
    getMobileNumber.innerHTML = 'Data is not found';
    getAddress.innerHTML = 'Data is not found';
    getPostCode.innerHTML = 'Data is not found';
    getState.innerHTML = 'Data is not found';
    getUserPass.innerHTML = 'Data is not found';
}


// logout
function logout() {
    window.location.href = 'login.html'
    console.log('ready')
}
// var usersArray = JSON.parse(storData)
console.log(usersArray)
function edit() {
    window.location.href = './update.html'
}