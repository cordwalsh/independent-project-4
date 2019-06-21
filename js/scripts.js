function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
var yourPizza;
var selectedToppings=[];



// //////////////////

$(document).ready(function () {
  $('form#toppings-dropdown').submit(function(event){
    event.preventDefault();
      var selectedSize = $("#title").val();
      var selectedCheese = parseInt($("#selectedCheese").val());
      var selectedPepperoni = parseInt($("#selectedPepperoni").val());
      var selectedSausage = parseInt($("#selectedSausage").val());
      var selectedMushrooms = parseInt($("#selectedMushrooms").val());
      var selectedOlives = parseInt($("#selectedOlives").val());
      var selectedOnions = parseInt($("#selectedOnions").val());
      var selectedPeppers = parseInt($("#selectedPeppers").val());
      var selectedPineapple = parseInt($("#selectedPineapple").val());
      var selectedAnchovy = parseInt($("#selectedAnchovy").val());
      yourPizza = new Pizza (selectedSize, selectedToppings);
      $.each($("input[name='topping']:checked"), function(){
        selectedToppings.push($(this).val());
      });
      // selectedToppings = [selectedCheese,selectedPepperoni,selectedSausage,selectedMushrooms,selectedOlives,selectedOnions,selectedPeppers,selectedPineapple,selectedAnchovy];
      // var
      console.log(selectedSize)
      console.log(selectedToppings)
});
});
