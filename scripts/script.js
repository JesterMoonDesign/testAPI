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

        const {email, name, country, phone, pass, currency} = form;

        const values = {
            email: email.value,
            name: name.value,
            country: country.value,
            phone: phone.value,
            pass: pass.value,
            currency: currency.value
        };
        JSON.stringify(values)
        console.log(values)
        console.log(JSON.stringify(values))
    }
form.addEventListener('submit', retriveFormaValue)

