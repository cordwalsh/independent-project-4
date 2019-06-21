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
      var selectedCheese = $("#selectedCheese").val();
      var selectedPepperoni = $("#selectedPepperoni").val();
      var selectedSausage = $("#selectedSausage").val();
      var selectedMushrooms = $("#selectedMushrooms").val();
      var selectedOlives = $("#selectedOlives").val();
      var selectedOnions = $("#selectedOnions").val();
      var selectedPeppers = $("#selectedPeppers").val();
      var selectedPineapple = $("#selectedPineapple").val();
      var selectedAnchovy = $("#selectedAnchovy").val();
      yourPizza = new Pizza (selectedSize, selectedToppings);
      selectedToppings = [selectedCheese,selectedPepperoni,selectedSausage,selectedMushrooms,selectedOlives,selectedOnions,selectedPeppers,selectedPineapple,selectedAnchovy];
      // var
      console.log(selectedSize)
      console.log(selectedToppings)
});
});
