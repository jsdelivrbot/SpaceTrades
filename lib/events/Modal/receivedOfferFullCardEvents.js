if (Meteor.isClient) {

  Template.receivedOfferFullCard.events({

    // 'click #profileReceivedAccept': function() {
    //   sweetAlert({
    //     title: "Offer Accepted",
    //     html: "true",
    //     type: "success",
    //     timer: 2000,
    //     showConfirmButton: false
    //   });


    //   var offerBlock = Session.get('offerSelected');
    //   var title = Listings.find({
    //     _id: listing
    //   }).fetch()[0].listing_title;

    //   options = {
    //     action: "Offer Accepted",
    //     listing_title: offerBlock.listing_title,
    //     offer_price: offerBlock.offerprice,
    //     creator_id: offerBlock.creator_id,
    //     time: offerBlock.date,
    //     offer_id: offerBlock._id,
    //     listingId: offerBlock.listingId,
    //     destination: [offerBlock.creator_id, Meteor.userId()]
    //   }

    //   Meteor.call('acceptOffer', options);
    //   Meteor.call('pulseNotify', options);

    //   //   var userA = Listing.find({
    //   //   _id: this.listingId
    //   // }).fetch()[0].creator_id;


    //   // Time Value Scheduling
    //   // IF Morning 2pm, Afternoon: 7pm, Night 12am

    //   function sendFeedback() {

    //     var feedbackOptions = {
    //       action: "Fill out Feedback",
    //       listing_title: offerBlock.listing_title,
    //       offer_price: offerBlock.offerprice,
    //       creator_id: offerBlock.creator_id,
    //       listingId: offerBlock.listingId,
    //       destination: [creator, Meteor.userId()]
    //     }

    //     Meteor.call('pulseNotify', feedbackOptions);
    //   }

    //   // Delay until send feedback
    //   var delayTime = offerBlock.delayTime;

    //   Meteor.setTimeout(sendFeedback, 20000);

    // },
    // 'click #profileReceivedDecline': function() {
    //   sweetAlert({
    //     title: "Offer Declined",
    //     html: "true",
    //     type: "error",
    //     timer: 2000,
    //     showConfirmButton: false
    //   });

    //   var id = Session.get('offerSelected')._id;
    //   var listing = Session.get('offerSelected').listingId;
    //   var options = {
    //     id: id,
    //     listingId: listing
    //   }

    //   Meteor.call('declineOffer', options);
    //   Meteor.call('pulseNotify', options);
    // }
  });

}