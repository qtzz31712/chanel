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
    ulli += `<p class="price">${value.price[0]}원부터</p>`;
    ulli += `</a>`;
    ulli += `</div>`;
    ulli += `</li>`;
  });
  ulli += `</ul>`;
  ulli += `<div class="undimg"><img src="../source/index/onemineur_800x1300.jpg" alt=""></div>`;

  $(".list ul").remove();
  $(".list").append(ulli);
}

/* $(".list .subcate li").on("click", function () {
  $(this).addClass("on").siblings().removeClass("on");
  let text = $(this).text();
  usedata(text);
});
 */
