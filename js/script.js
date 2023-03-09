
//Informazioni utene

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function() {

//Prendere il valore input
    const userNameInput = document.getElementById("user-name");
    const userName = userNameInput.value;

    const kilometersInput = document.getElementById("kilometers");
    const kilometers = kilometersInput.value;

    const userAgeInput = document.getElementById("user-age");
    const userAge = userAgeInput.value;
    console.log(userNameInput, kilometersInput, userAgeInput);

//Stampare il risultato

    result.innerHTML = `Ti chiami ${userName} vuoi percorrere ${kilometers} e sei ${userAge}`

})

