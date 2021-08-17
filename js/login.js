document.getElementById('login-submit').addEventListener('click', function() { // call dom for submit button
    const emailField = document.getElementById('user-email'); //call email field
    const userEmail = emailField.value; // find email field value
    console.log(userEmail); // output value to console
    emailField.value = ''; // reset email field
    //get user password\

    const passwordField = document.getElementById('user-password'); // call pass field
    const userPassword = passwordField.value; // call email field value
    console.log(userPassword); // output value to console
    passwordField.value = ''; // reset value
    if (userEmail == 's@baap.com' && userPassword == 's') { // validate user and pass using if condition
        console.log('Valid User'); // if matched console text
        window.location.href = 'banking.html';  // redirect to another html page
    }
    else{
        console.log('Invalid User'); // console msg if wrong input
    }

    
})

// Handle deposit button event
