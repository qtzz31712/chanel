let temp = location.href.split("?");
let detail = decodeURI(temp[1]).split("&");
console.log(detail);

let sizeArr = detail[3].split(",");
let priceArr = detail[2].split(",");

let size = `<select name="size">`;
sizeArr.forEach((value) => {
  size += `<option value="${value}">${value}</option>`;
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
$("body").on("change", "select[name=size]", function () {
  let a = $("select[name=size] option:selected").index();
  console.log(a);
  $(".price").text(
    priceArr[a].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"
  );
});
let sizeValue = $("select[name=size] option:selected").val();
$("body").on("click", ".cart", function (e) {
  e.preventDefault();
  let newItem = {
    name: detail[0],
    lineup: detail[1],
    price: priceArr[0],
    size: sizeValue,
    quantity: quantity,
    image: detail[4],
  };

  let itemList = JSON.parse(localStorage.getItem("allItem")) || [];
  itemList.push(newItem);
  localStorage.setItem("allItem", JSON.stringify(itemList));

  let btn_class = $(this).attr("class");
  if (btn_class == "cart") {
    location.href = "./cart.html";
  } else {
    location.href = "https://localhost:5502/buy.html";
  }
});
