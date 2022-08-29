let name = document.getElementById('name');
let email = document.getElementById('email');
let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let message = document.getElementById('message');
let button = document.getElementById('button');
let thanks = document.getElementById('thanks');

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

        let namearray = name.value.split(" ");
        name.value=email.value=message.value="";
        radio1.checked=radio2.checked=false;
        thanks.classList.add("green");
        thanks.innerHTML = `<i class="fas fa-check"></i>
            Informațiile tale au fost trimise.<br>
            Mulțumesc, ${namearray[namearray.length-1]}. 
            <i class="fas fa-window-close" id="x"></i>`;
        
        let x = document.getElementById('x');
        x.addEventListener('click', function(){
            thanks.innerHTML = "";
            thanks.classList.remove("green");
        })
    } else {
        const elemArray = [name, email, message];
        for (let elem of elemArray) {
            if (elem.checkValidity() == false) {
                elem.classList.add("invalid");
            }
            elem.addEventListener('keyup', function(){
                if (elem.checkValidity()) {
                    elem.classList.remove("invalid");
                }
            })
        }
        
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
    }
})