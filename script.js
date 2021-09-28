// var valorDolar = 5.5
// let valorEuro = 6.0
// let valorBitcoins = 225483.73
// let valorReal = 5.5
function mostrar() {}
function Converter() {
  let vl = (document.querySelector('.resposta').style.display = 'block')
  let valor = document.querySelector('input[name="contact"]:checked').value
  let valorDigitado = parseFloat(document.querySelector('#valorDigitado').value)
  valorDolar = valorDigitado / 5.5
  valorEuro = valorDigitado / 6.0
  valorBitcoins = valorDigitado / 225483.73

  if (valor == 'dolar') {
    valorConvertido.innerHTML = `Com R$ ${valorDigitado} Reais<br>Você Compra $ ${valorDolar.toFixed(
      2
    )} Dolares`
  } else if (valor == 'euro') {
    valorConvertido.innerHTML = `Com R$ ${valorDigitado} Reais<br>Você Compra $ ${valorEuro.toFixed(
      2
    )} Euros`
  } else if (valor == 'bitcoins') {
    valorConvertido.innerHTML = `Com R$ ${valorDigitado} Reais<br>Você Compra ${valorBitcoins} Bitcoin`
  }
}

// //função para converter de dolar para real
// function dolar() {
//   totalDolar = Number(valorDigitado * 5.5)
//   return totalDolar
//   console.log()
// }

// //função para converter de euro  para real
// function euro() {}

// //função para converter de bitcoins para real
// function bitcoins() {}
