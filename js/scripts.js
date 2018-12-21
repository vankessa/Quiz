 $(document).ready(function() {
    var optionsRadios1 = $("input:radio[name=optionsRadios1]").val();
    var optionsRadios2 = $("input:radio[name=optionsRadios2]").val();
    var optionsRadios3 = $("input:radio[name=optionsRadios3]").val();
    var optionsRadios4 = $("input:radio[name=optionsRadios4]").val();
    var optionsRadios5 = $("input:radio[name=optionsRadios5]").val();
 });
    // for radio buttons; value="10" for correct, value="0" for wrong

//BUSINESS LOGIC : DRY CODE
var score = 0;
var complete = 0;
var calculate = function(){
  for (i = 1; i <= 5; i++) {
    var response = $("input:radio[name=optionsRadios"+i+"]:checked").val();
    score += parseInt(response);
    if (response != undefined) {
      complete += 1
    }
  } // end for
}// END BUSINESS LOGIC

// USER INTERFACE
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    calculate();
    var message = ""
    var remark =""
    if (complete === 5) {
      message = "Your score is:";
      $("#display").text(score+"%").fadeIn();
      if (score <= 20) {
        $("#remark").append("<img src='img/bad.jpeg' alt='Bad'>");
      } else if (score <= 60) {
        $("#remark").append("<img src='img/average.jpeg' alt='Average'>");
      } else if (score <= 80) {
        $("#remark").append("<img src='img/good.jpeg' alt='Good'>");
      } else {
        $("#remark").append("<img src='img/excelent.jpg' alt='Excellent!'>");
       
      }
    } else {
      alert ("Please answer all and submit again! " );
    }
    $("#message").text(message);
    $(".carousel").remove();
     $("button.bg-success").fadeOut("slow");
    $("div.your-score").slideUp(40);
    $("div.your-score").slideDown(2000);
  }) // end submit
}) //END USER INTERFACE
function reload() {
  location.reload();
}


