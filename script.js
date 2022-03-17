$(document).ready(function () {
    var accounts = [
        {user1, pass1}
    ]
    $('#user').keyup(function () {
        var email = $('#user').val();
        $.get('/getCheckEmail', {email: email}, function (result) {
            if(result.email == email) {
                $('#email').css('background-color', 'red');
                $('#submit').prop('disabled', true);
                $('#message').html("Email already in use.");
            }
            else {
                $('#email').css('background-color', '#E3E3E3');
                $('#submit').prop('disabled', false);
                $('#message').html("");
            }
        });
    });
    $('#username').keyup(function () {
        var username = $('#username').val();
        $.get('/getCheckUsername', {username: username}, function (result) {
            if(result.username == username) {
                $('#username').css('background-color', 'red');
                $('#submit').prop('disabled', true);
                $('#message').html("Username already in use.");
            }
            else {
                $('#username').css('background-color', '#E3E3E3');
                $('#submit').prop('disabled', false);
                $('#message').html("");
            }
        });
    });
    $('#password, #confirm_password').on('keyup', function () {
        if ($('#password').val() == $('#confirm_password').val()) {
            $('#message').html("");
        } else 
            $('#message').html('Passwords Not Matching.').css('color', 'red');
    });
});

function validateEmail(emailField){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField.value) == false) 
        {
            alert('Invalid Email Address');
            return false;
        }

        return true;

}