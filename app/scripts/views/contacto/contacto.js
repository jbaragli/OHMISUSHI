/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'nunjucks'
], function ($, _, Backbone, nunjucks) {
    'use strict';

    var ContactoView = Backbone.View.extend({
        tagName: 'div',
        className: 'home_view container',
        template: nunjucks.render('../../templates/contacto/contacto.html'),

        events: {},

        initialize: function () {

        },

        render: function () {
            this.$el.html(this.template);
            return this.el;

        }
    });

    return ContactoView;
});