let temp = location.href.split("?");
let detail = decodeURI(temp[1]).split("&");
console.log(detail);

let sizeArr = detail[3].split(",");
let priceArr = detail[2].split(",");

let size = `<select name="size">`;
sizeArr.forEach((value) => {
  size += `<div><option value="${value}">${value}</option></div>`;
});
size += `</select>`;

let prdInfo = `<div class="prdInfo">`;
prdInfo += `<div class="image"><img src="./source/detail/${detail[4]}" alt="${detail[0]}"></div>`;
prdInfo += `<ul>`;
prdInfo += `<li class="name">${detail[0]}<li>`;
prdInfo += `<li class="lineup">${detail[1]}<li>`;
prdInfo += `<li class="price">${
  priceArr[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"
}</li>`;
prdInfo += `<li class="size">${size}</li>`;
prdInfo += `<li class="quantity">`;
prdInfo += `<div class="qty__form">`;
prdInfo += `<button type="button" class="qty__minus">-</button>`;
prdInfo += `<input type="text" value="1" autocomplete="off" class="qty__input">`;
prdInfo += `<button type="button" class="qty__plus">+</button>`;
prdInfo += `</div> `;
prdInfo += ` </li>`;
prdInfo += `<li><button type="submit" class="cart">장바구니에 추가하기</button></li>`;
prdInfo += `</ul>`;
prdInfo += `</div>`;
$(".detailBox .prdInfo").remove();
$(".detailBox").append(prdInfo);

//qtyform
let quantity = 1;
$(".qty__minus").click(function () {
  quantity = $(".qty__input").val();
  if (quantity > 1) {
    quantity = parseInt(quantity);
    $(".qty__input").val(--quantity);
  } else {
    quantity = 1;
    $(".qty__input").val(quantity);
  }
});
$(".qty__plus").click(function () {
  if (quantity > 0) {
    quantity = parseInt(quantity);
    $(".qty__input").val(++quantity);
  } else {
    quantity = 1;
    $(".qty__input").val(quantity);
  }
});
$("body").on("keyup", ".qty__input", function () {
  const a = $(".qty__input").val();
  $(this).val(a);
});
$("body").on("submit", ".prdInfo", function () {
  let sizeValue = "";
  $('input[name="size"]').each(function () {
    if ($(this).prop("checked")) {
      sizeValue = $(this).val();
    }
    if (!sizeValue) {
      alert("사이즈를 선택하세요");
      return false;
    }
  });
  let newItem = {
    name: detail[0],
    lineup: detail[1],
    size: sizeValue,
    price: price,
    quantity: quantity,
  };
  let itemList = JSON.parse(localStorage, getItem("allItem"));
  if (itemList == null) {
    let itemList = [];
  }
  itemList.push(newItem);
  localStorage.setItem("allItem", JSON.stringify(itemList));
  return false;
});
$("body").on("submit", ".prdInfo", function (e) {
  e.preventDefault();
  console.log($("select[name=size]").val());
  let btn_class = $(document.activeElement).attr("class");
  // console.log(btn_class);
  if (btn_class == "cart") {
    location.href = "https://localhost:5500/cart.html";
  } else {
    location.href = "https://localhost:5502/buy.html";
  }
});
$("body").on("change", "select[name=size]", function () {
  let a = $("select[name=size] option:selected").index();
  console.log(a);
  $(".price").text(
    priceArr[a].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"
  );
});
sizeValue = $("select[name=size] option:selected").val();

$("body").on("submit", ".cart", function () {
  let newItem = {
    name: detail[0],
    lineup: detail[1],
    price: price,
    size: sizeValue,
    quantity: quantity,
    image: detail[4],
  };
  let itemList = JSON.parse(localStorage.getItem("allItem")) || [];
  if (itemList == null) {
    let itemList = [];
  }
  itemList.push(newItem);
  localStorage.setItem("allItem", JSON.stringify(itemList));
  console.log(itemList);
  return false;
});

$("body").on("submit", ".prdInfo", function (e) {
  e.preventDefault();
  let btn_class = $(document.activeElement).attr("class");
  let itemList = JSON.parse(localStorage.getItem("allItem")) || [];

  if (btn_class == "cart") {
    location.href = "./cart.html";
  } else {
    location.href = "https://localhost:5502/buy.html";
  }
});
