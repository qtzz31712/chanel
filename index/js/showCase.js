import data from "../../js/data.js";
let found = {
  name: "가브리엘 샤넬",
  lineUp: "에쌍스 드 빠르펭",
  price: 255500,
  img: "gabrielle-chanel.jpg",
};
$(".bestseller ul li").hover(function () {
  const text = $(this).text();
  //   const img = $('.show-case-img .image').attr("src");
  //   console.log(text);
  found = data.find(function (item) {
    return item.name === text;
  });

  // console.log(found);

  $(".name").text(found.name);
  $(".lineup").text(found.lineUp);
  // const formattedPrice = found.price.toLocaleString();
  // $(".price").text(`${formattedPrice}원`);
  $(".price").text(
    found.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  );

  $(".show-case-img .image").attr("src", `./source/index/${found.img}`);
});
let quantity = 1;
$("body").on("click", ".cart_btn", function (e) {
  e.preventDefault();

  let newItem = {
    name: found.name,
    lineup: found.lineUp,
    price: parseInt(found.price),
    quantity: quantity,
    image: found.img,
  };
  console.log(newItem);
  debugger;
  let itemList = JSON.parse(localStorage.getItem("allItem")) || [];
  itemList.push(newItem);
  localStorage.setItem("allItem", JSON.stringify(itemList));

  let btn_class = $(this).attr("class");
  if (btn_class == "cart_btn") {
    location.href = "./cart/cart.html";
  } else {
    location.href = "https://localhost:5502/buy.html";
  }
});
