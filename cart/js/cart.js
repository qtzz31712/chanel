let cartList = JSON.parse(localStorage.getItem("allItem"));
console.log(cartList);
function listing() {
  if (cartList.length) {
    $(".cartInfo p").text("");
    let total = 0;
    let trList = `<div class="tabpg"><table id="detail" border="1">
        <colgroup>
        <col>
        <col>
        <col>
        <col>
        <col>
    </colgroup>
    <thead class="thlist">
        <tr>
                <th></th>
                <th>상품정보</th>
                <th>수량</th>
                <th>금액</th>
                <th>삭제</th>
            </tr>
        </thead>`;
    trList += `<tbody>`;
    cartList.forEach((value, index) => {
      trList += `<tr>`;
      trList += `<td><img src="../source/detail/${value.image}" alt=""> </td>`;
      trList += `<td><span class="valname">${value.name}</span><br><span class="vallineup">${value.lineup}</span><span class="price" style="display:none">${value.price}</span></td>`;
      trList += `<td>
             <button type="button" class="bt__minus">-</button>
             <input type="text"  value="${value.quantity}" autocomplete="off" class="btinput">
            <button type="button" class="bt__plus">+</button>
             </td>`;
      trList += `<td><span class="total">${(value.quantity * value.price)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>원</td>`;
      trList += `<td><button type="button" class="remove"><i class="fa-solid fa-xmark"></i></button></td>`;
      trList += `</tr>`;
      total = total + value.quantity * value.price;
    });
    trList += `</tbody>`;
    trList += `<tfoot>
            <tr>
                <td colspan="5" class="prtotal">합계 :<span>${total
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span></td>
            </tr>
        </tfoot>
    </table>
    <ul id="impo">
            <li>
                <a href="javascript:;">
                <div><button type="button"><i class="fa-brands fa-cc-visa"></i>
                        <i class="fa-brands fa-cc-mastercard"></i></button></div>
                <div>결제안내</div>
                <div>카카오페이,신용카드와 직불카드,실시간계좌이체</div>
             </a>
            </li>
            <li>
                <a href="javascript:;">
                <div><button type="button">
                        <i class="fa-solid fa-truck-fast"></i></button></div>
                <div>배송 안내</div>
                <div>무료 배송 서비스</div>
            </a>
            </li>
            <li>
                <a href="javascript:;">
                <div><button type="button"><i class="fa-solid fa-box-open"></i></button></div>
                <div>품질보증기준</div>
                <div>교환 환불 정책 필수 확인</div>
            </a>
            </li>
            <li>
                <a href="javascript:;">
                <div><button type="button"><i class="fa-solid fa-box-open"></i></button></div>
                <div>교환 및 환불 정책</div>
                <div>7일 이내에 반품 또는 14일 이내에 교환 가능</div>
            </a>
            </li>
            <li>
                <a href="javascript:;">
                <div><button type="button"><i class="fa-solid fa-hand-holding-heart"></i></button></div>
                <div>매장 픽업</div>
                <div>온라인 방문 예약 후 픽업 추천</div>
            </a>
            </li>
            <li>
                <a href="javascript:;">
                <div><button type="button"><i class="fa-solid fa-mobile-screen-button"></i></button></div>
                <div>클라이언트 서비스 및 A/S</div>
                <div>카카오 상담 이용 가능</div>
            </a>
            </li>
    </ul>
    </div>`;
    trList += `<div class="order"><button type="button">결제하기</button></div>`;
    $(".cartBox .tabpg table").remove();
    $(".cartBox .tabpg ul").remove();
    $(".cartBox .tabpg +.order").remove();
    $(".cartBox").append(trList);
  } else {
    $(".cartBox .tabpg table").remove();
    $(".cartBox .tabpg ul").remove();
    $(".cartBox .tabpg +.order").remove();
    $(".cartInfo p").text("장바구니가 비어 있습니다.");
  }
}
listing();
$("body").on("click", ".bt__plus", function () {
  let quantity = parseInt($(this).prev().val());
  let myprice = parseInt($(this).parent().prev().find(".price").text());
  console.log(quantity);
  let total = 0;
  if (quantity) {
    $(this).prev().val(++quantity);
    totalformat = quantity * myprice;
  } else {
    quantity = 1;
    $(this).prev().val(++quantity);
    totalformat = quantity * myprice;
  }
  $(this)
    .parent()
    .next()
    .find(".total")
    .text(totalformat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  mytotal();
});

$("body").on("click", ".bt__minus", function () {
  let quantity = parseInt($(this).next().val());
  if (quantity > 1) {
    let myprice = parseInt($(this).parent().prev().find(".price").text());
    console.log(quantity);
    $(this).next().val(--quantity);
    totalformat = quantity * myprice;
  } else {
    quantity = 1;
    $(this).next().val(quantity);
    totalformat = quantity * myprice;
  }
  $(this)
    .parent()
    .next()
    .find(".total")
    .text(totalformat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

  mytotal();
});

$("body").on("keyup", ".btinput", function () {
  let quantity = $(this).val();
  let myprice = parseInt($(this).parent().prev().find(".price").text());
  if (quantity) {
    quantity = parseInt(quantity);
    $(this).val(quantity);
    let totalformat = quantity * myprice;
    $(this)
      .parent()
      .next()
      .find(".total")
      .text(totalformat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

    mytotal();
  }
});

function mytotal() {
  let total = 0;
  $(".tabpg tbody .total").each(function (index, value) {
    let rep = $(this).text();
    let regex = /[^0-9]/g;
    total += parseInt(rep.replace(regex, ""));
  });
  let endtotal = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
  $(".prtotal span").text(endtotal);
}

$("body").on("click", "tbody .remove", function () {
  let trnum = $(this).parents("tr").index();
  // console.log(trnum)
  cartList.splice(trnum, 1);
  localStorage.setItem("allItem", JSON.stringify(cartList));
  listing();
});

$("body").on("click", ".order button", function () {
  let myid = sessionStorage.getItem("userid");
  if (!myid) {
    alert("로그인 후 구매할 수 있습니다.");
    location.href = "./login.html";
  } else {
    location.href = "./buy.html";
    localStorage.clear();
  }
});
