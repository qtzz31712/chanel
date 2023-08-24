// let ulli = `<ul>`;
// list.forEach((value) => {
//   ulli += `<li>`;
//   ulli += `<a href="./detail.html?${value.name}&${value.price}&${value.image}&>`;
//   ulli += `<img src="./images/${value.image}" alt="${value.name}">`;
//   ulli += `<div class="info">`;
//   ulli += `<p class="name">${value.name}</p>`;
//   ulli += `<p class="price">${value.price}</p>`;
//   ulli += `</div>`;
//   ulli += `</a>`;
//   ulli += `</li>`;
// });
// ulli += "</ul>";

// $(".list").append(ulli);

$.ajax({
  url: "./data.json",
  data: params,
  success(res) {
    console.log(res);
  },
});
