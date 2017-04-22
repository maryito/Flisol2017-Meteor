import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.flisol.onCreated(function flisolOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  Meteor.subscribe("contactos.todo")
});
data  = [
{ nombre: "maryon", apellido: "torrees", celular: "686465465"},
{ nombre: "jose", apellido: "miranda", celular: "123456"},
{ nombre: "rodriguez", apellido: "valencia", celular: "898798"},
]
Template.flisol.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  ListadoDeNombre() {
    return Contactos.find()
  }
});

Template.flisol.events({
  'click #BotonEliminar'(event ) {
    Contactos.remove(this._id)
  },
 
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.nuevo.events({
   'click #BotonAgregar'(event) {
    event.preventDefault();
    let data = {}
    nombre = $("#nombre")
    apellido = $("#apellido")
    celular = $("#celular")

    data.nombre = nombre.val()
    data.apellido = apellido.val()
    data.celular = celular.val()

    Meteor.call( 'contactos.agregar', data)

    nombre.val('')
    apellido.val('')
    celular.val('')
    

    console.log(data);
  },
})