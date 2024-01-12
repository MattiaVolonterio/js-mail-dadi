const userEmailInput = document.getElementById("user-mail");
const validateButton = document.getElementById("validate-button");
const resetButton = document.getElementById("reset-button");
const result = document.getElementById("result");

let isValid;

const mails = ["aaa@gmail.com", "bbb@gmail.com", "ccc@gmail.com"];

validateButton.addEventListener("click", function () {
  const userEmailValue = userEmailInput.value;
  if (userEmailValue) {
    for (i = 0; i < mails.length; i++) {
      isValid = false;
      let mail = mails[i];

      if (userEmailValue == mail) {
        isValid = true;
        break;
      }
    }

    result.innerText = isValid
      ? "La mail inserita corrisponde"
      : "La mail inserita non corrisponde";
  } else {
    alert("Inserisci una mail valida");
  }
});

resetButton.addEventListener("click", function () {
  result.innerText = "";
});
