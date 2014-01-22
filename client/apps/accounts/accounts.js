

/*******************************************
* 
* Accounts
*
*******************************************/


if (Meteor.isClient) {

    // Login Helpers
    Helpers("login", {});

    // login rendered
    Rendered("login", function(addClass) {
        addClass("account-page");
    });

    // login events
    Template.login.events({
        'submit #LoginForm' : function(e, t){
            e.preventDefault();
            var email = trimInput(t.find('#email-login').value.toLowerCase()),
                password = t.find('#password-login').value;

            if (isNotEmpty(email) && isNotEmpty(password)) {
                Meteor.loginWithPassword(email, password, function(err ){
                    if (err) {
                        error("The email or password was incorrect."); 
                        return;    
                    }

                    // login then 
                });
            }
        }
    });


    // Signup helpers
    Helpers("signup", {});


    // Rendered signup
    Rendered("signup", function(addClass) {
        addClass("account-page");
    });


    // signup events
    Template.signup.events({
        'submit #SignUpForm' : function(e, t) {
            e.preventDefault();
            var fullname = trimInput(t.find('#display-name-create').value.toLowerCase()),
                email = trimInput(t.find('#email-create').value.toLowerCase()),
                password = t.find('#password-create').value;

            if (isNotEmpty(email) && isNotEmpty(email) && 
                isNotEmpty(password) && isEmail(email) && 
                isValidPassword(password)) {

                removeError(); 
                Accounts.createUser({name: fullname, email: email, password : password}, function(err) { 
              
                   // redirect 
                });
            }
             
        }
    });

    Template.forgot.helpers({});
    Rendered("forgot", function(addClass) {
        addClass("account-page");
    });
}
