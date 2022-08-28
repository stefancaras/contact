let name = document.getElementById('name');
let email = document.getElementById('email');
let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let message = document.getElementById('message');
let button = document.getElementById('button');
let thanks = document.getElementById('thanks');
let namearr = [];

button.addEventListener('click', function(){
    if (name.checkValidity() && email.checkValidity() && 
    message.checkValidity() && (radio1.checked || radio2.checked)) {
        console.log(`Nume și prenume: ${name.value}`);
        console.log(`E-mail: ${email.value}`);
        if (radio1.checked) {
            console.log(`Persoană fizică`);
        } else if (radio2.checked) {
            console.log(`Persoană juridică`);
        }
        console.log(`Mesaj: ${message.value}`);

        namearr = name.value.split(" ");
        name.value=email.value=message.value="";
        radio1.checked=radio2.checked=false;
        thanks.classList.add("green");
        thanks.innerHTML = `<i class="fas fa-check"></i>Informațiile tale au fost trimise.<br>
            Mulțumesc, ${namearr[namearr.length-1]}. <i class="fas fa-window-close" id="x"></i>`;
        
        let x = document.getElementById('x');
        x.addEventListener('click', function(){
            thanks.innerHTML = "";
            thanks.classList.remove("green");
        })
    } else {
        if (name.checkValidity() == false) {
                name.classList.add("invalid");
        }
        name.addEventListener('keyup', function(){
            if (name.checkValidity()) {
                name.classList.remove("invalid");
            } else {
                name.classList.add("invalid");
            }
        })
        
        if (email.checkValidity() == false) {
                email.classList.add("invalid");
        }
        email.addEventListener('keyup', function(){
            if (email.checkValidity()) {
                email.classList.remove("invalid");
            } else {
                email.classList.add("invalid");
            }
        })
        
        if (!radio1.checked && !radio2.checked) {
            radio1.classList.add("invalid");
            radio2.classList.add("invalid");
        }
        radio1.addEventListener('click', function(){
            radio1.classList.remove("invalid");
            radio2.classList.remove("invalid");
        })
        radio2.addEventListener('click', function(){
            radio1.classList.remove("invalid");
            radio2.classList.remove("invalid");
        })
        
        if (message.checkValidity() == false) {
                message.classList.add("invalid");
        }
        message.addEventListener('keyup', function(){
            if (message.checkValidity()) {
                message.classList.remove("invalid");
            } else {
                message.classList.add("invalid");
            }
        })
    }
})

