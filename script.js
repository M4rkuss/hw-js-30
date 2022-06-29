let pageRegPath = document.location.pathname.slice(10);
if (pageRegPath === "index.html" || pageRegPath === "" || pageRegPath === " ") {
  document.getElementById('signUpBtn').addEventListener('click', function (e) {
    let emailValue = document.getElementById('emailInput').value;
    let passwordValue = document.getElementById('passwordInput').value;
    let passwordValue2 = document.getElementById('passwordInput2').value;
    const regEmail = /^([A-Z][A-Za-z_]{4,7}-[A-Za-z0-9_\-\.]+@[A-Za-z]+\.[A-Za-z]{2,4})$/;
    const regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}/;

    localStorage.setItem("emailValue", emailValue);


    e.preventDefault();

    if (emailValue.match(regEmail)) {

    } else {
      document.getElementsByClassName('spanInvalid')[0].classList.add('active')
      setTimeout(function () {
        document.getElementsByClassName('spanInvalid')[0].classList.remove('active')
      }, 1000)
    }

    if (passwordValue.match(regPass)) {

    } else {
      document.getElementsByClassName('spanInvalid')[1].classList.add('active')
      setTimeout(function () {
        document.getElementsByClassName('spanInvalid')[1].classList.remove('active')
      }, 1000)
    }

    if (passwordValue === passwordValue2) {

    } else {
      document.getElementsByClassName('spanInvalid')[2].classList.add('active')
      setTimeout(function () {
        document.getElementsByClassName('spanInvalid')[2].classList.remove('active')
      }, 1000)
    }

    if (emailValue.match(regEmail) && passwordValue.match(regPass) && (passwordValue === passwordValue2)) {
      window.open('/hw-js-30/user-info.html', '_self')
    }
  })
}

if (pageRegPath === "user-info.html" || pageRegPath === "user-info") {
  document.getElementById('userEmail').innerText = localStorage.getItem("emailValue");
  document.getElementById('saveBtn').addEventListener('click', function (e) {
    let firstName = document.getElementById('firstNameInput').value;
    let lastName = document.getElementById('lastNameInput').value;
    let birthValue = document.getElementById('birthInput').value;
    let phoneValue = document.getElementById('phoneInput').value;
    const regName = /^([A-Za-z]{1,20})$/;
    const regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,12}(\s*)?$/


    e.preventDefault()

    if (firstName.match(regName)) {

    } else {
      document.getElementsByClassName('spanInvalid')[0].classList.add('active')
      setTimeout(function () {
        document.getElementsByClassName('spanInvalid')[0].classList.remove('active')
      }, 1000)
    }

    if (lastName.match(regName)) {

    } else {
      document.getElementsByClassName('spanInvalid')[1].classList.add('active')
      setTimeout(function () {
        document.getElementsByClassName('spanInvalid')[1].classList.remove('active')
      }, 1000)
    }

    if (birthValue < 1900 || birthValue > 2022) {
      birthValue = false;
      document.getElementsByClassName('spanInvalid')[2].classList.add('active')
      setTimeout(function () {
        document.getElementsByClassName('spanInvalid')[2].classList.remove('active')
      }, 1000)
    }

    if (phoneValue.match(regPhone)) {

    } else {
      document.getElementsByClassName('spanInvalid')[3].classList.add('active')
      setTimeout(function () {
        document.getElementsByClassName('spanInvalid')[3].classList.remove('active')
      }, 1000)
    }

    if (firstName.match(regName) && lastName.match(regName) && phoneValue.match(regPhone) && (!birthValue === false)) {
      document.getElementById('popUp').style.display = 'flex';
      setTimeout(function () {
        document.getElementById('popUp').style.opacity = '0';
      }, 1500)
      setTimeout(function () {
        document.getElementById('popUp').style.display = 'none';
      }, 2500)
    }

  })
}