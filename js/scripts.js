$(document).ready(function(){

  $("#blanks form").submit(function(event) {
    var adresseeInput = $("input#adressee").val();
    var streetInput = $("input#street").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".adressee").text(adresseeInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $("#letter").show();

    event.preventDefault();
  });

var now = new Date();
var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
function fourdigits(number) {
    return (number < 1000) ? number + 1900 : number;
  }
today =  months[now.getMonth()] + " " +
         date + ", " +
         (fourdigits(now.getYear())) ;
document.getElementById("date").innerHTML = today;



});
