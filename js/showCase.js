import data from "./data.js";

$(".bestseller ul li").hover(function () {
  const text = $(this).text();
  //   const img = $('.show-case-img .image').attr("src");
  //   console.log(text);
  //   console.log(img);
  const found = data.find(function (item) {
    return item.name === text;
  });
  //   const img = $(this).attr();
  //   const found = data.find(function (item) {
  //     return item.name === img;
  //   });

  console.log(found);

  $(".main").text(found.name);
  $(".lineup").text(found.lineUp);
  $(".price").text(found.price);
  $(".image").attr({ src: `../source/index/${found.img}` });
});
