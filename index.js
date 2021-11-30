function formValidation() {
  var firstname = document.registration.firstname;
  var lastname = document.registration.lastname;
  var age = document.registration.age;
  var password = document.registration.password;
  
  var email = document.registration.email;
  
 
      if (firstname(firstname)) {
        if(lastname(lastname)){
          if (age(age)) {
            if (email(email)) {
                if (password(password)) {
                  
                    }
                  
            }
          }
        }
      }
 
  return false;
}

function firstname(firstname) {
  var letters = /^[A-Za-z]+$/;
  if (firstname.value.match(letters)) {
    return true;
  } else {
    alert("First Name must have alphabet characters only");
    uname.focus();
    return false;
  }
}

function lastname(lastname) {
  var letters = /^[A-Za-z]+$/;
  if (lastname.value.match(letters)) {
    return true;
  } else {
    alert("Last Name must have alphabet characters only");
    uname.focus();
    return false;
  }
}

function age(age, mx, my) {
  var age_len = age.value.length;
  if (age_len == 0 || age_len >= my || age_len < mx) {
    alert(
      "Age should not be empty / length be between " + mx + " to " + my
    );
    age.focus();
    return false;
  }
  return true;
}



function email(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    email.focus();
    return false;
  }
}
function password(password, mx, my) {
  var password_len = password.value.length;
  if (password_len == 0 || password_len >= my || password_len < mx) {
    alert(
      "Password should not be empty / length be between " + mx + " to " + my
    );
    password.focus();
    return false;
  }
  return true;
}