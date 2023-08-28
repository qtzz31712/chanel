const formEle = $("form").children().toArray();

const settingStyle = (style, ele, eleStyle) => {
  eleStyle.visibility = style;
  ele.css({ ...eleStyle });
};

formEle.forEach((element) => {
  const $inputEle = $(element).children("input");
  const $lineEle = $inputEle.closest(".text__form").find("label .line");
  const $messageEle = $inputEle.closest(".text__form").find("label .message");
  const $lineEleStyle = { visibility: $lineEle.css("visibility") };

  $inputEle.focus(() => settingStyle("visible", $lineEle, $lineEleStyle));
  $inputEle.blur(() => settingStyle("hidden", $lineEle, $lineEleStyle));

  $inputEle.on("keyup", function () {
    const placeholderAttr = $(this).attr("placeholder");
    $messageEle.text(placeholderAttr);

    if ($(this).val().length === 0) {
      $messageEle.text("");
    }
  });
});

$("#user__id").focus();
