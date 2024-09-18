// Event Handeler added
document.getElementById('login-btn').addEventListener('click',function(event){
    // Prevent reloading browser 
    event.preventDefault(); 

    // get phone number from input field 
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
})