const formEle = $("form").children().toArray();

const styler = {
  settingBorderBottom(style, ele, eleStyle) {
    eleStyle.borderBottom = style;
    ele.css({ ...eleStyle });
  },

  settingLabel(style, ele, eleStyle) {
    eleStyle.color = style;
    ele.css({ ...eleStyle });
  },
};

formEle.forEach((element) => {
  const $inputEle = $(element).children("input");
  const $inputEleStyle = { borderBottom: $inputEle.css("borderBottom") };

  const $lableEle = $(element).children("label");
  const $lableEleStyle = { color: $lableEle.css("color") };

  $inputEle.focus(() => {
    styler.settingBorderBottom(
      "1px solid rgb(0, 0, 0)",
      $inputEle,
      $inputEleStyle
    );

    styler.settingLabel("rgb(0, 0, 0)", $lableEle, $lableEleStyle);
  });

  $inputEle.blur(() => {
    styler.settingBorderBottom(
      "1px solid rgb(214, 214, 214)",
      $inputEle,
      $inputEleStyle
    );

    styler.settingLabel("rgb(95, 95, 95)", $lableEle, $lableEleStyle);
  });
});

$("#user__email").focus();

$("#submit__button").on("click", function () {
  let flag = true;
  const $inputEle = $(".customer__content form input");
  const formInfos = $inputEle
    .toArray()
    .map((item) => ({ itemTag: item, itemValue: item.value }));

  const nullValue = formInfos.filter((info) => info.itemValue == false);

  if (nullValue.length) {
    nullValue
      .map((value) => "#" + value.itemTag.id)
      .forEach((item) => {
        const $inputTag = $(item);
        const $spanEle = $(item).parent().children(".error");

        $spanEle.text("값 미입력").css({ display: "block" });
        $inputTag.on("input", function () {
          $spanEle.css({ display: "none" });
        });
      });
  }

  const [
    email,
    password,
    passwordRe,
    gender,
    firstName,
    lastName,
    tell,
    nickName,
  ] = formInfos.map(({ itemValue }) => itemValue);

  const userAccount = JSON.parse(
    localStorage.getItem("userAccount")
      ? localStorage.getItem("userAccount")
      : "[]"
  );

  if (userAccount.find((user) => user.email === email)) {
    const $emailSpanEle = $("#user__email").parent().children(".error");
    $emailSpanEle.text("중복된 아이디").css({ display: "block" });
    flag = false;
  }

  if (!email.includes("@")) {
    const $emailSpanEle = $("#user__email").parent().children(".error");
    $emailSpanEle.text("이메일 형식 불일치").css({ display: "block" });
    flag = false;
  }

  if (password !== passwordRe) {
    const $passwordConfirmSpanEle = $("#user__password__confirm")
      .parent()
      .children(".error");
    $passwordConfirmSpanEle.text("비밀번호 불일치").css({ display: "block" });
    flag = false;
  }

  if (gender !== "남" && gender !== "여") {
    const $genderSpanEle = $("#user__gender").parent().children(".error");
    $genderSpanEle.text("입력 불일치").css({ display: "block" });
    flag = false;
  }

  if (tell.includes("-")) {
    const $tellSpanEle = $("#user__tell").parent().children(".error");
    $tellSpanEle.text("숫자로만 입력").css({ display: "block" });
    flag = false;
  }

  if (userAccount.find((user) => user.nickName === nickName)) {
    const $nickNameSpanEle = $("#user__nickname").parent().children(".error");
    $nickNameSpanEle.text("중복된 닉네임").css({ display: "block" });
    flag = false;
  }

  if (!flag) return;

  const id = userAccount.length ? (userAccount.length += 1) : 1;
  const tellHyphen = tell.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");

  userAccount.push({
    id,
    email,
    password,
    gender,
    firstName,
    lastName,
    tellHyphen,
    nickName,
  });

  localStorage.setItem("userAccount", JSON.stringify(userAccount));

  location.href = "../login/login.html";

  alert("회원가입을 완료하였습니다!");
});
