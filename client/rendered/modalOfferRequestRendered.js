if (Meteor.isClient) {

  Template.ModalOfferRequest.onRendered(function() {

    function setTimes() {
      // GET the time difference from now to the day and time

      // SET Hourly time

       options.date = $("#datepicker").val()

      switch (options.timePeriod) {
        case 'Morning':
          options.hourTime = 14;
          break;
        case 'Afternoon':
          options.hourTime = 19;
          break;
        case 'Night':
          options.hourTime = 24;
          break;
      }
      // SET Abstract meetup time
      var meetupTime = moment(options.date);
      meetupTime.hours(options.hourTime);
      console.log(meetupTime);

      options.meetupTime = meetupTime;
      // SET Concrete difference delay
      var delayTime = meetupTime.diff(moment());
      options.delayTime = delayTime;

    }

    offerRequestJump1 = function() {
      $('#offerRequestModal').trigger('next.m.1');
    }
    offerRequestJump2 = function() {
      $('#offerRequestModal').trigger('next.m.2');
    }
    offerRequestJump3 = function() {
      $('#offerRequestModal').trigger('next.m.3');
    }


    // GLOBAL: set options
    options = {};

    // $(".paymentRadio li input[type='radio']").change(function(event) {
    //   var valPayment = $(this).val();
    //   options.payment = valPayment;
    // });

    // Set time period
    $(".timeRadio li input[type='radio']").change(function() {
      var valTime = $(this).val();
      options.timePeriod = valTime;
      setTimes();
    });

    $("#datepicker").change(function(event) {
      setTimes();
    });


    var picker = new Pikaday({
      field: $('#datepicker')[0]
    });

    keyPress.int("listprice");

  });

}
