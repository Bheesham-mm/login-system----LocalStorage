// Get input fields
var userName = document.getElementById('username');
var userEmail = document.getElementById('email');
var userPassword = document.getElementById('password');

// Retrieve any existing data from localStorage, or initialize an empty array if none exists
var users_data = JSON.parse(localStorage.getItem('All users')) || [];

// Main function to submit data
function submitData() {
    // Validation
    if (userName.value === '') {
        document.getElementById('paraError').innerHTML = 'user name empty';
    } else if (userEmail.value === '') {
        document.getElementById('paraError').innerHTML = '';
        document.getElementById('paraError1').innerHTML = 'user email empty';
    } else if (userPassword.value === '') {
        document.getElementById('paraError').innerHTML = '';
        document.getElementById('paraError1').innerHTML = '';
        document.getElementById('paraError2').innerHTML = 'user password empty';
    } else {
        // Check if the email is already registered
        var existingUser = users_data.find(function (user) {
            return user.email === userEmail.value;
        });

        if (existingUser) {
            // Show alert if the email is already registered
            alert('Your account has already been registered.');
        } else {
            // Add new user data to the array
            users_data.push({ name: userName.value, email: userEmail.value, password: userPassword.value });

            // Update localStorage with the new data
            localStorage.setItem('All users', JSON.stringify(users_data));

            // Clear the input fields after submission
            userName.value = '';
            userEmail.value = '';
            userPassword.value = '';

            // Redirect to login page
            window.location.href = '././index.html';
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