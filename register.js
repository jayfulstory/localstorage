const id = document.querySelector('#name');
const pw = document.querySelector('#password');
const zip3 = document.querySelector('#inputzip3');
const zip4 = document.querySelector('#inputzip4');
const submit = document.querySelector('#register__form');
const zipSearch = document.querySelector('#zip__search');
const address1 = document.querySelector('#address1');
const address2 = document.querySelector('#address2');
const address3 = document.querySelector('#address3');

async function searchZip(e) {
  e.preventDefault();
  const zipNum3 = zip3.value;
  const zipNum4 = zip4.value;
  const url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipNum3}${zipNum4}`;
  await fetch(url, { mode: 'cors' })
    .then(response => response.json())
    .then(data => {
      const stateName = data.results[0].address1;
      const city = data.results[0].address2;
      const street = data.results[0].address3;
      address1.value = stateName;
      address2.value = city;
      address3.value = street;
    });
}
zipSearch.addEventListener('click', searchZip);

let profileObj = [];
function saveProfile() {
  localStorage.setItem(id.value, JSON.stringify(profileObj));
}

function register() {
  const newProfileObj = {
    pw: pw.value,
    stateName: address1.value,
    city: address2.value,
    street: address3.value,
  };
  profileObj.push(newProfileObj);
  saveProfile();
}

submit.addEventListener('submit', register);
