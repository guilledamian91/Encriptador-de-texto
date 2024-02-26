const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");

const matriz_code = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];

function mostrarImagen() {
    var textoEncriptado = document.getElementById("texto-encriptado");
    var imagenResultado = document.querySelector("img");

    if (textoEncriptado.value.trim() === "") {
        imagenResultado.style.display = "block";
    } else {
        imagenResultado.style.display = "none";
    }
}

window.onload = mostrarImagen;
document.getElementById("texto-encriptado").addEventListener("input", mostrarImagen);

function btnEncriptar(){
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;

}

function encriptar(fraseEncriptada){
    for(let i = 0; i < matriz_code.length; i++){
        if (fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    return fraseEncriptada;
}

function btnDesencriptar(){
    const mensaje = desencriptar(campo_texto.value);
    campo_mensaje.value = mensaje;
}

function desencriptar(fraseEncriptada){
    for(let i = 0; i < matriz_code.length; i++){
        if (fraseEncriptada.includes(matriz_code[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
        }
    }
    return fraseEncriptada;

}

function copiarTexto() {
    var textoACopiar = document.getElementById("campo-mensaje").value;
    document.getElementById("texto-encriptado").value = textoACopiar;
    campo_mensaje.value="";
}
