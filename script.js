function showLogin() {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('registerForms').style.display = 'none';
  document.getElementById('progress').style.display = 'none';
}

function showRegister() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForms').style.display = 'block';
  document.getElementById('progress').style.display = 'flex';
  goToStep(1);
}

function goToStep(stepNumber) {
  document.querySelectorAll('.form-step').forEach(form => {
    form.style.display = 'none';
  });
  document.getElementById('step' + stepNumber).style.display = 'block';

  for (let i = 1; i <= 3; i++) {
    let circle = document.getElementById('circle' + i);
    if (i <= stepNumber) {
      circle.classList.remove('inactive');
      circle.style.backgroundColor = '#0a0f1a';
    } else {
      circle.classList.add('inactive');
      circle.style.backgroundColor = '#ccc';
    }
  }
}

function login(event) {
  event.preventDefault();
  alert("✅ Logged in successfully!");
}

function submitForm(event) {
  event.preventDefault();
  alert("🎉 Registration submitted successfully!");
  setTimeout(function() {
    window.location.href = "index.html";
  }, 1000);
}

// Show login form by default
showLogin();
