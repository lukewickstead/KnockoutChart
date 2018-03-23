"use strict";
define(['knockout', 'moment', 'jquery', 'toastr', 'koValidation', 'console', 'investmentChart'],
    function (ko, moment, $, toastr, koValidation, console, investmentChart) {
        return function investmentSurveyModel() {

            var self = this;
      
            // Lump Sum Investment (£)
            self.lumpSumInvestmentAmount = ko.observable('').extend({
                required: {message: 'Please enter your lump sum investment in £'},
                digit: { message: 'Your lump sum investment should be to the nearest £'},
                min: { params: 500, message: 'Your lump sum investment should be more than £500'},
                max: { params: 1000000, message: 'Your lump sum investment should be less than £1,000,000'},
            });

            // Monthly Investment (£)
            self.monthlyInvestmentAmount = ko.observable('').extend({
                required: {message: 'Please enter your monthly investment in £'},
                digit: { message: 'Your monthly investment should be to the nearest £'},
                min: { params: 100, message: 'Your monthly investment should be more than £100'},
                max: { params: 100000, message: 'Your monthly investment should be less than £100,000'},
            });

            // Target Value (£)
            self.targetValue = ko.observable('').extend({
                required: {message: 'Please enter your target value in £'},
                digit: { message: 'Your target should be to the nearest £'},
                min: { params: 100, message: 'Your target should be more than £100'},
            });

            // Timescale (years)
            self.timeScale = ko.observable('').extend({
                required: {message: 'Please enter your time scale in years'},
                digit: { message: 'Your time scale should be to the nearest year'},
                min: { params: 5, message: 'Your time scale should be more than 5 years '},
            });

            // Risk Level  
            self.availablerRiskLevels = ko.observableArray(['Low', 'Medium', 'High']);
            self.riskLevel = ko.observable().extend({
                required: {message: 'Please select your risk level'}
            });          

            // VALIDATION
            self.lumpSumInvestmentAmountBlurEvent  = function () {
                ko.validation.group([self.lumpSumInvestmentAmount]).showAllMessages()
            };

            self.monthlyInvestmentAmountBlurEvent  = function () {
                ko.validation.group([self.monthlyInvestmentAmount]).showAllMessages()
            };

            self.targetValueBlurEvent  = function () {
                ko.validation.group([self.targetValue]).showAllMessages()
            };            

            self.timeScaleBlurEvent  = function () {
                ko.validation.group([self.timeScale]).showAllMessages()
            };

            self.riskLevelBlurEvent = function () {
                ko.validation.group([self.riskLevel]).showAllMessages()
            };

            self.errors = ko.validation.group(self);
           
            self.isValid = function () {
                return self.errors().length === 0;
            };
                     
            self.isSubmitted = ko.observable(false)
         
            self.submit = function() {
                var investmentSurvey = {
                    LumpSumInvestmentAmount : self.lumpSumInvestmentAmount(),
                    MonthlyInvestmentAmount : self.monthlyInvestmentAmount(),
                    TargetValue : self.targetValue(),
                    TimeScale : self.timeScale(),
                    RiskLevel : self.riskLevel()
                };
                
                console.log(investmentSurvey);
                self.isSubmitted(true);
                
                $.ajax('InvestmentSurvey/Submit', {
                    data : JSON.stringify(investmentSurvey),
                    contentType : 'application/json; charset=utf-8',
                    type : 'POST',
                    dataType: 'json',
                    success: function(result) {                       
                        self.isSubmitted(true)
                        console.log('Survey Submitted: ' + result);
                        toastr.success("Thank you, your survey has been submitted.");
                        investmentChart(result);
                    },
                    error: function (xhr, ajaxOptions, thrownError) {                       
                        toastr.error("An error was returned, please try again.");
                        console.log('Survey Submitted Error: '+  thrownError, ', ' + xhr.responseText);
                    }
                });                
            };            
        };
    });