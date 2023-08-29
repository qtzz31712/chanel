import data from "../../js/data.js";
$(".bestseller ul li").hover(function () {
  const text = $(this).text();
  //   const img = $('.show-case-img .image').attr("src");
  //   console.log(text);
  const found = data.find(function (item) {
    return item.name === text;
  });

  console.log(found);

  $(".name").text(found.name);
  $(".lineup").text(found.lineUp);
  // const formattedPrice = found.price.toLocaleString();
  // $(".price").text(`${formattedPrice}원`);
  $(".price").text(found.price);
  $(".show-case-img .image").attr("src", `./source/index/${found.img}`);
});
