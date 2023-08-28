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
