
function validate(userInput) {
  if (userInput === "Bobby") {
    window.alert("\"Bobby\" is already taken, please pick a different one");
    return false;
  } else if (userInput.length >20) {
    window.alert("This cannot be longer than 20 charactors");
    return false;
  } else if (!userInput) {
    window.alert("Looks like you forgot this one");
    return false;
  } else {
    return true;
  }

  // userInput is the message that is entered in the text field
  // use window.alert("Message") to output errors
  // return true when no error occurs
  // return false if an error occurs
  //Check that the field userInput is filled
}

// -------------------------------------------------------------------------------
// DON'T CHANGE ANYTHING BELOW THIS LINE!
// -------------------------------------------------------------------------------



function submitFunction() {
  validate(document.getElementById("emailInput").value);
}
 //--------------------------------------


function validate(userInput) {
    if (!userInput) {
      window.alert("The text-input cannot be empty");
      return false;
  } else if (userInput.length > 20) {
      window.alert("Username cannot be longer than 20 characters");
      return false;
  } else if (userInput === "Bobby") {
      window.alert("Username \"Bobby\" is already taken");
      return false;
  } else {
      return true;
  }

  // userInput is the message that is entered in the text field
  // use window.alert("Message") to output errors
  // return true when no error occurs
  // return false if an error occurs

  //Check that the field userInput is filled

}

// -------------------------------------------------------------------------------
// DON'T CHANGE ANYTHING BELOW THIS LINE!
// -------------------------------------------------------------------------------



function submitFunction() {
  validate(document.getElementById("emailInput").value);
}
