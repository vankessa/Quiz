$(document).ready(function() {
    var optionsRadios1 = $("input:radio[name=optionsRadios1]:checked").val();
    var optionsRadios2 = $("input:radio[name=optionsRadios2]:checked").val();
    var optionsRadios3 = $("input:radio[name=optionsRadios3]:checked").val();
    var optionsRadios4 = $("input:radio[name=optionsRadios4]:checked").val();
    var optionsRadios5 = $("input:radio[name=optionsRadios5]:checked").val();
    $("#radioButtons form").submit(function(event) {
        var radioButtons = ['optionsRadios6','optionsRadios7','optionsRadios8','optionsRadios9','optionsRadios10','optionsRadios11',];
  
        radioButtons.forEach(function(radioButton) {
          var userInput = $("input#" + radioButton).val();
          $("." + radioButton).text(userInput);
        });
  
        $("#marks").show();
  
        event.preventDefault();
      });
    });
    
//    $('form').submit(function(event) {
//        event.preventDefault();

//         var firstNumber = parseInt($('#first-number').val());
//         var secondNumber = parseInt($('#second-number').val());

//         var sum = add(firstNumber, secondNumber);

//         $('#result').text(sum);
//    })


