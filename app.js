const pwdBox = document.querySelector(".pwd-box");
const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value");
const generatePasswordButton = document.querySelector(".pwd-gen-btn");
const lowerCase = document.querySelector("#lowercase");
const upperCase = document.querySelector("#uppercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const copyIcon = document.querySelector("#copy-icon");

const lowerChars = "abcdefghijklmopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersChars = "0123456789";
const symbolsChars = "!@#$%^&*()_+~|?/+";

sliderValue.innerHTML = slider.value;

slider.addEventListener("input", () => {
  sliderValue.innerHTML = slider.value;
  pwdBox.value = generatePassword(); // Changing the slider will also change the password.
});

generatePasswordButton.addEventListener("click", () => {
  if (
    !lowerCase.checked &&
    !upperCase.checked &&
    !numbers.checked &&
    !symbols.checked
  ) {
    alert("Please select at least one checkbox to generate a password!!");
  } else {
    pwdBox.value = generatePassword();
  }
});

function generatePassword() {
  let password = ""; // to store final password
  let allChars = ""; // to store intermediate password

  allChars += lowerCase.checked ? lowerChars : "";
  allChars += upperCase.checked ? upperChars : "";
  allChars += numbers.checked ? numbersChars : "";
  allChars += symbols.checked ? symbolsChars : "";

  for (i = 1; i <= slider.value; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return password;
}

copyIcon.addEventListener("click", () => {
  if (pwdBox.value != "" || pwdBox.value.length >= 1) {
    navigator.clipboard.writeText(pwdBox.value);
    copyIcon.innerHTML = "check";
    copyIcon.title = "Password Copied";
    setTimeout(() => {
      copyIcon.innerHTML = "content_copy";
      copyIcon.title = "Copy to clipboard";
    }, 1000);
  }
});
