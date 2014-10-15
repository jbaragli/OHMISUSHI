/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'nunjucks'
], function ($, _, Backbone, nunjucks) {
    'use strict';

    var HeaderView = Backbone.View.extend({
        tagName: 'div',
        className: 'header_view container',
        template: nunjucks.render('../../templates/header/header.html'),

        events: {
            'click h1 a': 'removeActive',
            'click li a': 'toggleActive'
        },

        initialize: function () {
            this.listenTo(Backbone, 'active-view', this.toggleFooter );
        },

        toggleFooter: function (a) {
            this.$('li a').removeClass('active');
            this.$('.' + a).addClass('active');
        },

        render: function () {
            this.$el.html(this.template);
            return this.el;
        },

        removeActive: function (event) {
            this.$('li a').removeClass('active');
        },

        toggleActive: function (event) {
            this.$('li a').removeClass('active');
            this.$(event.target).addClass('active');
        }

    });

    return HeaderView;
});
