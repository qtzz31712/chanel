const registerBtnEle = $("#register__btn");
const loginBtnEle = $("#login__btn");
const registerMessageEle = $(".register__message");
const loginMessageEle = $(".login__message");

$("#login__btn").on("click", function () {
  const loginBtnEle = $(this);

  const loginBtnEleClass = loginBtnEle.attr("class");

  if (!loginBtnEleClass) {
    registerBtnEle.removeClass("black__line");
    loginBtnEle.addClass("black__line");
    loginMessageEle.removeClass("invisible");
    registerMessageEle.addClass("invisible");
  }
});

$("#register__btn").on("click", function () {
  const registerBtnEle = $(this);

  const registerBtnEleClass = registerBtnEle.attr("class");

  if (!registerBtnEleClass) {
    loginBtnEle.removeClass("black__line");
    registerBtnEle.addClass("black__line");
    registerMessageEle.removeClass("invisible");
    loginMessageEle.addClass("invisible");
  }
});

$("#submit__login").on("click", function () {
  const email = $("#input__email").val();
  const password = $("#input__password").val();

  if (email && password) {
    const userAccount = JSON.parse(localStorage.getItem("userAccount")) || [];
    const emailFound = userAccount.find((user) => user.email === email);

    if (emailFound) {
      if (emailFound.password === password) {
        sessionStorage.setItem("logindUser", JSON.stringify(emailFound));

        location.href = "../index.html";
        return alert("로그인에 성공하였습니다!");
      }
    }
  }
  alert("이메일과 비밀번호가 일치하지 않습니다.");
});
