
//Informazioni utene

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function() {

//Prendere il valore input
    const userNameInput = document.getElementById("user-name");
    const userName = userNameInput.value;

    const kilometersInput = document.getElementById("kilometers");
    const kilometers = parseInt(kilometersInput.value);
    console.log(kilometers, typeof(kilometers));

    const userAgeInput = document.getElementById("user-age");
    const userAge = parseInt(userAgeInput.value);

    console.log(userName, kilometers, userAge);
     
//LOGICA

        const price = kilometers * 0.21;
        console.log(price);
        
        let message = "";
        let ticketPrice = "";
        
        if (userAge < 18) {
            const discount = price * 0.20;
            ticketPrice = discount;
            message = "biglietto scontato del 20%";
        } else if (userAge > 65) {
            const over = price * 0.40;
            ticketPrice = over;
            message = "biglietto scontato del 40%";
        } else {
            ticketPrice = price;
            message = "biglietto standard";
        }
        
        
    document.getElementById("name").innerHTML = userName;

    document.getElementById("ticket").innerHTML = message;

    const carriage = Math.floor(Math.random() * 10) + 1;
    document.getElementById("carriage").innerHTML = carriage;

    const code = Math.floor(Math.random() * 10000) + 1;
    document.getElementById("code").innerHTML = code;

    document.getElementById("price").innerHTML = ticketPrice;
})

const reset = document.getElementById("cancel");
reset.addEventListener("click", function(){
    
});



