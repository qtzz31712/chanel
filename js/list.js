let data = "";
$.ajax({
  type: "GET",
  url: "./js/data.json",
  dataType: "json",
  success: function (rdata) {
    // console.log(rdata)
    data = rdata.man;
    // console.log(data)
  },
  error: function (xhr) {
    alert(xhr.status + "/" + xhr.errorText);
  },
});
document.write('<script src="./js/prdlist.js"></script>');
