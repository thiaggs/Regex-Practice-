document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('keydown', formatPhone);
document.getElementById('phone').addEventListener('blur', validatePhone);


function validateName(){
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;

    if(!re.test(name.value)){

        name.classList.add('is-invalid');
    }else {
        name.classList.remove('is-invalid');
    }

} 

function validateZip(){

    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}-[0-9]{3}$/;

    if(!re.test(zip.value)){

        zip.classList.add('is-invalid');
    }else {
        zip.classList.remove('is-invalid');
    }
} 

function validateEmail(){

    const email = document.getElementById('email');
    const re = /^[a-zA-Z0-9_\-\.]+@[a-z]+\.[a-z]{2,5}(\.[a-z]{2,5})?$/;

    if(!re.test(email.value)){

        email.classList.add('is-invalid');
    }else {
        email.classList.remove('is-invalid');
    }

} 

function formatPhone(event){
    const phone = document.getElementById('phone');
    if(event.keyCode === 8){
        phone.value = phone.value.slice(0);
    }else if(phone.value.length === 2){
        phone.value = `(${phone.value})`;
    }else if(phone.value.length === 8){
        phone.value = `${phone.value}-`;
    }else if(phone.value.length === 13){
        if(phone.value.charAt(8) === '-'){
            phone.value = phone.value.replace(phone.value.charAt(8), phone.value.charAt(9));
        }
        const half = phone.value.substr(0,9);
        const sHalf = phone.value.substr(10,);
        phone.value = `${half}-${sHalf}`;

    }


}
function validatePhone(){

    const phone = document.getElementById('phone');
    const re = /^\([0-9]{2}\)9?[0-9]{4}(\-)[0-9]{4}$/;

    if(!re.test(phone.value)){

        phone.classList.add('is-invalid');
    }else {
        phone.classList.remove('is-invalid');
    }

} 