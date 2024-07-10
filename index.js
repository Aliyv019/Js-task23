const reg_user = document.querySelectorAll("input")[0];
const reg_pass = document.querySelectorAll("input")[1];
const reg_btn = document.querySelectorAll("button")[0];

const log_user = document.querySelectorAll("input")[2];
const log_pass = document.querySelectorAll("input")[3];
const log_btn = document.querySelectorAll("button")[1];
const text = document.querySelector("p");
reg_btn.addEventListener("click", () => {
  if (
    reg_user.value != "" &&
    reg_pass.value != "" &&
    localStorage.length != 0
  ) {
    for (let i = 0; i < localStorage.length; i++) {
      if (reg_user.value == localStorage.key(i)) {
        text.textContent = "This username was taken!";
      } else {
        text.textContent = "Signed up succesfully!";
        console.log(text);
        localStorage.setItem(reg_user.value, reg_pass.value);
      }
    }
  } else if (reg_user.value != "" && reg_pass.value != "") {
    localStorage.setItem(reg_user.value, reg_pass.value);
    text.textContent = "Signed up succesfully!";
  }
});

log_btn.addEventListener("click", () => {
  if (log_pass.value != "" && log_user.value != "") {
    if (localStorage.getItem(log_user.value) == log_pass.value) {
      document.querySelector("p").textContent = "Logged in succesfully!";
    } else {
      document.querySelector("p").textContent =
        "Username or password is incorrect";
    }
  }
});
