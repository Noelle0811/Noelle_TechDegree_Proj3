
//my const var's


const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const $shirtDesign = $("#design");
const $shirtColor = $("#colors-js-puns")
const $express = $('input[name="express"]');
const $selectMethod = $('#select-Method');
const $workShop = $('input[name="js-workshop"]');
const $selectTheme = $('#select-theme');
const $otherTitle = $('#other-title');
const $jsLibraries = $('input[name="js-libraries"]');
const $node = $('input[name="node"]');
const $jsFrameworks = $('input[name="js-frameworks"]');
const $expressWorkShop = $('input[name="express"]');
const $workShop = $('input[name="node"]');
const $paypal = $('#paypal');
const $bitcoin = $('#bitcoin');
const $creditCard = $('#credit-card')




//focus by default.
$('#name').focus();
//is JS is disabled hide the text feild 
$("#other-title").hide();

//Name:
function validateName() {
    if($('name').prop('value')) {
        return (false);
    } else {
        return (true);
    }
}

/***********************************/
            //Job Role//
/************************************/
//text will show when "other" is selected
$('#title').on('click', function(e){   
//if other is picked
    if (e.target.value === 'other') {
        $('#other').show();
    } else {
//if "other" is not picked
        $('#other').hide();
    }
});
/*************** */
    //T-Shirt Info Section
/*************** */
//to show the color options that are in the design menu, if the user picks Js puns or 
//I love JS in the menu it will only display what is picked
$shirtColor.hide();
$($shirtDesign).change(function(){
    if ($shirtDesign.val() === "js puns"){
        $shirtColor.show();
        $('#color option[value="cornflowerblue"]').show();
        $('#color option[value="darkslategray"]').show();
        $('#color option[value="gold"]').show();
        $('#color option[value="tomato"]').show();
        $('#color option[value="steelblue"]').show();
        $('#color option[value="dimgray"]').show();
    } else {
        if ($shirtDesign.val() === "heart js") {
            $shirtDolor.show();
            $('#color option[value="cornflowerblue"]').show();
            $('#color option[value="darkslategray"]').show();
            $('#color option[value="gold"]').show();
            $('#color option[value="tomato"]').hide();
            $('#color option[value="steelblue"]').hide();
            $('#color option[value="dimgray"]').hide();
        }
    }
});

//select theme is disabled 
$(function() {
    $selectTheme.prop("disabled", true);
});

//********************************** */
   //Register for Activities section
//********************************** */
// If the user selects a workshop, don't allow selection of a workshop at the same day and time
//disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
//When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
//As a user selects activities, a running total should display below the list of checkboxes
$workShop.change(function() {
    if ($(this).is(':checked')) {
        $express.prop('disabled', true);
    } else {
        $express.prop('disabled', false);
    }
});

//work-shop js
$jsFrameworks.change(function {
    if ($(this).is(':checked')) {
        $expressWorkShop.prob('disabled, true');
    } else {
        Work.prop('disabled', false);
    }
});

$jsLibraries.change(function(){
    if ($(this).is(':checked')) {
        $node.prop('disabled', true);
    } else {
        $node.prop('disabled', false);
    }
});

$expressWorkShop.change(function() {
    if ($(this).is(':checked') {
        $jsFrameworks.prop('disabled', true);
    } else {
        $jsFrameworks.prop('disabled', false);
    }
});

$node.change(function() {
    if ($(this).is(':checked') {
        $jsLibraries.prop('disabled', true);
    } else {
        $jsLibraries.prop('disabled', false);
    }
});


//****************************** */
         //Payment info
 //***************************** */

//creditcard will be selected first
$paymentOPtions[0].selectIndex = 1;
 //lets hide  paypal and bitcoin when loaded
 $paypal.hide();
 $bitcoin.hide();
//Display payment sections based on the payment option chosen in the select menu.
//When a user selects the "PayPal" payment option, the PayPal information should display, and the credit card and “Bitcoin” information should be hidden.
//When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.
$(paymentOPtions).change(function() {
    if ($(this).val() === "credit card") {
        $creditCard.show();
    } else {
        $creditCard.hide();
    }

if ($(this).val() === "paypal") {
    $paypal.show();
} else {
    $paypal.hide();
}
if ($(this).val() === "bitcoin") {
    $bitcoin.show();
} else {
    $bitcoin.hide();
    }
});
    
$(function() {
    $selectMethod.prop("disabled", true);
});



// //Hiding Job Role
// $('#title').on('change', function() {
//     if ($('this').val() === 'other') {
//         $('.other').show();
//     } else {
//         $('.other').hide();
//     }
// });

// $('design: first-child').hide();
// $('#color-js-puns').hide();

// /****************************** */
// //T-Shirt section, hides color
// /****************************** */
// //hide shirts
// $('#color').childern().hide();
// $('#design').on('click', function(e){

//   if($('#design').prop('value') === 'Select Theme') {
//         $('#colors-js-puns').hide();
//     }
// hideColor();

// //shows color once the select menu theme is picked
// function showColor() {
//     $('#colors-js-puns').show();
//     $('#color option').remove();
// };
// $('#design').change(function(e) {
// showColor();
// })

// //using switch to update color options to match the theme to the design
// function showColor(theme) {
//     const currentOptions = [];
//     const colorDiv = document.querySelector('#colors-js-puns');

//   for (let child of colorDiv.options) {
//       switch (theme) {
//           case selectTheme: {
//             hideElement(child);
//             hideElement(colorDiv);
//             break;
//           }
//           //Theme for JS Puns shirts
//           case "Theme - color-js-puns": {
//               if (child.value === "cornflowerblue" || 
//                   child.value === "darkslategray"  ||
//                   child.value === "gold") {
//                       showElement(child);
//                       showElement(colorDiv);
//                   } else { 
//                       hideElement(child)

//                   }
//                  break;
//           }
//           //Theme for I<3 JS
//           case "Theme - I Love JS": {
//               if (child.value === "tomato" ||
//                     child.value === "steelblue" ||
//                     child.value === "dimgray") {
//                     showElement(child);
//                     showElement(colorDiv);
//                 } else {
//                     hideElement(child)
//                 }
//                 break;
//           }
//         //hide whatever isnt picked 
//         default: {
//     hideElement(child);
//     hideElement(colorDiv);
//      }
//      break;
//     }
   
//     if (!hideElement(child)) {
//         currentOptions.push(child);
//     }

//     if (currentOptions.length > 0) {
//         selected(currentOptions[0]);
//     }
// }

// function hideElement(element) {
//     element.style.display = "none";
// }

// function elementIsHidden(element) {
//     if(element.style.display === "none"); {
//         return (true);
//     } else {
//         return (false)
// }

// //register for Activities and the total cost
// let totalCost = 0;
// let price; 
// price = $('<label>').addClass('total').text('Total: $ ' + totalCost); 
// $('.activities').append(price);

// //Listening for the changes in the Register for Activities section
// $('[type="checkbox"]').on('change',function(e) {
//     const checkSelection = $(e.target);
//     const thetext = checkSelection.parent().text();
//     const amountIndex = thetext.indexOf('$');
//     const totalCost = theText.slice(amountIndex + 1);
//     const numberCost = parseInt(addingCost);
//     const dashIndex = theText.indexOf("-");
//     const comaIndex = theText.indexOf(',');
//     timeAndDate = theText.slice(dashIndex +1, comaIndex)
//     //https://stackoverflow.com/questions/11440128/jquery-test-if-checkbox-is-not-checked
//     if (checkSelection.is(':checked')) {
//         totalCost += numberCost;
//         $('.total').text('Total: $ ' + totalCost);
//     } else {
//         totalCost -= numberCost;
//         $('.total').text('Total: $ ' + toatlCost);
//     }
// })

// //disable activities thats are conflicting with the other choices 
// const inputCheck = $("input[type='checkbox']"); 
//     for (let i = 0; i < inputCheck.length; i++) {
//         const checkboxItem = inputCheck.eq(i).parent().text();
//     if(checkboxItem.includes(timeAndDate) && checkboxItem !== theText) {
//         if(checkSelection.is(':checked')) {
//             inputCheck.eq(i).attr("disable", true);
//             inputCheck.eq(i).parent().css("text decoration", "line through");
//         } else{
//             inputCheck.eq(i).attr("disabled", false);
//             inputCheck.eq(i).parent().css("text decoration", "line through");
//         }
//     }
//     });

//     /********************************* */
//                //register


