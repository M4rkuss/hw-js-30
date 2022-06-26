document.getElementById('signUpBtn').addEventListener('click', function (e) {
  let emailValue = document.getElementById('emailInput').value
  let passwordValue = document.getElementById('passwordInput').value
  let passwordValue2 = document.getElementById('passwordInput2').value
  const regEmail = /^([A-Z][A-Za-z_]{4,7}-[A-Za-z0-9_\-\.]+@[A-Za-z]+\.[A-Za-z]{2,4})$/
  const regPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}/

  e.preventDefault()

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
    window.open("/user-info.html", "_self");
  }
})

