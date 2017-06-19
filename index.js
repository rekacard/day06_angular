//IIFE
(function () {

    //Create a module
    var FeedbackApp = angular.module("FeedbackApp", []);

    var FeedbackCtrl = function () {
        var feedbackCtrl = this;

        //Define a model in the controller
        feedbackCtrl.message = "";
        feedbackCtrl.name = "";
        feedbackCtrl.email = "";
        feedbackCtrl.phone = "";
        feedbackCtrl.comment = "";
        feedbackCtrl.radio_experience = "good";

        feedbackCtrl.reset = function () {
            feedbackCtrl.message = "";
            feedbackCtrl.name = "";
            feedbackCtrl.email = "";
            feedbackCtrl.phone = "";
            feedbackCtrl.comment = "";
            feedbackCtrl.radio_experience = "good";
        }

        feedbackCtrl.clearForm = function () {
            feedbackCtrl.name = "";
        }

        feedbackCtrl.processForm = function () {
            for (var i in feedbackCtrl) {
                if (typeof (feedbackCtrl[i]) == "string")
                    console.log("input: %s =  %s", i, feedbackCtrl[i]);
            }
            feedbackCtrl.reset();
        }
    }

    //Use MyCtrl as controller
    FeedbackApp.controller("FeedbackCtrl", FeedbackCtrl);

})();