// getting the buttons from html
const button = document.getElementById("button");
const buttonOk = document.getElementById("id_button_ok");

//function to validate
function validacao (){
    //removing class from elements as soon as the button is clicked
    document.getElementById("feedback").classList.remove("visi_sucesso");
    document.getElementById("id_button_ok").classList.remove("button_ok");

    //getting input values 
    let email = document.getElementById("email").value;
    let msg = document.getElementById("message").value;
    let name = document.getElementById("name").value;

    //checking if there is more than one arroba
    let cantArroba = 0;
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@'){
            cantArroba += 1;
        }
    }
    
    //checking if there is space   
    let temEspaico;
    if (email.includes(' ')){
        temEspacio = true;
    } else {
        temEspacio = false;
    }

    //checking if it has any of the special characters below
    const caractEsp = '!#$%&*()}{<>:;?/+=,`~^|"¨_°ª§º/¬-' + "'";
    let temCaractEspc = 0;

    for (let i = 0; i < email.length; i++){
        if (caractEsp.includes(email[i])){
            temCaractEspc += 1;
        }
    }
    
    //checking if there is something in the name input
    if (name == false){
        document.getElementById("feedback").classList.add("visi");
        const feedback = "Error sending: Enter your name"; 
        document.getElementById("feedback").innerHTML = feedback;
        document.getElementById("id_button_ok").classList.add
        ("button_ok_error");  
        return false;
    }
    
    //checking the conditions to be valid or not
    if (email.includes('@')
        && email.includes('.')
        && email[email.length-1] !== '@'
        && email[0] !== '@'
        && email[0] !== '.'
        && email[email.length-1] !== '.'
        && email[email.indexOf('@') + 1] !== '.'
        && email[email.indexOf('@') - 1] !== '.'
        && cantArroba === 1
        && !temEspacio
        && temCaractEspc === 0 ) {
        
        //if the email is valid, now I need to know if there is a message
        if (msg == false){
            document.getElementById("feedback").classList.add("visi");
            const feedback = "Error sending: Enter a message"; 
            document.getElementById("feedback").innerHTML = feedback;
            document.getElementById("id_button_ok").classList.add
            ("button_ok_error");  
            
            return false;
        }
        var user = document.getElementById('name').value;
        sessionStorage.name = user;       
    }

    else { 
        //If the email is not valid I add these classes 
        document.getElementById("feedback").classList.add("visi");
        const feedback = "Error sending: Invalid email address"; 
        document.getElementById("feedback").innerHTML = feedback; 

        document.getElementById("id_button_ok").classList.add("button_ok_error");
    }
}

//function to remove text when clicking ok
function removeOK(event){
    event.preventDefault();

    document.getElementById("feedback").classList.remove("visi_sucesso");
    document.getElementById("feedback").classList.remove("visi");
    document.getElementById("id_button_ok").classList.remove("button_ok");
    document.getElementById("id_button_ok").classList.remove("button_ok_erro");

    if (document.getElementById("name").value == false){
        document.getElementById("name").value = '';
    }

    if (document.getElementById("email").value == false){
        document.getElementById("email").value = '';
    }

    if (document.getElementById("message").value == false){
        document.getElementById("message").value = '';
    }

}

button.onclick = validacao;
buttonOk.onclick = removeOK;