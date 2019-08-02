const form = document.querySelector(".content-form__form");
const inputs = document.querySelectorAll("input");
const email = document.querySelector('input[type="em"]');

const error = input => {
  input.classList.add("input--error");
  input.nextElementSibling.style.display = "block";
};

const valid = input => {
  input.classList.remove("input--error");
  input.nextElementSibling.style.display = "none";
};

const checkEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

form.addEventListener("submit", e => {
  e.preventDefault();
  inputs.forEach(input => {
    if (input.value.trim() === "") {
      error(input);
    } else {
      valid(input);
    }
  });

  if (email.value.trim() != "" && !checkEmail(email.value.trim())) {
    email.classList.add("input--error");
    document.querySelector(".error-email").style.display = "block";
  } else if (email.value.trim() != "" && checkEmail(email.value.trim())) {
    email.classList.remove("input--error");
    document.querySelector(".error-email").style.display = "none";
  }
});
