function usedata(pname) {
  let newdata = data.filter((value) => value.name == pname);
  console.log(newdata);

  let ulli = `<ul>`;
  newdata.forEach((value) => {
    ulli += `<li>`;
    ulli += `<div>`;
    ulli += `<a href="./detail.html?${value.name}&${value.lineup}&${value.price}&${value.size}&${value.image}">`;
    ulli += `<img src="./source/detail/${value.image}" alt="${value.name}"/>`;
    ulli += `<p class="name">${value.name}${value.size[0]}</p>`;
    ulli += `<p class="lineup">${value.lineup}</p>`;
    ulli += `<p class="price">${value.price[0]} 원부터</p>`;
    ulli += `</a>`;
    ulli += `<p>장바구니에 추가</p>`;
    ulli += `</div>`;
    ulli += `</li>`;
  });
  ulli += "</ul>";
  $(".list ul").remove();
  $(".list").append(ulli);
}

/* $(".list .subcate li").on("click", function () {
  $(this).addClass("on").siblings().removeClass("on");
  let text = $(this).text();
  usedata(text);
});
 */
