var outInput = document.getElementById("output");

function criptografar() {
    var textInput = document.getElementById("input-texto").value;
    var texto = textInput;

    var resultadocripto = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    document.getElementById("output").innerHTML = '<textarea readyonly id="input-texto">' + resultadocripto + '</textarea>';
}

function descriptografar() {
    var textInput = document.getElementById("input-texto").value;
    var texto = textInput;

    var resultadodescripto = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    document.getElementById("output").innerHTML = '<textarea readyonly id="input-texto">' + resultadodescripto + '</textarea>';
}

function copiar() {
    var textoCopia = document.createRange();
    textoCopia.selectNode(document.getElementById("output"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(textoCopia);
    try {
        navigator.clipboard.writeText(textoCopia);
        window.getSelection().removeAllRanges();
        alert(`Seu texto foi copiado: ${textoCopia}`);
        } catch (erro) {
            alert('Texto não copiado');
            }
}