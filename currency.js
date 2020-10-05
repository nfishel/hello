document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('form').onsubmit = function(){

        //Send a GET request to the URL
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
        //put the response into JSON format
        .then(response => response.json())
        .then(data =>{
            //Get currency from user input and convert to uppper case
            const currency = document.querySelector('#currency').value.toUpperCase();

            //Get rate from data
            const rate = data.rates[currency];

            //Check if currency is valid:
            if(rate !== undefined){
                //Display exchange on the screen
                document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} of ${currency}`;
            }else{
                //Display error message on the screen
                document.querySelector('#result').innerHTML = 'Invalid Currency.';
            }

        })
        //Catch any errors and log them to the console
        .catch(error =>{
            console.log('Error:',error);
        });
        //Prevent default form submission
        return false;
    }
});