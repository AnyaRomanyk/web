document.getElementById('toSignUp').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
  });
  
  document.getElementById('toLogin').addEventListener('click', function() {
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  });
  