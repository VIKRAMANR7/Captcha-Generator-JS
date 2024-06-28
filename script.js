let captchaInput = document.querySelector(".captcha-input");
let box = document.querySelector(".box");
let enterInput = document.querySelector(".enterInput");
let submitBtn = document.querySelector(".btn");
let capsSpec = document.querySelector(".caps-spec");

box.addEventListener("click", () => {
  let captchaVal = captchaGenerator();
  captchaInput.innerHTML = captchaVal;
});

window.addEventListener("load", () => {
  let captchaVal = captchaGenerator();
  captchaInput.innerHTML = captchaVal;
});

function captchaGenerator() {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++) {
    let charsetlength = characters.length;
    result += characters.charAt(Math.floor(Math.random() * charsetlength));
  }
  return result;
}
enterInput.addEventListener("input", () => {
  if (enterInput.value.length > 0) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
submitBtn.addEventListener("click", () => {
  let enterInputVal = enterInput.value;
  let captchaVal = captchaInput.innerHTML;
  if (enterInputVal === captchaVal) {
    capsSpec.innerHTML = "Entered captcha is correct";
    capsSpec.style.color = "#4edf1e";
  } else {
    capsSpec.innerHTML = "Entered captcha is not correct";
    capsSpec.style.color = "#c22626";
  }
});
