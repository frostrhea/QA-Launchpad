 /* Task: Create a reusable login function that:

  a. Takes username and password as input
  b. Validates login rules
  c. Returns success or error messages
*/

function validateLogin(username, password) {
    if (!username || !password) {
        console.log('Error: Username and password are required.');
        return 'Login Failed';
    }       
    if (password.length < 8) {
        console.log('Error: Password must be at least 8 characters long.');
        return 'Login Failed';
    }
    if (!/[A-Z]/.test(password)) {
        console.log("Password does not contain an uppercase letter.");
        return 'Login Failed';
    }
    if (!/[0-9]/.test(password)) {
        console.log("Password does not contain a number.");
        return 'Login Failed';
    }

    const specialChars = /[!@#$%^*&*()_=+;:'",.<>?/~`'-]/
    if (!specialChars.test(password)) {
        console.log("Password does not contain a special character.");
        return 'Login Failed';
    }
    

    console.log('Login successful!');
    return 'Success';
}


let username = "test_user";
let password = "test_Pass1";

validateLogin(username, password);
