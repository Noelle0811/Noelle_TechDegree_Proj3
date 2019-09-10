
//my const var's

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

console.log(nameInput);




//focus by default.
$('#name').focus();

//Name:
function validateName() {
    if($('name').prop('value') {
        return (false);
    } else {
        return (true);
    }
}

//Hiding Job Role
$('.other').hide();
$('#title').on('change', function() {
    if ($('this').val() === 'other') {
        $('.other').show();
    } else {
        $('.other').hide();
    }
});


//T-Shirt section, hides color
function hideColor() {
    if($('#design').prop('value') === 'Select Theme') {
        $('#colors-js-puns').hide();
    }
};
hideColor();

//shows color once the select menu theme is picked
function showColor() {
    $('#colors-js-puns').show();
    $('#color option').remove();
};
$('#design').change(function(e) {
showColor();
})

//using switch to update color options to match the theme to the design
function showColor(theme) {
    const currentOptions = [];
    const colorDiv = document.querySelector('#colors-js-puns');

  for (let child of colorDiv.options) {
      switch (theme) {
          case selectTheme: {
            hideElement(child);
            hideElement(colorDiv);
            break;
          }
          //Theme for JS Puns shirts
          case "Theme - color-js-puns": {
              if (child.value === "cornflowerblue" || 
                  child.value === "darkslategray"  ||
                  child.value === "gold") {
                      showElement(child);
                      showElement(colorDiv);
                  } else { 
                      hideElement(child)

                  }
                 break;
          }
          //Theme for I<3 JS
          case "Theme - I Love JS": {
              if (child.value === "tomato" ||
                    child.value === "steelblue" ||
                    child.value === "dimgray") {
                    showElement(child);
                    showElement(colorDiv);
                } else {
                    hideElement(child)
                }
                break;
          }
        //hide whatever isnt picked 
        default: {
    hideElement(child);
    hideElement(colorDiv);
    break;
   }

    if (!hideElement(child)) {
        currentOptions.push(child);
    }

    if (currentOptions.length > 0) {
        selected(currentOptions[0]);
    }
}

function hideElement(element) {
    element.style.display = "none";
}

function elementIsHidden(element) {
    if(element.style.display) === "none"; {
        return (true);
    } else {
        return (false);
}

//register for Activities and the total cost
let totalCost = 0;
let price; 
price = $('<label>').addClass('total').text('Total: $ ' + totalCost); 
$('.activities').append(price);

//Listening for the chsnges in the Register for Activities section
$('[type="checkbox"]').on('chage',function(e) {
    const checkSelection = $(e.target);
    const thetext = checkSelection.parent().text();
    const amountIndex = thetext.indexOf('$');
    const totalCost = theText.slice(amountIndex + 1);
    const numberCost = parseInt(addingCost);
    const dashIndex = theText.indexOf("-");
    const comaIndex = theText.indexOf(',');
    const timeAndDate = theText.slice(dashIndex +1, comaIndex);
    //https://stackoverflow.com/questions/11440128/jquery-test-if-checkbox-is-not-checked
    if (checkSelection.is(':checked')) {
        totalCost += numberCost;
        $('.total').text('Total: $ ' + totalCost);
    } else {
        totalCost -= numberCost;
        $('.total').text('Total: $ ' + toatlCost);
    }
})

//disable activities thats are conflicting with the other choices 
const inputCheck = $("input[type='checkbox']"); 
    for (let i = 0; i < inputCheck.length; i++) {
        const checkboxItem = inputCheck.eq(i).parent().text();
    if(checkboxItem.includes(timeAndDate) && checkboxItem !== theText) {
        if(checkSelection.is(':checked')) {
            inputCheck.eq(i).attr("disable", true);
            inputCheck.eq(i).parent().css("text decoration", "line through");
        } else{
            inputCheck.eq(i).attr("disabled", false);
            inputCheck.eq(i).parent().css("text decoration", "line through");
        }
    }
    });