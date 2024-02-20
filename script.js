const encriptarTexto = (texto) => {
  const cifrados = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };

  return texto.replace(/[aeiou]/gi, (coincidencia) => cifrados[coincidencia]);
};

const desencriptarTexto = (texto) => {
  const cifrados = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };

  return texto.replace(/enter|imes|ai|ober|ufat/gi, (coincidencia) => cifrados[coincidencia]);
};

document.getElementById('encriptar').addEventListener('click', () => {
  const textoIngresado = document.getElementById('textoIngresado').value;
  const textoEncriptado = encriptarTexto(textoIngresado);
  document.getElementById('textoResultado').value = textoEncriptado;
});

document.getElementById('desencriptar').addEventListener('click', () => {
  const textoIngresado = document.getElementById('textoIngresado').value;
  const textoDesencriptado = desencriptarTexto(textoIngresado);
  document.getElementById('textoResultado').value = textoDesencriptado;
});

document.getElementById('copiar').addEventListener('click', () => {
  const textoResultado = document.getElementById('textoResultado');
  textoResultado.select();
  document.execCommand('copy');
});