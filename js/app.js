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

    //Name field error 
  const userName = document.getElementById('name');
  let name = false;
  userName.addEventListener('input', function(){
  
      let $nameReg = new RegExp('^[A-Za-z]*\\s?[A-Za-z]+$');
      const isValidName = $nameReg.test($('input#name').val())
      if(isValidName){
          $('input#name').css('color','black')
          name = true;
      } else {
          $('input#name').css('color','red')
      
      }
  
  })
// Job Field
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
// remove select theme option
//hides theme
$('#design :first-child').hide(); 
    $("#colors-js-puns").hide(); 
    $('#color option').each((i) => $('#color option').eq(i).hide()); 
    $('#color').prepend($('<option>').attr('selected', true).text('Please select a T-shirt theme'));
// listens to change event
    $('#design').on('change', () => {
        $("#colors-js-puns").show();
        $('#color option').each(function () {
            if ($(this).attr('selected')) {
                $(this).attr('selected', false);
            }
        });  
    });
    
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
        node.prop("disabled", false);
        node.parent().removeClass("disabled");
        node.parent().find('.unavailable').remove();
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

//total
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
//the credit-card is the default when the page loads show CC and hide paypal and bitcoin
$("#payment").ready(function() {
    $('select option:contains("Credit Card")').prop("selected", true);
    $("#paypal").hide(); 
    $("#bitcoin").hide();

  });

    //input can not be blank
    $("input[name=user_name]").on("input", function() {
        nameValidation();
      });
     //name valaidation
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
//payment info
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
function creditCardPayment() {                                                             
        const creditCard = /^[0-9]{13,16}$/       
        if (creditCard.test($('#cc-num').val())) {
            $('#cc-num').prev().text("Card Number:").css('color', 'black');
            return true;
        } else {
            $('#cc-num').prev().text("Please enter a valid Credit-Card number.").css('color', 'red');
        }
    }
    $('#cc-num').on('blur', () => {
        creditCardPayment();
    });
    

 //zip code
 function zipCode() {
    const zipNum = /^\d{5}$/       
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
    const cvvNum = /^\d{3}$/
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

// validation cc
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
  
  
  // error indications on invalid fields.
  const $button = $('button');
  $button.on('click', function(event){
      if($('input:checked').length === 0){
          event.preventDefault();
          $('.activities legend').css('color', 'red')
          alert(`Please choose 1 activity.`)
      }
      if(name === false){
          event.preventDefault();
          $('fieldset legend').first().css('color', 'red');
          alert(`Please enter a valid name`);
      }  
      if (validateEmail() !== true) {
          event.preventDefault();
          $('fieldset legend').first().css('color', 'red');
          alert(`Please enter a valid email`);
      } 
      
        //event.preventDefault();
       if (creditCardPayment() !== true) {
          event.preventDefault();
          $('fieldset legend').last().css('color', 'red');
          alert(`CreditCard must contain 13-16 digits`);
        }
        if (zipCode() !== true) {
            event.preventDefault();
            $('fieldset legend').last().css('color', 'red');
            alert(`Please enter 5 digit zipCode`);
        }
         if (cvvCode() !== true) {
            event.preventDefault();
            $('fieldset legend').last().css('color', 'red');
            alert(`Please enter a 3 digit cvvCode`);
    
        }
    });
       

//submit add eventListener

// const userCcNum = document.getElementById('name');
//   let ('#cc-num') = false;
//   userCcNum.addEventListener('input', function(){
  
//       let $nameReg = new RegExp('^[A-Za-z]*\\s?[A-Za-z]+$');
//       const isValidName = $nameReg.test($('input#cc-num').val())
//       if(isValidPayment){
//           $('input#cc-num').css('color','black')
//           name = true;
//       } else {
//           $('input#cc-num').css('color','red')
      
//       }
  
//   })

// document.getElementById("myBtn").addEventListener("click", '#cc-num');
// element.addEventListener("click", myFunction);

// function myFunction() {
//   alert ("Hello World!");
// }