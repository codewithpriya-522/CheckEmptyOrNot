function validateForm() {
    var userName = document.forms["form"]["EnterUserName"].value;
    var password = document.forms["form"]["EnterPassword"].value;
    if (userName == "" || userName == null) {
      alert("UserName must be filled out");
      return false;
    }
    else if (password == "" || password == null) {
        alert("Password must be filled out");
        return false;
      }
  }