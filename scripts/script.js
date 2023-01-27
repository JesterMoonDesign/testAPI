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
        fetch('https://api.morganfinance.io/affiliates/leads', {

        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Autorization': 'eyJhbGciOiJIUzI1NiJ9.eyJhZmZpbGlhdGVfaWQiOjIzLCJjcmVhdGVkIjoxNjc0NDczNjg0LCJleHBpcmF0aW9uIjowLCJicmFuZCI6ImRlbHRhaW52ZXN0bWVudCIsInJpZ2h0cyI6WyJhZmZpbGlhdGUiXX0.WvhZmP3EOGPpAxHaJ-Ci56wAJX9E0uW47_t3h6DiV3w'
        },
        body: JSON.stringify(values)
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
    }

form.addEventListener('submit', retriveFormaValue)