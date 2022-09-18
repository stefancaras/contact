let contactName = document.getElementById('contactName');
let email = document.getElementById('email');
let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let message = document.getElementById('message');
let button = document.getElementById('button');
let thanks = document.getElementById('thanks');

button.addEventListener('click', function(){
    //If everything is fine, show info in console
    if (contactName.checkValidity() && email.checkValidity() && 
    message.checkValidity() && (radio1.checked || radio2.checked)) {
        console.log(`Nume și prenume: ${contactName.value}`);
        console.log(`E-mail: ${email.value}`);
        if (radio1.checked) {
            console.log(`Persoană fizică`);
        } else if (radio2.checked) {
            console.log(`Persoană juridică`);
        }
        console.log(`Mesaj: ${message.value}`);
        let namearray = contactName.value.split(" ");
        document.querySelector("form").noValidate = true;
        //Clear input fields
        contactName.value=email.value=message.value="";
        radio1.checked=radio2.checked=false;
        //Thank you message
        thanks.classList.add("green");
        thanks.innerHTML = `<i class="fas fa-check"></i>
            Informațiile tale au fost trimise.<br>
            Mulțumesc, ${namearray[namearray.length-1]}. 
            <i class="fas fa-window-close" id="x"></i>`;
        //Close button for thank you message
        let x = document.getElementById('x');
        x.addEventListener('click', function() {
            thanks.innerHTML = "";
            thanks.classList.remove("green");
        })
        ;
    //If something is wrong
    } else {
        //Check what is wrong and add class invalid to elements
        document.querySelector("form").noValidate = false;
        const elemArray = [contactName, email, message];
        for (let elem of elemArray) {
            if (elem.checkValidity() === false) {
                elem.classList.add("invalid");
            }
            //Remove class invalid if input is fine
            elem.addEventListener('keyup', function(){
                if (elem.checkValidity()) {
                    elem.classList.remove("invalid");
                }
            })
        }
        //Check what is wrong and add class invalid to radio buttons
        if (!radio1.checked && !radio2.checked) {
            radio1.classList.add("invalid");
            radio2.classList.add("invalid");
        }
        //Remove class invalid if input is fine
        radio1.addEventListener('click', function() {
            radio1.classList.remove("invalid");
            radio2.classList.remove("invalid");
        })
        radio2.addEventListener('click', function() {
            radio1.classList.remove("invalid");
            radio2.classList.remove("invalid");
        })
    }
})