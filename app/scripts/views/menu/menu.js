/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'nunjucks'
], function ($, _, Backbone, nunjucks) {
    'use strict';

    var MenuView = Backbone.View.extend({
        tagName: 'div',
        className: 'menu_view container',
        template: nunjucks.render('../../templates/menu/menu.html'),

        events: {},

        initialize: function () {

        },

        render: function () {
            this.$el.html(this.template);
            return this.el;

        }
    });

    return MenuView;
});