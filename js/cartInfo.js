let cartList = JSON.parse(localStorage.getItem("allItem"));

function listing() {
  if (cartList.length) {
    cartList.forEach((value, index) => {
      $(".cartInfo div").text("");
      let ulli = `<ul class="individual-info">`;
      ulli += `<li>`;
      ulli += `<img src="./source/detail/${value.image}" alt="${value.name}+${value.lineup}">`;
      ulli += `<div class="prdinfo">`;
      ulli += `<span>${value.name}</span>`;
      ulli += `<p>${value.lineup}<p>`;
      ulli += `<p>${value.size}<p>`;
      ulli += `<p>${value.price}</p>`;
      ulli += `</div>`;
      ulli += `<div class="option">`;
      ulli += `<select name="size" class="size-select">`;
    });
  }
}
