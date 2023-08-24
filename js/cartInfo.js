let cartList = JSON.parse(localStorage.getItem("allItem"));

function listing() {
  if (cartList.length) {
    $(".cartInfo div").text("");
    let ulli = `<ul class="individual-info">`;
    ulli += `<li>`;
    ulli += `<img src="./source/detail/${value.image}" alt="${value.name}+${value.lineup}">`;
    ulli += `<div class="prdinfo">`;
    ulli += `<span>${value.name}</span>`;
    ulli += `<p>${value.lineup}<p>`;
  }
}
