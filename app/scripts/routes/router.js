/*global define*/

define([
    'jquery',
    'backbone',
    'views/home/home',
    'views/contacto/contacto',
    'views/menu/menu',
    'views/delivery/delivery',
    'views/eventos/eventos',
], function ($, Backbone, HomeView, ContactoView, MenuView, DeliveryView, EventosView) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({

        routes: {
            '': 'home',
            'menu': 'menu',
            'eventos': 'eventos',
            'delivery': 'delivery',
            'contacto': 'contacto'
        },
    
        home: function () {
            var home = new HomeView();
            $('#content').html(home.render());
        },

        menu: function () {
            Backbone.trigger('active-view', 'menu' );
            var menu = new MenuView();
            $('#content').html(menu.render());
        },        

        eventos: function () {
            Backbone.trigger('active-view', 'eventos' );
            var eventos = new EventosView();
            $('#content').html(eventos.render());
        },        

        delivery: function () {
            Backbone.trigger('active-view', 'delivery' );
            var delivery = new DeliveryView();
            $('#content').html(delivery.render());
        },

        contacto: function () {
            Backbone.trigger('active-view', 'contacto' );
            var contacto = new ContactoView();
            $('#content').html(contacto.render());
        }

    });


    return RouterRouter;
});
