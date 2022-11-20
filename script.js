

const pwform = document.querySelector('#password');
const pwformconfirm = document.querySelector('#password-confirm');
const wrongPassword = document.querySelector('.wrong-password');

pwform.addEventListener('focusout', e => {
    if (pwformconfirm.value === ""){

    }else{
        if(pwform.value === pwformconfirm.value){
            wrongPassword.classList.add('hidden');
        }else{
            wrongPassword.classList.remove('hidden');
        }
    }
});

pwformconfirm.addEventListener('focusout', e => {
    if (pwformconfirm.value === ""){

    }else{
        if(pwform.value === pwformconfirm.value){
            wrongPassword.classList.add('hidden');
        }else{
            wrongPassword.classList.remove('hidden');
        }
    }
})