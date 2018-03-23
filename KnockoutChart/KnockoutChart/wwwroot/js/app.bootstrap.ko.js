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

            var surveyModel = new investmentSurveyModel();
            ko.applyBindings(surveyModel);

            surveyModel.lumpSumInvestmentAmount(10000);
            surveyModel.monthlyInvestmentAmount(250),
            surveyModel.targetValue(10000),
            surveyModel.timeScale(5),
            surveyModel.riskLevel('Medium')
        }
    });