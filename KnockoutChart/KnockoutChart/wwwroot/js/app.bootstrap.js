"use strict";

requirejs.config({
    paths: {
        // libs
        'jquery': '../lib/jquery/dist/jquery.min',
        'jquery-ui': '../lib/jquery-ui/jquery-ui.min',
        'knockout': '../lib/knockout/dist/knockout',
        'koValidation': '../lib/knockout-validation/dist/knockout.validation',
        'moment': '../lib/moment/moment',
        'toastr': '../lib/toastr/toastr',

        // window exposure
        'console': 'window.console',

        // apps
        'bootstrap.ko': 'app.bootstrap.ko',
        'bootstrap.toastr': 'app.bootstrap.toastr',
        'bootstrap.jqueryUi': 'app.bootstrap.jqueryUi',

        'investmentSurveyModel': 'models.investmentSurveyModel'
    }
});

require(['bootstrap.ko', 'bootstrap.toastr', 'bootstrap.jqueryUi'],
    function (bootstrapKo, bootstrapToastr, bootstrapJueryUi) {

        console.log("Bottstrapping: KO");
        bootstrapKo();

        console.log("Bottstrapping: toastr");
        bootstrapToastr();

        console.log("Bottstrapping: jquery-ui");
        bootstrapJueryUi();
    });