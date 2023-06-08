// Función para mostrar un mensaje de alerta durante 3 segundos
function showAlert(message, alertType) {
    // Crea un elemento de alerta
    const alert = document.createElement('div');
    alert.className = `alert alert-${alertType}`;
    alert.innerHTML = message;
  
    // Agrega el elemento de alerta al cuerpo del documento
    document.body.appendChild(alert);
  
    // Desaparece el mensaje después de 3 segundos
    setTimeout(function() {
      alert.remove();
    }, 3000);
  }
  
  // Función para validar el formulario
  function verify(e) {
    e.preventDefault();
  
    // Expresiones regulares para la validación
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  
    // Obtiene los valores de los campos del formulario
    const name = document.getElementById('getName').value;
    const email = document.getElementById('getEmail').value;
    const password = document.getElementById('pass').value;
    const confirmPassword = document.getElementById('pass2').value;
  
    // Verifica que todos los campos estén completos
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      showAlert('Rellena todos los campos', 'danger');
      return;
    }
  
    // Verifica la validez del correo electrónico
    if (!email.match(emailRegex)) {
      showAlert('Correo incorrecto', 'danger');
      return;
    }
  
    // Verifica que las contraseñas coincidan
    if (password !== confirmPassword) {
      showAlert('Las contraseñas tienen que ser iguales', 'danger');
      return;
    }
  
    // Verifica la validez de la contraseña
    if (!password.match(passwordRegex)) {
      showAlert('La contraseña debe contener al menos una letra, un número y tener 6 caracteres como mínimo', 'danger');
      return;
    }
  
    // Si se superan todas las validaciones, muestra el mensaje de éxito y redirige
    showAlert('Usuario creado correctamente', 'success');
    setTimeout(function() {
      window.location.href = 'usuarios.html';
    }, 3000);
  }
  
  // Asigna la función verify al evento submit del formulario
  document.getElementById('myForm').addEventListener('submit', verify);
  