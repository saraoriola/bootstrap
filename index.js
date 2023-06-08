const getName = document.querySelector('#nombreInput');
const getEmail = document.querySelector('#emailInput');
const pass = document.querySelector('#inputPass');
const pass2 = document.querySelector('#inputPass2');
const button = document.querySelector('#submit');
const fail = document.querySelector('.error');
const successAlert = document.querySelector('.alert-success');
const dangerAlert = document.querySelector('.alert-danger');
const informacion = localStorage.setItem(getName.value, getEmail.value);
const pintar = document.querySelector('.card-text');

//COMPROBAMOS QUE LA INFORMACION SEA CORRECTA
const verify = (e) => {
    e.preventDefault();
    const password = /^[a-zA-Z]\w{3,14}$/;
    const email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    
    if (getName.value === '' || getEmail.value === '' || pass.value === '' || pass2.value === '') {
        fail.innerHTML = 'Rellena todos los campos';
        dangerAlert.classList.remove('hide');
    } else if (!pass.value.match(password)) {
        fail.innerHTML = 'La contraseña debe contener un número, una letra y tener al menos 6 caracteres';
        dangerAlert.classList.remove('hide');
    } else if (!getEmail.value.match(email)) {
        fail.innerHTML = 'Correo incorrecto';
        dangerAlert.classList.remove('hide');
    } else if (pass.value !== pass2.value) {
        fail.innerHTML = 'Las contraseñas deben ser iguales';
        dangerAlert.classList.remove('hide');
    } else {
        successAlert.classList.remove('hide');
        setTimeout(() => {
            window.location.href = "user.html";
        }, 3000);
    }
    
    setTimeout(() => {
        fail.innerHTML = "";
        dangerAlert.classList.add('hide');
    }, 3000);
};

//LE DAMOS LA FUNCION AL BOTON SUBMIT
button.addEventListener('click', verify);

const dibujar = () => {
    pintar.innerHTML = `Nombre: ${getName.value} Email: ${getEmail.value}`;
};

