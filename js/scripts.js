function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
var yourPizza;
var selectedToppings=[];
Pizza.prototype.amountTotal = function (selectedSize) {
  var total = 0;
  for (i = 0; i < selectedToppings.length; ++i) {
    total += parseInt(selectedToppings[i]);
  }
  return total + selectedSize;
}

// //////////////////

$(document).ready(function () {
  $('form#toppings-dropdown').submit(function(event){
    $("#results").show()
    event.preventDefault();
      var selectedSize = $("#selectedSize").val();
      var selectedCheese = ($("#selectedCheese").val());
      var selectedPepperoni = ($("#selectedPepperoni").val());
      var selectedSausage = ($("#selectedSausage").val());
      var selectedMushrooms = ($("#selectedMushrooms").val());
      var selectedOlives = ($("#selectedOlives").val());
      var selectedOnions = ($("#selectedOnions").val());
      var selectedPeppers = ($("#selectedPeppers").val());
      var selectedPineapple = ($("#selectedPineapple").val());
      var selectedAnchovy = ($("#selectedAnchovy").val());
      yourPizza = new Pizza (selectedSize, selectedToppings);
      $.each($("input[name='topping']:checked"), function(){
        selectedToppings.push($(this).val());
      });
      $(".pizzaTotal").text(yourPizza.amountTotal(parseInt(selectedSize)));
});
});
