function usedata(pname) {
  let newdata = data.filter((value) => value.name == pname);
  console.log(newdata);

  let ulli = `<ul>`;
  newdata.forEach((value) => {
    ulli += `<li>`;
    ulli += `<div class="list row">`;
    ulli += `<a href="../detail/detail.html?${value.name}&${value.lineup}&${value.price}&${value.size}&${value.image}">`;
    ulli += `<img src="../source/detail/${value.image}" alt="${value.name}"/>`;
    ulli += `<p class="name">${value.name} ${value.size[0]}</p>`;
    ulli += `<p class="lineup">${value.lineup}</p>`;
    ulli += `<p class="price">${value.price[0]
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원부터</p>`;
    ulli += `</a>`;
    ulli += `<button type="button" class="cart" data-name="${value.name}" data-lineup="${value.lineup}" data-price="${value.price[0]}" data-image="${value.image}">장바구니에 추가하기</button>`;
    ulli += `</div>`;
    ulli += `</li>`;
  });
  ulli += `</ul>`;
  ulli += `<div class="undimg"><img src="../source/index/onemineur_800x1300.jpg" alt=""></div>`;
  $(".list ul").remove();
  $(".list").append(ulli);
  $("body").on("click", ".cart", function (e) {
    e.preventDefault();
    let quantity = 1;
    let newItem = {
      name: $(this).data("name"),
      lineup: $(this).data("lineup"),
      price: $(this).data("price"),
      quantity: quantity,
      image: $(this).data("image"),
    };
    let itemList = JSON.parse(localStorage.getItem("allItem")) || [];
    itemList.push(newItem);
    localStorage.setItem("allItem", JSON.stringify(itemList));

    let btn_class = $(this).attr("class");
    if (btn_class == "cart") {
      var addcart = confirm("장바구니로 이동 하시겠습니까?");
      if (addcart) {
        location.href = "../cart/cart.html";
      } else {
        return false;
      }
    }
  });
}

/* $(".list .subcate li").on("click", function () {
  $(this).addClass("on").siblings().removeClass("on");
  let text = $(this).text();
  usedata(text);
});
 */
