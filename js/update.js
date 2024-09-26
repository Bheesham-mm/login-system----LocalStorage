// get input Feilds 
var username = document.getElementById('name');
var surname = document.getElementById('surname');
var mobileNum = document.getElementById('mobileNum');
var address = document.getElementById('address');
var postCode = document.getElementById('PostCode');
var stateRegion = document.getElementById('stateRegion');
var email_Id = document.getElementById('email_Id');
var pass = document.getElementById('Pass');

// store data
var storData = localStorage.getItem('All users');
var usersArray = JSON.parse(storData);

// Validation function
function validate() {
    var valid = true;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format
    var mobilePattern = /^[0-9]{11}$/; // 10-digit mobile number

    if (username.value === '') {
        document.getElementById('nameErorr').innerHTML = 'username empty? enter your name'
        document.getElementById('surnameError').innerHTML = '';
        document.getElementById('mobileNumError').innerHTML = '';

        valid = false;
    } else if (surname.value === '') {
        document.getElementById('nameErorr').innerHTML = '';
        document.getElementById('surnameError').innerHTML = 'surname empty? enter your surname'
        document.getElementById('mobileNumError').innerHTML = '';
        valid = false;
    } else if (mobileNum.value === '' || !mobilePattern.test(mobileNum.value)) {
        document.getElementById('nameErorr').innerHTML = '';
        document.getElementById('surnameError').innerHTML = ''
        document.getElementById('mobileNumError').innerHTML = 'Valid 11-digit mobile number is required. Example 03xxxxxxxxx'
        valid = false;
    } else if (address.value === '') {
        document.getElementById('nameErorr').innerHTML = '';
        document.getElementById('surnameError').innerHTML = ''
        document.getElementById('mobileNumError').innerHTML = ''
        document.getElementById('addressError').innerHTML = 'Address is required.'
        valid = false;
    } else if (postCode.value === '') {
        document.getElementById('nameErorr').innerHTML = '';
        document.getElementById('surnameError').innerHTML = ''
        document.getElementById('mobileNumError').innerHTML = ''
        document.getElementById('addressError').innerHTML = ''
        document.getElementById('postCodeError').innerHTML = 'Postcode is required.'
        valid = false;
    } else if (stateRegion.value === '') {
        document.getElementById('nameErorr').innerHTML = '';
        document.getElementById('surnameError').innerHTML = ''
        document.getElementById('mobileNumError').innerHTML = ''
        document.getElementById('addressError').innerHTML = ''
        document.getElementById('postCodeError').innerHTML = ''
        document.getElementById('stateError').innerHTML = 'State/Region is required.'
        valid = false;
    } else if (email_Id.value === '' || !emailPattern.test(email_Id.value)) {
        document.getElementById('nameErorr').innerHTML = '';
        document.getElementById('surnameError').innerHTML = ''
        document.getElementById('mobileNumError').innerHTML = ''
        document.getElementById('addressError').innerHTML = ''
        document.getElementById('postCodeError').innerHTML = ''
        document.getElementById('stateError').innerHTML = ''
        document.getElementById('emailError').innerHTML = 'Valid email address is required.'
        valid = false;
    } else if (pass.value === '') {
        document.getElementById('nameErorr').innerHTML = '';
        document.getElementById('surnameError').innerHTML = ''
        document.getElementById('mobileNumError').innerHTML = ''
        document.getElementById('addressError').innerHTML = ''
        document.getElementById('postCodeError').innerHTML = ''
        document.getElementById('stateError').innerHTML = ''
        document.getElementById('emailError').innerHTML = ''
        document.getElementById('PassError').innerHTML = 'Password is required.'
        valid = false;
    }

    return valid;
}

// update function with validation
function update() {
    if (validate()) {
        var updateData = [{
            name: username.value, surname: surname.value, mobileNum: mobileNum.value, address: address.value, postcode: postCode.value, email: email_Id.value, password: pass.value, state: stateRegion.value
        }];
        localStorage.setItem('All users', JSON.stringify(updateData));

        if (updateData) {
            window.location.href = './profile.html';
        }
    }
}

// Use a 'for' loop to display each object
for (var prop in usersArray) {
    document.getElementById('getName').innerHTML = usersArray[prop].name;
    document.getElementById('getEmail').innerHTML = usersArray[prop].email;
    username.value = usersArray[prop].name;
    email_Id.value = usersArray[prop].email;
    mobileNum.value = usersArray[prop].mobileNum;
    address.value = usersArray[prop].address;
    postCode.value = usersArray[prop].postcode;
    surname.value = usersArray[prop].surname;
    stateRegion.value = usersArray[prop].state;
    pass.value = usersArray[prop].password;
}
// logout
function logout() {
    window.location.href = './index.html'
    console.log('ready')
}
// var usersArray = JSON.parse(storData)
// console.log(usersArray)
function reset() {
    username.value = '';
    surname.value = '';
    mobileNum.value = '';
    address.value = '';
    postCode.value = '';
    cuntry.value = '';
    stateRegion.value = '';
    email_Id.value = '';
    pass.value = '';
}