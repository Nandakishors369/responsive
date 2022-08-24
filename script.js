var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(!name){

        nameError.innerHTML = 'Name is required';
        return false;

    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){

        nameError.innerHTML = 'Write full name';
        return false;
    }
    else{
    nameError.innerHTML = '' ;
    return true ;
    }
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone No. is required';
        return false;
    }

    if(phone.length !== 10){

        phoneError.innerHTML = 'Ph No. should be ten digits'
        return false;
    }
    
    if(phone.match(/^[789]\{9}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
    }

   

        phoneError.innerHTML = '';
        return true;
    

}

function validateEmail(){

    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){

        emailError.innerHTML = 'Email Invalid'
        return false;

    }

    emailError.innerHTML = '';
    return true
}

function validateMessage(){

    var message = document.getElementById('contact-message').value;
    var required = 15 ;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML = '';
    return true

}
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage() ){
        submitError.style.direction = 'block';
        submitError.innerHTML = 'Please Fix the errors to submit'
        setTimeout(function(){submitError.style.display = 'none ';} , 3000)
        return false;
    }
   
}