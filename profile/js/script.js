const userAccount = JSON.parse(localStorage.getItem("userAccount"));
const logindUser = JSON.parse(sessionStorage.getItem("logindUser"));

if (!logindUser) {
  alert("로그인을 하지 않았습니다!.");
  location.href = "../../index.html";
}

const $h2Ele = $(".welcome__content h2");
$h2Ele.text(`${logindUser.firstName}님 환영합니다!`);

const {
  id,
  email,
  password,
  gender,
  firstName,
  lastName,
  nickName,
  tellHyphen,
} = logindUser;

$("#user__gender").attr({ value: gender });
$("#user__first__name").attr({ value: firstName });
$("#user__last__name").attr({ value: lastName });
$("#user__email").attr({ value: email });
$("#user__tell").attr({ value: tellHyphen });

function getCurrentUserIndex(id) {
  const userAccount = JSON.parse(localStorage.getItem("userAccount"));
  const currentUser = userAccount.find((user) => user.id === id);

  const index = (currentUser.id -= 1);
  return index;
}

$("#update__profile").on("click", function () {
  const userGender = $("#user__gender").val();
  const userFirstName = $("#user__first__name").val();
  const userLastName = $("#user__last__name").val();

  const index = getCurrentUserIndex(id);
  const modify = userAccount[index];

  modify.gender = userGender;
  modify.firstName = userFirstName;
  modify.lastName = userLastName;

  alert("프로필 수정이 완료되었습니다.");
});

$("#update__contact").on("click", function () {
  const userEmail = $("#user__email").val();
  const userTell = $("#user__tell").val();

  const index = getCurrentUserIndex(id);
  const modify = userAccount[index];

  modify.email = userEmail;
  modify.tellHyphen = userTell;

  alert("연락처 수정이 완료되었습니다.");
});

$("#update__password").on("click", function () {
  const $userPasswordEle = $("#user__password").val();
  alert("비밀번호 수정이 완료되었습니다.");
});
