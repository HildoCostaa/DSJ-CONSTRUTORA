/*
==========================================

FORM

==========================================
*/

function initForm(){

    const form = document.querySelector("#contact-form");

    if(!form) return;

    form.addEventListener("submit",(event)=>{

        event.preventDefault();

        console.log("Formulário enviado.");

    });

}

initForm();