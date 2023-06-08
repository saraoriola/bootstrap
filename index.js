const getName = document.querySelector('#nombreInput')
const getEmail = document.querySelector('#emailInput')
const pass = document.querySelector('#inputPass')
const pass2 = document.querySelector('#inputPass2')
const button = document.querySelector('#submit')
const fail = document.querySelector('.error')
const correct = document.querySelector(".alert")
const informacion = localStorage.setItem(getName.value, getEmail.value)
const pintar = document.querySelector('.card-text')

//COMPROBAMOS QUE LA INFORMACION SEA CORRECTA
const verify = (e) => {
    e.preventDefault()
    const password = /^^[a-zA-Z]\w{3,14}$/;
    const email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if(getName.value === '' || getEmail.value === ''|| pass.value == '' || pass2.value == '') {
      fail.innerHTML = 'Rellena todos los campos'
      }else if(!pass.value.match(password)) {
      fail.innerHTML = 'La contraseña debe contener un mumero, letra y tener 6 caracteres como minimo'
      }else if(!getEmail.value.match(email)) {
        fail.innerHTML = 'Correo incorrecto'
      }else if(pass.value != pass2.value) {
          fail.innerHTML = 'Las contraseñas tienen que ser iguales'
      }else {                    

        
      
        setTimeout(() => {
        window.location.href = "user.html";
      }, 3000)
      }
      setTimeout(() => {
        fail.innerHTML=""
       }, 3000);
    }
    //LE DAMOS LA FUNCION AL BOTON SUBMIT
    submit.addEventListener('click', verify)

    const dibujar = () => {
    pintar.innerHTML = `Nombre: ${getName.value} Email: ${getEmail.value}`}