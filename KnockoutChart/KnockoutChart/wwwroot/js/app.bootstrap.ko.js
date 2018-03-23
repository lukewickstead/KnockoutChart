"use strict";

define(['knockout', 'koValidation', 'investmentSurveyModel', 'toastr'],
    function (ko, koValidation, investmentSurveyModel, toastr) {

        return function init() {

            ko.validation.init({
                registerExtenders: true,
                messagesOnModified: true,
                insertMessages: false,
                parseInputAttributes: true,
                messageTemplate: null,
                decorateElement: true,
                errorElementClass: 'has-error',
                errorMessageClass: 'alert alert-danger'
            }, true);

            ko.applyBindings(new investmentSurveyModel());
        }
    });