let name = document.getElementById('name');
name.addEventListener('invalid', function(){
    name.classList.add("invalid");
})
name.addEventListener('keydown', function(){
    name.classList.remove("invalid");
})

let email = document.getElementById('email');
email.addEventListener('invalid', function(){
    email.classList.add("invalid");
})
email.addEventListener('keydown', function(){
    email.classList.remove("invalid");
})

let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
radio1.addEventListener('click', function(){
    radio1.classList.remove("invalid");
    radio2.classList.remove("invalid");
})
radio2.addEventListener('click', function(){
    radio1.classList.remove("invalid");
    radio2.classList.remove("invalid");
})

let message = document.getElementById('message');
message.addEventListener('invalid', function(){
    message.classList.add("invalid");
})
message.addEventListener('keydown', function(){
    message.classList.remove("invalid");
})

let button = document.getElementById('button');
let thanks = document.getElementById('thanks');
let namearr = [];
button.addEventListener('click', function(){
    if (!radio1.checked && !radio2.checked) {
        radio1.classList.add("invalid");
        radio2.classList.add("invalid");
    }
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
        name.value=email.value=message.value=null;
        radio1.checked=radio2.checked=false;
        thanks.classList.add("green");
        thanks.innerHTML = `<i class="fas fa-check"></i>Informațiile tale au fost trimise.<br>
            Mulțumesc, ${namearr[namearr.length-1]}. <i class="fas fa-window-close" id="x"></i>`;
        
        let x = document.getElementById('x');
        x.addEventListener('click', function(){
            thanks.innerHTML = "";
            thanks.classList.remove("green");
        })
    }
})
