function encriptar() {
    let inputText = document.getElementById('input-text').value;
    let outputText = inputText.replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');
    document.getElementById('output-text').value = outputText;

    // Quitar la imagen de fondo
    document.getElementById('output-text').style.backgroundImage = "none";
}

function desencriptar() {
    let inputText = document.getElementById('input-text').value;
    let outputText = inputText.replace(/enter/g, 'e')
                              .replace(/imes/g, 'i')
                              .replace(/ai/g, 'a')
                              .replace(/ober/g, 'o')
                              .replace(/ufat/g, 'u');
    document.getElementById('output-text').value = outputText;
}

function copiar() {
    let outputText = document.getElementById('output-text');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para móviles
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
