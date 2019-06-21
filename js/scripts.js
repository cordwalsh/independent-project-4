function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
var yourPizza;
var selectedToppings=[];
var selectedSize=[];

Pizza.prototype.completedPizza = function() {
  return this.size + " " + this.toppings;
}
function amountTotal(amount) {
  var total = 0;
  console.log(selectedToppings);
  for (i = 0; i < selectedToppings.length; ++i) {
    total += parseInt(selectedToppings[i]);
  }
  var total2 = 0;
  for (i-0; i < selectedSize.length; ++i) {
    total2 += parseInt(selectedSize[i]);
  }
  console.log(total);
  console.log(total2);
  return total;
}


// //////////////////

$(document).ready(function () {
  $('form#toppings-dropdown').submit(function(event){
    event.preventDefault();
      var selectedSize = $("#selectedSize").val();
      // var selectedApollo = ($("#selectedApollo".val());
      // var selectedOrion = ($("#selectedOrion".val());
      // var selectedBfr = ($("#selectedBfr".val());
      // var selectedIss = ($("#selectedIss".val());
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
      $(".pizzaTotal").text(amountTotal);
      console.log(selectedSize)
      console.log(selectedToppings)
      console.log(yourPizza)

});
});
