// Add money eventListener
document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault()
    
    const inputAmount = document.getElementById('input-amount').value;
    const inputPin = document.getElementById('input-pin').value;
    
    if(inputPin === "1234"){
        const amount = document.getElementById('recent-amount').innerText;

        const amountNumber = parseFloat(inputAmount);
        const firstAmountNumber = parseFloat(amount);

        const totalAmount = amountNumber + firstAmountNumber;

        document.getElementById('recent-amount').innerText = totalAmount;
        alert('added '+ amountNumber + " taka")

        
    }
    else{
        alert("pin is incorrect! please try again.")
    }
})

// Cash Out evenListener
document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault()

    const inputAmount = document.getElementById('input-cashOut-amount').value;
    const inputPin = document.getElementById('input-cashOut-pin').value;
    
    if(inputPin === "1234"){
        const amount = document.getElementById('recent-amount').innerText;

        const amountNumber = parseFloat(inputAmount);
        const firstAmountNumber = parseFloat(amount);

        const totalAmount = firstAmountNumber - amountNumber;

        document.getElementById('recent-amount').innerText = totalAmount;
        alert('Cash Out '+ amountNumber + " taka")

        
    }
    else{
        alert("pin is incorrect! please try again.")
    }
})

// toggle event listener for add money button and cash out buttton 
document.getElementById('cash-out-button').addEventListener('click',function(){
    document.getElementById('cash-out-container').classList.remove('hidden');
    document.getElementById('add-money-container').classList.add('hidden');

})

document.getElementById('add-money-button').addEventListener('click',function(){
    document.getElementById('cash-out-container').classList.add('hidden');
    document.getElementById('add-money-container').classList.remove('hidden');
})