/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'nunjucks'
], function ($, _, Backbone, nunjucks) {
    'use strict';

    var HomeView = Backbone.View.extend({
        tagName: 'div',
        className: 'home_view',
        template: nunjucks.render('../../templates/home/home.html'),

        events: {},

        initialize: function () {

        },

        render: function () {
            this.$el.html(this.template);
            return this.el;

        }
    });

    return HomeView;
});
