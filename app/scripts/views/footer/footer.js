/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'nunjucks'
], function ($, _, Backbone, nunjucks) {
    'use strict';

    var FooterView = Backbone.View.extend({
        tagName: 'div',
        className: 'footer_view container',
        template: nunjucks.render('../../templates/footer/footer.html'),

        events: {},

        initialize: function () {

        },

        render: function () {
            this.$el.html(this.template);
            return this.el;

        }
    });

    return FooterView;
});