console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageError = document.querySelector('#message-3');


weatherForm.addEventListener('submit', (e) => {

    e.preventDefault();
    const location = search.value;
    messageError.textContent = '';
    messageOne.textContent = "searching......";
    
    fetch('http://localhost:3000/weather?address='+location).then((response) => {

    response.json().then((data) => {

        if(data.error){

            messageOne.textContent = "";
            messageTwo.textContent = "";
            return  messageError.textContent = data.error;

        }
    
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecastData
       
        
    })

})

})