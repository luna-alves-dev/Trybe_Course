const inputEmail = document.querySelector('input[name=\'email\']');
const inputPassword = document.querySelector('input[name=\'password\']');
const LoginButton = document.querySelector('#login-btn');

function onClickLogin() {
  if (
    inputEmail.value === 'tryber@teste.com'
    && inputPassword.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

LoginButton.addEventListener('click', onClickLogin);

const inputCheckInformations = document.querySelector('#agreement');
const button = document.querySelector('#submit-btn');

function checkInformations() {
  if (inputCheckInformations.checked === true) {
    button.disabled = '';
  }
  if (inputCheckInformations.checked === false) {
    button.disabled = 'disabled';
  }
}
inputCheckInformations.addEventListener('change', checkInformations);

document.getElementById('textarea').onkeyup = function textArea() {
  document.getElementById('counter').innerHTML = `Caracteres Restantes: ${
    500 - this.value.length
  }`;
};

const form = document.querySelector('#evaluation-form');
const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const emailForm = document.querySelector('#input-email');
const casa = document.querySelector('#house');
const familia = document.querySelectorAll('.label-button');
let familiaEscolhida = '';
const materias = document.querySelectorAll('.subject');
let materiasEscolhidas = '';
const notas = document.querySelectorAll('.radio-button');
let notaEscolhida = '';
const obervacoes = document.querySelector('textarea');

function family() {
  return [...familia]
    .filter((radio) => radio.checked)
    .map((radio) => radio.value);
}

function checked() {
  return [...materias]
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
}

function satisfaction() {
  return [...notas]
    .filter((radio) => radio.checked)
    .map((radio) => radio.value);
}

inputCheckInformations.addEventListener('click', () => {
  familiaEscolhida = family();
  materiasEscolhidas = checked();
  notaEscolhida = satisfaction();
  form.innerHTML = `
  <p> Nome: ${nome.value} ${sobrenome.value} </p>
  <p> Email: ${emailForm.value}</p>
  <p> Casa: ${casa.value}</p>
  <p> Família: ${familiaEscolhida}</p>
  <p> Matérias: ${materiasEscolhidas.join(', ')}</p>
  <p> Avaliação: ${notaEscolhida}</p>
  <p> Observações: ${obervacoes.value}`;
});
