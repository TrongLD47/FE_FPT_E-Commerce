 // -----------------for-Shopping-cart-------------
 $(document).ready(function () {
  update_amounts();
  $('.qty, .price').on('keyup keypress blur change', function (e) {
      update_amounts();
  });
});
function update_amounts() {
  var sum = 30.000;
  $('.order-box__mid').each(function () {
      var qty = $(this).find('.qty').val(parseInt($('.qty').text()));
      var price = $(this).find('.price').val(parseInt($('.price').text()));
      var amount = (qty * price);
      sum += amount;
      $(this).find('.amount').text('' + amount);
  });
  $('.total').text(sum);
}

//----------------for quantity-increment-or-decrement-------
var incrementQty;
var decrementQty;
var plusBtn = $(".plus");
var minusBtn = $(".minus");
var incrementQty = plusBtn.click(function () {
  var $n = $(this)
      .parent(".button-container")
      .find(".qty");
  $n.val(Number($n.val()) + 1);
  update_amounts();
});

var decrementQty = minusBtn.click(function () {
  var $n = $(this)
      .parent(".button-container")
      .find(".qty");
  var QtyVal = Number($n.val());
  if (QtyVal > 0) {
      $n.val(QtyVal - 1);
  }
  update_amounts();
});

