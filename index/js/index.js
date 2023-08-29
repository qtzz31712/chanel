let quantity = 1;
$("body").on("click", ".cart_btn", function (e) {
  e.preventDefault();

  let name = $(this).closest(".showCase").find(".name");
  let lineup = $(this).closest(".showCase").find(".lineup");
  let price = $(this).closest(".showCase").find(".price");
  let img = $(this).closest(".showCase").find(".image").attr("src");

  let newItem = {
    name: name.text(),
    lineup: lineup.text(),
    price: parseInt(price.text()),
    quantity: quantity,
    image: img,
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
