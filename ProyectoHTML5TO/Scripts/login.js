document.addEventListener('DOMContentLoaded', () => {
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const loginMessage = document.getElementById('loginMessage');
loginForm.addEventListener('submit', (event) => {
event.preventDefault();
    
usernameError.textContent = '';
passwordError.textContent = '';
loginMessage.textContent = '';
loginMessage.classList.remove('success-message');
    
let isValid = true;
const correctUsername = '1';
const correctPassword = '1';
if (usernameInput.value.trim() === '') {
usernameError.textContent = 'El usuario es obligatorio.';
isValid = false;
}
    
if (passwordInput.value.trim() === '') {
passwordError.textContent = 'La contraseña es obligatoria.';
isValid = false;
}
      
if (isValid) {   
 if (usernameInput.value === correctUsername && passwordInput.value === correctPassword) {
loginMessage.textContent = '¡Inicio de sesión exitoso! Redirigiendo...';
loginMessage.classList.add('success-message');
setTimeout(() => {
window.location.href = '../Index/principal.html';
    }, 1500); // 1.5 segundos de retraso
    } else {
loginMessage.textContent = 'Usuario o contraseña incorrectos. Inténtalo de nuevo.';
loginMessage.classList.remove('success-message');
    }
        }
    });
});