// Event Handeler added
document.getElementById('login-btn').addEventListener('click',function(event){
    // Prevent reloading browser 
    event.preventDefault(); 

    // get phone number from input field 
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // Check phone or pin

    if(phoneNumber === '12345' && pinNumber === '1234'){
        window.location.href = 'payoo_home.html'
    }
    else{
        alert("You are not allowed")
    }
})