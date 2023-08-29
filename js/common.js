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
      sessionStorage.clear();
      alert("로그아웃 되었습니다.");
      location.href = "../index.html";
    });
  }

  const shopCart = false;

  if (shopCart) {
    const $shopCartEle = $("#shopcart");

    $shopCartEle.children("i").attr({ class: "fa-solid fa-cart-shopping" });
    $shopCartEle.parent("a").attr({ href: "../shopCart.html" });
  }
});

$("footer").load("../footer/footer.html");
