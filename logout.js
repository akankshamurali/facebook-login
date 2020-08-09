function logOutWithFacebook() { // The callback function
    Parse.User.logOut(); // Delete the current session for the user
    alert('User logged out of Facebook!');
    window.location.replace('http://js-fb-login.back4app.io'); // Redirects the user to another webpage
}
