function emailValidation() {
  const emailField = document.getElementById('email');
  const emailConfirmField = document.getElementById('email_confirm');
  const form = document.getElementById('form');
  
  // Escuchar el evento input en el campo de confirmación del email
  emailConfirmField.addEventListener('input', () => {
      // Eliminar cualquier mensaje de error existente
      const existingError = document.querySelector('.alert');
      if (existingError) {
          existingError.remove();
      }

      // Validar si los correos electrónicos coinciden
      if (emailField.value !== emailConfirmField.value) {
          // Mostrar el mensaje de error y cambiar el estilo del campo de confirmación
          const errorElement = document.createElement('p');
          const message = document.createTextNode("El correo electrónico no coincide.");
          errorElement.appendChild(message);
          errorElement.classList.add("alert");
          emailConfirmField.parentElement.appendChild(errorElement);
          emailConfirmField.style.backgroundColor = 'rgba(230,169,171,.5)';
          emailConfirmField.style.color = '#d14539';
      } else {
          // Restablecer el estilo si los correos electrónicos coinciden
          emailConfirmField.style.backgroundColor = '';
          emailConfirmField.style.color = '';
          
          // Eliminar el mensaje de error si los correos coinciden
          const existingError = document.querySelector('.alert');
          if (existingError) {
              existingError.remove();
          }
      }
  });

  // Prevenir el envío del formulario si los correos electrónicos no coinciden
  form.addEventListener('submit', (e) => {
      if (emailField.value !== emailConfirmField.value) {
          e.preventDefault(); // Evitar el envío del formulario
      }
  });
}

window.onload = emailValidation;
