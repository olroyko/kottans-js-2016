/**
 * Created by admin on 22.05.2016.
 */
$(document).ready(function(){

  //Range functionality
  $("input[type='range']").change(function() {
    const slider = $(this);
    const value = slider.val();
    
    $('span.rangeLabel').removeClass('selected');
    $('span.rangeLabel:eq(' + value + ')').addClass('selected');
  });

  //Credit card validator
  $('.card-values').card({
    container: '.card-wrapper', // *required*
    formSelectors: {
      nameInput: 'input[name="number"], input[name="expiry"], input[name="cvc"]'
    },
    placeholders: {
      number: '**** **** **** ****',
      expiry: '**/****',
      cvc: '****'
    },
    messages: {
      validDate: 'expire\ndate',
      monthYear: 'mm/yy'
    },
    debug: true

  });

   // PLACE ORDER ONLY FOR CHECKED INPUT
  const check = $(".order-buttons .bottom");
  check.css("cursor", "not-allowed");
  check.prop("disabled", true);
    $( "#terms" ).change(function() {
      if ($("#terms").prop("checked")) {
        check.css("cursor", "pointer");
        check.prop("disabled", false);
      } else {
        check.css("cursor", "not-allowed");
        check.prop("disabled", true);
      }
    });

  // HIDE POINTS FOR INPUT RANGE
  const range = $('input[type=range]');
    range.on('change', function () {
    if ($(this).val() == 0) {
      console.log("0");
      range.addClass('zero').removeClass('one').removeClass('two');
    } else if ($(this).val() == 1) {
      console.log("1");
      range.addClass('one').removeClass('zero').removeClass('two');
    } else {
      console.log("2");
      range.addClass('two').removeClass('zero').removeClass('one');
    }
  })

});

