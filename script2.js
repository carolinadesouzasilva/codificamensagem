var codificar = document.getElementById('codificar');
var decodificar = document.getElementById('decodificar');
var botao = document.getElementById('botaoCodifica');
var entradaTexto = document.getElementById('msgentrada');
var saidaTexto = document.getElementById('retornomensagem');
var selecionarCodigo = document.getElementById('select');
var incremento = document.getElementById('incrementoOculto');




codificar.addEventListener("click", function(){
  botao.innerText = "Codificar Mensagem"
})

decodificar.addEventListener('click', function(){
  botao.innerText = "Decodificar Mensagem";
})



selecionarCodigo.addEventListener('change', function(){
  if (selecionarCodigo.value == 'opcao2') {
    document.querySelector('.incremento').style.display = 'flex';
  } else {
    document.querySelector('.incremento').style.display = 'none';
  }
})




botao.addEventListener('click', (function (manterpagina) {
  manterpagina.preventDefault();
  criptografar(entradaTexto.value) 
}))

function criptografar(texto) {
  if (selecionarCodigo.value == 'opcao1' && botao.innerText == 'Codificar Mensagem') {
    var resultCripto64 = btoa(texto);
    saidaTexto.value = resultCripto64;
  } else if (selecionarCodigo.value == 'opcao2' && botao.innerText == 'Codificar Mensagem') {
    var resultCesar = cifraDeCesar(entradaTexto.value, +incremento.value);
    saidaTexto.value = resultCesar;
  } else if (selecionarCodigo.value == 'opcao1' && botao.innerText == 'Decodificar Mensagem') {
    var resultDecripto64 = atob(texto) 
    saidaTexto.value = resultDecripto64;
  } else if (selecionarCodigo.value == 'opcao2' && botao.innerText == 'Decodificar Mensagem') {
    var resultDecriptoCesar = cesarDecifrado(entradaTexto.value, +incremento.value);
    saidaTexto.value = resultDecriptoCesar;
  } else {
    alert('Verifique se marcou todas as opções do formulário');
  }
  
}



function cifraDeCesar(texto, increment) {
var entrada = texto.split('');
var numeroCesar = [];
var retornoCesar = [];
for (i=0; i < entrada.length ; i++) {
  if(entrada[i].charCodeAt() > 64 && entrada[i].charCodeAt() < 91) {
    var aplicaCifra = (entrada[i].charCodeAt() - 65 + increment) % 26;
    numeroCesar.push(aplicaCifra + 65);
  } else if (entrada[i].charCodeAt() >= 97 && entrada[i].charCodeAt() <= 122) {
    aplicaCifra = (entrada[i].charCodeAt() - 97 + increment) % 26;
    numeroCesar.push(aplicaCifra + 97);
  } else {
    numeroCesar.push(entrada[i].charCodeAt())
    }
  }

  for (var j = 0; j < numeroCesar.length ; j++) {
          retornoCesar.push(String.fromCharCode(numeroCesar[j]))
      }
      return retornoCesar.join('');
    
}



function cesarDecifrado(texto, increment) {
  var guardaMensagem = texto.split('')
  var msgCripto = []
  var cesarCifra = []

  for (let i = 0; i < guardaMensagem.length; i++) {
      if (guardaMensagem[i].charCodeAt() >= 65 && guardaMensagem[i].charCodeAt() <= 90) {
          let testando = ((guardaMensagem[i].charCodeAt()) - 65 - increment) % 26
          cesarCifra.push((testando < 0 ? testando + 26 : testando) + 65)
      } else if (guardaMensagem[i].charCodeAt() >= 97 && guardaMensagem[i].charCodeAt() <= 122) {
          let testando = ((guardaMensagem[i].charCodeAt()) - 97 - increment) % 26
          cesarCifra.push((testando < 0 ? testando + 26 : testando) + 97)
      } else {
          cesarCifra.push(guardaMensagem[i].charCodeAt())
       }
  }
  for (var j = 0; cesarCifra.length > j; j++) {
      msgCripto.push(String.fromCharCode(cesarCifra[j]))
  }
  return msgCripto.join('')

}