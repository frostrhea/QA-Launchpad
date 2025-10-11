// Write a script that validates login rules (for example: password must be at least 8 characters).


let password = "test_pass";

if (password.length < 8) {
        console.log('Error: Password must be at least 8 characters long.');
        process.exit(1);
}

console.log('Password is valid.');


