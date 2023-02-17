function displayError(){
    const error = document.querySelector('h6');
    const password = document.querySelector('#password');
    const passwordConfirm = document.querySelector('#password-confirm');
    const button = document.querySelector('button')
    let text = 'Passwords do not match';

    if(password.value != passwordConfirm.value){
        error.textContent = text;
        button.type = 'button';
    }else{
        error.textContent ='';
        button.type = 'submit';
    }
}
