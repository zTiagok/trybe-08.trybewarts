// VARIABLES

// -- LOGIN
const loginFormEmail = document.querySelector('#form-email');
const loginFormPassword = document.querySelector('#form-password');
const loginFormLoginButton = document.querySelector('#form-button');

// -- MAIN FORM
const mainFormEntry = document.querySelector('#evaluation-form');
const mainFormAgreement = document.querySelector('#agreement');
const mainFormSubmitButton = document.querySelector('#submit-btn');
const mainFormLetterCounter = document.querySelector('#counter');
const mainFormTextArea = document.getElementById('textarea');

// -- STORAGE
const storage = localStorage;

// -- STORAGE MANAGEMENT
const nameChange = document.querySelector('#input-name');
const lastnameChange = document.querySelector('#input-lastname');
const emailChange = document.querySelector('#input-email');
const houseChange = document.querySelector('#house');
const familyChange = document.getElementsByName('family');
const hofsChange = document.querySelector('#hofs');
const jestChange = document.querySelector('#jest');
const promisesChange = document.querySelector('#promises');
const reactChange = document.querySelector('#react');
const sqlChange = document.querySelector('#sql');
const pythonChange = document.querySelector('#python');
const rateChange = document.getElementsByName('rate');
const textChange = document.querySelector('#textarea');

// INITIAL RUN

mainFormSubmitButton.disabled = true;

// FUNCTIONS

function checkLogin() {
  if (loginFormEmail.value === '' && loginFormPassword.value === '') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

function checkAgreement(origin) {
  if (origin.target.checked === true) {
    mainFormSubmitButton.disabled = false;
  } else {
    mainFormSubmitButton.disabled = true;
    mainFormSubmitButton.default();
  }
}

function textCounter(origin) {
  mainFormLetterCounter.innerHTML = 500 - origin.target.value.length;
}

function submitChanges4() {
  if (storage.getItem('promises') === 'true') {
    document.querySelector('#form-5').innerHTML += 'Promisses, ';
  }
  if (storage.getItem('react') === 'true') {
    document.querySelector('#form-5').innerHTML += 'React, ';
  }
  if (storage.getItem('sql') === 'true') {
    document.querySelector('#form-5').innerHTML += 'SQL, ';
  }
  if (storage.getItem('python') === 'true') {
    document.querySelector('#form-5').innerHTML += 'Python, ';
  }
  document.querySelector('#form-6').innerHTML = `Avaliação: ${storage.getItem('rate')}`;
  document.querySelector('#form-7').innerHTML = `Observações: ${storage.getItem('text')}`;
}

function submitChanges3() {
  for (let index = 0; index < 7; index += 1) {
    const divChild = document.createElement('div');
    mainFormEntry.appendChild(divChild);
    divChild.id = `form-${index + 1}`;
  }
  document.querySelector('#form-1').innerHTML = `Nome: ${storage.getItem('name')}`;
  document.querySelector('#form-1').innerHTML += ` ${storage.getItem('lastname')}`;
  document.querySelector('#form-2').innerHTML = `Email: ${storage.getItem('email')}`;
  document.querySelector('#form-3').innerHTML = `Casa: ${storage.getItem('house')}`;
  document.querySelector('#form-4').innerHTML = `Família: ${storage.getItem('family')}`;
  document.querySelector('#form-5').innerHTML = 'Matérias: ';
  if (storage.getItem('hofs') === 'true') {
    document.querySelector('#form-5').innerHTML += 'HOFS, ';
  }
  if (storage.getItem('jest') === 'true') {
    document.querySelector('#form-5').innerHTML += 'Jest, ';
  }
  submitChanges4();
}

function submitChanges2() {
  for (let index = 0; index < rateChange.length; index += 1) {
    if (rateChange[index].checked) {
      storage.setItem('rate', rateChange[index].value);
    }
  }
  storage.setItem('hofs', hofsChange.checked);
  storage.setItem('jest', jestChange.checked);
  storage.setItem('promises', promisesChange.checked);
  storage.setItem('react', reactChange.checked);
  storage.setItem('sql', sqlChange.checked);
  storage.setItem('python', pythonChange.checked);
  storage.setItem('text', textChange.value);

  // CRIANDO OUTRO FORMULÁRIO
  while (mainFormEntry.lastChild) {
    mainFormEntry.removeChild(mainFormEntry.lastChild);
  }
  submitChanges3();
}

function submitChanges(origin) {
  origin.preventDefault();

  storage.setItem('name', nameChange.value);
  storage.setItem('lastname', lastnameChange.value);
  storage.setItem('email', emailChange.value);
  storage.setItem('house', houseChange.value);

  for (let index = 0; index < familyChange.length; index += 1) {
    if (familyChange[index].checked) {
      storage.setItem('family', familyChange[index].value);
    }
  }

  submitChanges2();
}

function startUp5() {
  if (storage.getItem('python') === 'true') {
    pythonChange.checked = true;
  } else {
    pythonChange.checked = false;
  }

  textChange.value = storage.getItem('text');
}

function startUp4() {
  if (storage.getItem('react') === 'true') {
    reactChange.checked = true;
  } else {
    reactChange.checked = false;
  }
  if (storage.getItem('sql') === 'true') {
    sqlChange.checked = true;
  } else {
    sqlChange.checked = false;
  }

  startUp5();
}

function startUp3() {
  if (storage.getItem('jest') === 'true') {
    jestChange.checked = true;
  } else {
    jestChange.checked = false;
  }
  if (storage.getItem('promises') === 'true') {
    promisesChange.checked = true;
  } else {
    promisesChange.checked = false;
  }
  startUp4();
}

function startUp2() {
  for (let index = 0; index < rateChange.length; index += 1) {
    if (storage.getItem('rate') === rateChange[index].value) {
      rateChange[index].checked = true;
    }
  }
  if (storage.getItem('hofs') === 'true') {
    hofsChange.checked = true;
  } else {
    hofsChange.checked = false;
  }

  startUp3();
}

window.onload = function startUp() {
  nameChange.value = storage.getItem('name');
  lastnameChange.value = storage.getItem('lastname');
  emailChange.value = storage.getItem('email');
  houseChange.value = storage.getItem('house');
  for (let index = 0; index < familyChange.length; index += 1) {
    if (storage.getItem('family') === familyChange[index].value) {
      familyChange[index].checked = true;
    }
  }
  startUp2();
};

// EVENT LISTENERS
loginFormLoginButton.addEventListener('click', checkLogin);
mainFormAgreement.addEventListener('click', checkAgreement);
mainFormTextArea.addEventListener('input', textCounter);
mainFormSubmitButton.addEventListener('click', submitChanges);
