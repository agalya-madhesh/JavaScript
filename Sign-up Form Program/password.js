function validateForm() {
    var password = document.getElementById("password").value;
    var passwordError = document.getElementById("passwordError");
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumber = /\d/.test(password);
    var hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    if (password.length < 8 || !hasUpperCase || !hasLowerCase || !hasNumber || !hasSymbol) {
      passwordError.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
      return false;
    } else {
      passwordError.textContent = "";
      return true;
    }
  }
  
  document.getElementById('togglePassword').addEventListener('click', function () {
    var passwordInput = document.getElementById('password');
    var icon = document.getElementById('togglePassword');
    
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  });
  