console.log('Hello Noelle')

//error messages
function inputErrMessage(element, errMsg, errMsgClass) {
    element.css('border', '2px solid red');
    $(errMsg).css('color', 'red').insertBefore(element);
    element.prev().attr('class', errMsgClass);
  };
  
  function removeEmptyErrMsg(emptyMsgElement, errMsgElement, element) {
    emptyMsgElement.remove();
    if (errMsgElement) {
        errMsgElement.remove();
        element.css('border', 'none');
      }
    };

    //focus on first text field "Name"
    $("#name").focus();

// in the job role section hiding the 'other' option that was added 
    let inputOther = document.getElementById("other-title");
    inputOther.style.display ="none";

// when the 'other' is selected show the text feild 
    $("#title").change(function(e) { 
        const selected = event.target.value;
        if (selected == "other") {
            $("#other-title").show();
        } else { 
            $("other-title").hide();
        }
    })


//T-Shirt
//no options are shown when page loads
$("#color")
    .find("option")
    .remove();

    $("#color").append(
        '<option value="shirt-menu">Please select a T-shirt theme</option>'
      );
      

      //in the Design section, show only the color options that match
      const toggleDropDown = () => {
        $("#color")
          .find("option")
          .remove();
        if ($("#design").val() == "js puns") {
          $("#color").append(
            '<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>'
          );
          $("#color").append(
            '<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>'
          );
          $("#color").append(
            '<option value="gold">Gold (JS Puns shirt only)</option>'
          );
        }
        if ($("#design").val() == "heart js") {
          $("#color").append(
            '<option value="tomato">Tomato (I &#9829; JS shirt only)</option>'
          );
          $("#color").append(
            '<option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>'
          );
          $("#color").append(
            '<option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>'
          );
        }
      };
      $("#design").change(toggleDropDown);
     

//Activity Section
const jsFrameworks = $("input[name='js-frameworks'");
const jsLibraries = $("input[name='js-libs']");
const express = $("input[name='express']");
const node = $("input[name='node']");
var totalCost = 0;
$('.activities').append('<div id="total"></div>');
var updateCost = function (cost) {
    totalCost += cost;
    document.getElementById("total").innerHTML = "Total: $" + totalCost;
};
$("input[name='all']").change(function () {
    if ($(this).prop("checked")) {
        updateCost(200);
    } else {
        updateCost(-200);
    }
});

//if jsFramework is picked, make the rest not work/show
jsFrameworks.change(function () {
    if ($(this).prop("checked")) {
        express.prop("disabled", true);
        express.parent().addClass("disabled");
        express.parent().append()
        updateCost(100);
    } else {
        express.prop("disabled", false);
        express.parent().removeClass("disabled");
        express.parent().find('.unavailable').remove();
        updateCost(-100);
    }
});

//if jsLibraries is picked, make the rest not work/show
jsLibraries.change(function () {
    if ($(this).prop("checked")) {
        node.prop("disabled", true);
        node.parent().addClass("disabled");
        node.parent().append();
        updateCost(100);
    } else {
        nodeJS.prop("disabled", false);
        nodeJS.parent().removeClass("disabled");
        nodeJS.parent().find('.unavailable').remove();
        updateCost(-100);
    }
});

// if express is picked make the rest not work/show
express.change(function () {
    if ($(this).prop("checked")) {
        jsFrameworks.prop("disabled", true);
        jsFrameworks.parent().addClass("disabled"); 
        jsFrameworks.parent().append();
        updateCost(100);
    } else {
        jsFrameworks.prop("disabled", false);
        jsFrameworks.parent().removeClass("disabled");
        jsFrameworks.parent().find('.unavailable').remove();
        updateCost(-100);
    }
});

//if node is picked, make the rest not work/show
node.change(function () {
    if ($(this).prop("checked")) {
        jsLibraries.prop("disabled", true);
        jsLibraries.parent().addClass("disabled"); 
        jsLibraries.parent().append();
        updateCost(100);
    } else {
        jsLibraries.prop("disabled", false);
        jsLibraries.parent().removeClass("disabled");
        jsLibraries.parent().find('.unavailable').remove();
        updateCost(-100);
    }
});

//
$("input[name='build-tools']").change(function () {
    if ($(this).prop("checked")) {
        updateCost(100);
    } else {
        updateCost(-100);
    }
});
$("input[name='npm']").change(function () {
    if ($(this).prop("checked")) {
        updateCost(100);
    } else {
        updateCost(-100);
    }
});

//payment Info 
//the credit-card is the default 
$("#payment").ready(function() {
    $('select option:contains("Credit Card")').prop("selected", true);
  });

//   //paypal and bitcoin
//   const $paypal = $("#credit-card").next("div");
//   const $bitcon = $("#credit-card")
//     .next("div")
//     .next("div");

//     //hiding and showing 
//     $("#payment").change(function() {
//         if (this.value == "credit card") {
//           $("#credit-card").show();
//           $($paypal).hide();
//         }
//     });
    

    //input can not be blank
    $("input[name=user_name]").on("input", function() {
        nameValidation();
      });
     
      function nameValidation() {
        const name = $("#name").val();
        if (name.length < 1) {
          $("#name")
            .after('<span class="error-message">This field is required')
            .addClass("invalid");
          $(".error-message").addClass("error-text");
        } else {
          $("#name")
            .addClass("valid")
            .removeClass("invalid");
          $(".error-message").remove();
        }
    };

//Payment Section
//hiding the paypal and bitcoin div
// $("#paypal").hide(); 
//   $("#bitcoin").hide(); 
//   $('#payment option[value="select method"]')
//     .attr("disabled", true)
//     .attr("selected", false); 
//   $('#payment option[value="Credit Card"]').attr("selected", true);

  $("#payment").on("change", event => {
    const isSelected = event.target;
    const paymentMethod = isSelected.value; 
    if (paymentMethod === "Credit Card") {
         $("#credit-card").show();
      // hide the "paypal" and "bitcoin" div if credit card is ===
         $("#paypal").hide(); 
         $("#bitcoin").hide();
    } else if (paymentMethod === "PayPal") {
        $("#credit-card").hide();
        //hide the "Credit Card" and "bitcoin" div if === paypal
        $("#paypal").show(); 
        $("#bitcoin").hide();
    } else {
        $("#credit-card").hide();
        //hide the "paypal" and "Credit Card" div if === bitcoin
        $("#paypal").hide(); 
        $("#bitcoin").show();
    }
  });


//credit-card
function creditCardPayment() {                                                                          // Everything about the credit card payment section, and the zip code, and cvv code validations share the same logic as the name and the email validations, just with the proper id's for the relevent elements. 
        const creditCard = /\d{13,16}$/
        if (creditCard.test($('#credit').val())) {
            $('#credit').prev().text("Name:").css('color', 'black');
            return true;
        } else {
            $('#credit').prev().text("Please enter a valid Name.").css('color', 'red');
        }
    }
    $('#credit').on('blur', () => {
        creditCardPayment();
    });

 //zip code
 function zipCode() {
    const zipNum = /\d{5}$/
    if (zipNum.test($('#zip').val())) {
        $('#zip').prev().text("Zip Code:").css('color', 'black');
        return true;
    } else {
        $('#zip').prev().text("Please enter a valid zip code.").css('color', 'red');
    }
}
$('#zip').on('blur', () => {
    zipCode();
});

//cvv code
function cvvCode() {
    const cvvNum = /\d{3}$/
    if (cvvNum.test($('#cvv').val())) {
        $('#cvv').prev().text("CVV:").css('color', 'black');
        return true;
    } else {
        $('#cvv').prev().text("Please enter a valid cvv code.").css('color', 'red');
    }
}
$('#cvv').on('blur', () => {
    cvvCode();
});

//last call for functions
$('form').on('submit', () => {
    if ($('#payment').val() === 'credit card'){                                                                     // here I used a set of nested if statements that basically separate my validations to only validate the necessary fields that are necessary for the users preferred method of payment. 
        if (userName() & userEmail() & userActivity() & creditCardPayment() & zipCode() & cvvCode()) {
            return true;
        } else {event.preventDefault(); // if the conditions are not met if the user chosese to pay with a credit card, then the page will not load. 
        }
    }  
        if(($('#payment').val() === 'paypal' || 'bitcoin')){
            if(userName() & userEmail() & userActivity()){
                    return true
                } else { 
                    event.preventDefault();
                
                }
        }
    });

    function isValidCreditCard() {
        const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
        const value = $(`#${id}`).val();
        const label = $(`label[for="${id}"]`);
        const isValid = value !== '' && regex.test(value);
            if ($('#payment').val() === 'paypal' || $('#payment').val() === 'bitcoin') {
             return true;
        } else if ($('#payment').val() === 'credit card' && isValid) {
          markField($(`#${id}`), label, isValid);
             return true;
        } else if ($('#payment').val() === 'credit card' && !isValid) {
         markField($(`#${id}`), label, isValid);
             return false;
        } else if ($('#payment').val() === 'select_method' && !isValid) {
          markField($(`#${id}`), label, isValid);
             return false;
        } else if ($('#payment').val() === 'select_method' && isValid) {
          markField($(`#${id}`), label, isValid);
             return true;
        }
      }

    function markField(input, label, isValid) {
        if (!isValid) {
      input.css('border-color', 'red');
      label.css('color', 'red');
    } else {
      input.css('border-color', '#b0d3e2');
      label.css('color', 'black');
    }
  }

//paypal










//Email section
function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true);
    } else {
         return (false);
    }
  };
  
  $('#mail').on('keyup', function(e) {
    removeEmptyErrMsg($('.emptyMailMessage'), $('.mailMessage'), $('#mail'));
    //If invalid email address entered, you get error massage
        if (validateEmail($(e.target).prop('value')) === false) {
        const errMsg = '<p>Invalid email address</p>';
        inputErrMessage($('#mail'), errMsg, 'mailMessage');
    }
  });
