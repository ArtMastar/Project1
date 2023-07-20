function validateForm(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorDiv = document.getElementById('error');
    errorDiv.innerHTML ='';
    if (name === ''){
        showError('Name is required');
        return false;
    }
    if (email === ''){
        showError('Email is required');
        return false;
    }
    if (password === ''){
        showError('Password is required');
        return false;
    }
    return true;
}
 
function showError(message){
    var errorDiv = document.getElementById('error');
    var errorParagraph = document.createElement('p');
    errorParagraph.textContent = message;
    errorDiv.appendChild(errorParagraph);
}

var form = document.getElementById('myForm');
form.addEventListener('submit', function(event){
    event.preventDefault();
    if (validateForm()){
        form.onsubmit();
    }
});