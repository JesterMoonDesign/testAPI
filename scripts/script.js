"use strict";													
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {

    function scroll (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        const anchorTarget = document.querySelector('' + blockID);

        anchorTarget.scrollIntoView({
            block: "center",
            behavior: "smooth"
        });
        //window.location.href.replace(blockID, '');
    }
    anchor.addEventListener("click", scroll);
}



const {form} = document.forms;

function retriveFormaValue(event) {
    event.preventDefault();
    
    let formBlock = document.getElementById('registerFormBlock');
    let formSubmitAlert = document.getElementById('formSubmitAlert');

    const {email, firstname, lastname, country, phone, pass, currency} = form;

    const values = {
        email: email.value,
        firstname: firstname.value,
        lastname: lastname.value,
        country: country.value,
        phone: phone.value,
        pass: pass.value,
        currency: currency.value
    };
    
    if (values.email.length <= 1 || values.firstname.length <= 1 || values.lastname.length <= 1 || values.phone.length <= 0 || values.pass.length <= 0) {
        alert('Заполните все поля');
        return false;}
        if (values.email.indexOf("@") < 0 || values.email.indexOf(".") < 0){
            alert('Не правильно введенный email')
        }
    else {

    formBlock.style.visibility = "hidden";
    formSubmitAlert.classList.add("active");

    JSON.stringify(values)

    fetch('https://63d57925dc3c55baf428bf36.mockapi.io/database/database', {

    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(values)
    })
    .then(response => response.json())
    // .then(response => console.log(JSON.stringify(response)))
    }
}
form.addEventListener('submit', retriveFormaValue)
