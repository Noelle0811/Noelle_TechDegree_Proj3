console.log('Hello Noelle')

//$(document).ready(function() {

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
        nodeJS.prop("disabled", true);
        nodeJS.parent().addClass("disabled");
        nodeJS.parent().append();
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

  //paypal and bitcoin
  const $paypal = $("#credit-card").next("div");
  const $bitcon = $("#credit-card")
    .next("div")
    .next("div");

    //hiding and showing 
    $("#payment").change(function() {
        if (this.value == "credit card") {
          $("#credit-card").show();
          $($paypal).hide();

    //input can not be blank
    $("input[name=user_name]").on("input", function(event) {
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
      }


