$("header").load("../header/header.html", function () {
  $("#search").on("click", function () {
    $("#my-form").toggleClass("invisible");
  });

  if (JSON.parse(sessionStorage.getItem("logindUser"))) {
    const $myPageEle = $("#my-page");
    const $logoutEle = $("#logout");

    $myPageEle.children("i").attr({ class: "fa-solid fa-user" });
    $myPageEle.parent("a").attr({ href: "../../profile/profile.html" });

    $logoutEle.attr({ style: "display: block; margin-left: 20px" });
    $logoutEle.on("click", function () {
      const result = confirm("로그 아웃 하시겠습니까?");

      if (result) {
        sessionStorage.clear();
        alert("로그아웃 되었습니다.");
        location.href = "../index.html";
      }
    });
    const $shopCartEle = $("#shopcart");

    $shopCartEle.children("i").attr({ class: "fa-solid fa-cart-shopping" });
  }
  $("#shopcart").on("click", function () {
    if (JSON.parse(sessionStorage.getItem("logindUser"))) {
      location.href = "../cart/cart.html";
    } else {
      alert("로그인이 필요한 기능입니다.");
      location.href = "../login/login.html";
    }
  });
});

$("footer").load("../footer/footer.html");
