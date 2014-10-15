/*global require*/
'use strict';

require.config({
    shim: {
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery.min',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        nunjucks: '../bower_components/nunjucks/browser/nunjucks.min'
    }
});

require([
    'jquery',
    'backbone',
    'routes/router',
    'views/header/header',
    'views/footer/footer'
], function ($, Backbone, RouterRouter, HeaderView, FooterView) {

    var router = new RouterRouter();
    var header = new HeaderView();
    var footer = new FooterView();

    $('#header').html(header.render());
    $('#footer').html(footer.render());


    Backbone.history.start();

});
