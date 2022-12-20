var message = [];
var encriptedMessage = [];
var unencripted = [];
var text;

const $copy = document.querySelector("#copy");
$copy.style.display = "none";

const $showMessage = document.querySelector("#showMessage");
$showMessage.style.display = "none";

const $theMessageIs = document.querySelector("#theMessageIs");
$theMessageIs.style.display = "none";

var writeMessage = document.querySelector("#insertMessage")
writeMessage.focus()


function encriptar() {
    message = [];
    encriptedMessage = [];
    var x = document.getElementById('copy');
    var y = document.getElementById('showMessage');
    var mess = document.getElementById('theMessageIs')
    if (x.style.display === 'block') {
        y.style.display = 'none';
        x.style.display = 'none';
        mess.style.display = 'none';
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
    var mess = document.getElementById('theMessageIs')
    if (x.style.display === 'block') {
        y.style.display = 'none';
        x.style.display = 'none';
        mess.style.display = 'none';
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
        } else {
            alert("Favor de solo incluir letras minúsculas y sin acentos")
        }
    }
}

function copyText() {
    var copyText = document.getElementById("showMessage");

    copyText.select();

    navigator.clipboard.writeText(copyText.value);

    alert("El texto se a copiado: " + copyText.value);

}

function infoAlert(){
    alert("Nota: Favor de solo incluir letras minúsculas y sin acentos")
}