const greeting = document.querySelector('.greeting');
const address = document.querySelector('.address');
const logOut = document.querySelector('.logout');
const register = document.querySelector('.register');
const id = document.querySelector('#id');
const pw = document.querySelector('#pw');
const login = document.querySelector('#login');
const createId = document.querySelector('.createId');

function loginCheck(e) {
  e.preventDefault();
  const USER = id.value;
  const PASSWORD = pw.value;
  const val = JSON.parse(localStorage.getItem(USER));
  const stateName = val[0].stateName;
  const city = val[0].city;
  const street = val[0].street;
  if (localStorage.getItem(USER) && PASSWORD === val[0].pw) {
    greeting.innerHTML = `Hello ${USER}`;
    address.innerHTML = `${stateName}${city}${street}`;
    id.value = '';
    pw.value = '';
    login.classList.add('hidden');
    createId.classList.add('hidden');
    logOut.classList.remove('hidden');
    greeting.classList.remove('hidden');
    address.classList.remove('hidden');
  } else {
    alert('IDまたはパスワードを確認してください');
  }
}

function logout(e) {
  e.preventDefault();
  login.classList.remove('hidden');
  logOut.classList.add('hidden');
  greeting.classList.add('hidden');
  address.classList.add('hidden');
  createId.classList.remove('hidden');
}

logOut.addEventListener('click', logout);

login.addEventListener('submit', loginCheck);
