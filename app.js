var message = [];
var encriptedMessage = [];
var unencripted = [];
var text;

const $copy = document.querySelector("#copy");
$copy.style.display = "none";

const $showMessage = document.querySelector("#showMessage");
$showMessage.style.display = "none";

const $showPerson = document.querySelector("#person");
$showPerson.style.display = "block";

const $showNoMessage = document.querySelector("#noMessage");
$showNoMessage.style.display = "block";

const $showInsert = document.querySelector("#insert");
$showInsert.style.display = "block";

const $theMessageIs = document.querySelector("#theMessageIs");
$theMessageIs.style.display = "none";

var writeMessage = document.querySelector("#insertMessage")
writeMessage.focus()


function encriptar() {
    message = [];
    encriptedMessage = [];
    var x = document.getElementById('copy');
    var y = document.getElementById('showMessage');
    var a = document.getElementById('person');
    var b = document.getElementById('noMessage');
    var c = document.getElementById('insert');
    var mess = document.getElementById('theMessageIs')
    if (x.style.display === 'block') {
        a.style.display = 'block';
        b.style.display = 'block';
        c.style.display = 'block';
        y.style.display = 'none';
        x.style.display = 'none';
        mess.style.display = 'none';
        writeMessage.value = '';
    } else {
        text = writeMessage.value;

        message = text.split("");

        // Defining accent chars
        let accentChars = ['á', 'é', 'í', 'ó', 'ú'];

        // Detecting if the text has accents
        let textHasAccents = accentChars.some(char => message.includes(char));

        if (text === text.toUpperCase() || textHasAccents === true) {
            alert("Favor de solo incluir letras minúsculas y sin acentos")
        } else if (text === text.toLowerCase()) {
            for (var i = 0; i < message.length; i++) {
                if (message[i] == "e") {
                    encriptedMessage.push("enter");
                } else if (message[i] == "i") {
                    encriptedMessage.push("imes");
                } else if (message[i] == "a") {
                    encriptedMessage.push("ai");
                } else if (message[i] == "o") {
                    encriptedMessage.push("ober");
                } else if (message[i] == "u") {
                    encriptedMessage.push("ufat");
                } else {
                    encriptedMessage.push(message[i]);
                }
            }
            y.style.display = 'block';
            x.style.display = 'block';
            mess.style.display = 'block';
            $showMessage.value = encriptedMessage.join('');
            a.style.display = 'none';
            b.style.display = 'none';
            c.style.display = 'none';
        } else {
            alert("Favor de solo incluir letras minúsculas y sin acentos")
        }
    }
}


//Función para desencriptar
function desencriptar() {
    message = [];
    encriptedMessage = [];
    var x = document.getElementById('copy');
    var y = document.getElementById('showMessage');
    var mess = document.getElementById('theMessageIs');
    var a = document.getElementById('person');
    var b = document.getElementById('noMessage');
    var c = document.getElementById('insert');
    if (x.style.display === 'block') {
        a.style.display = 'block';
        b.style.display = 'block';
        c.style.display = 'block';
        y.style.display = 'none';
        x.style.display = 'none';
        mess.style.display = 'none';
        writeMessage.value = '';
    } else {
        text = writeMessage.value;
        textEncrip = text;

        message = text.split("");

        // Defining accent chars
        let accentChars = ['á', 'é', 'í', 'ó', 'ú'];

        // Detecting if the text has accents
        let textHasAccents = accentChars.some(char => message.includes(char));



        if (text === text.toUpperCase() || textHasAccents === true) {
            alert("Favor de solo incluir letras minúsculas y sin acentos")
        } else if (text === text.toLowerCase()) {

            for (var i = 0; i < text.length; i++) {
                if (text.includes('enter') == true) {
                    text = text.replace('enter', 'e');
                } else if (text.includes('imes') == true) {
                    text = text.replace('imes', 'i');
                } else if (text.includes('ai') == true) {
                    text = text.replace('ai', 'a');
                } else if (text.includes('ober') == true) {
                    text = text.replace('ober', 'o');
                } else if (text.includes('ufat') == true) {
                    text = text.replace('ufat', 'u');
                }
            }
            y.style.display = 'block';
            x.style.display = 'block';
            mess.style.display = 'block';
            $showMessage.value = text;
            a.style.display = 'none';
            b.style.display = 'none';
            c.style.display = 'none';
        } else {
            alert("Favor de solo incluir letras minúsculas y sin acentos")
        }
    }
}

/*function copyText() {
    var copyText = document.getElementById("showMessage");

    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(copyText.value);

    alert("El texto se a copiado: " + copyText.value);

}*/

function copyText() {
    /* Get the text field */
    var Text = document.getElementById("showMessage");
  
    /* Select the text field */
    Text.select();
    Text.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + Text.value);
  }


function infoAlert(){
    alert("Nota: Favor de solo incluir letras minúsculas y sin acentos")
}