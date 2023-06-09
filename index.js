const getName = document.querySelector('#nombreInput');
const getEmail = document.querySelector('#emailInput');
const pass = document.querySelector('#inputPass');
const pass2 = document.querySelector('#inputPass2');
const button = document.querySelector('#submit');
const fail = document.querySelector('.error');
const successAlert = document.querySelector('.alert-success');
const dangerAlert = document.querySelector('.alert-danger');
const informacion = JSON.parse(localStorage.getItem("users"));
const pintar = document.querySelector('#cardUser');

const users=informacion ||[]
//COMPROBAMOS QUE LA INFORMACION SEA CORRECTA
const verify = (e) => {
    e.preventDefault();
    const password = /^[a-zA-Z]\w{3,14}$/;
    const email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const user={
        name:getName.value,
        email:getEmail.value,
        pass:pass.value
    }
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
        users.push(user)
        localStorage.setItem("users",JSON.stringify(users))
        paintCard()
        successAlert.classList.remove('d-none');
        setTimeout(() => {
            window.location.href = "user.html";
            putInCard()
        }, 3000);
    }
    
    setTimeout(() => {
        fail.innerHTML = "";
        dangerAlert.classList.add('hide');
    }, 3000);
};

//LE DAMOS LA FUNCION AL BOTON SUBMIT
button?.addEventListener('click', verify);



const paintCard =() => {
    const users = JSON.parse(localStorage.getItem("users"))
    if(users && pintar){
        for (const user of users) {
                console.log(pintar)
                
                pintar.innerHTML += `
                <div class="card-overlay">
          <div class="card text-center">
            <div class="card-header">
            ${user.name}
            </div>
            <div class="card-body">
              <h5 class="card-title" ></h5>
              <p class="card-text" id="cardEmail"> ${user.email}</p>
              <a href="/menu/catalogo.html" class="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>`
            }
    }
    
}
paintCard()