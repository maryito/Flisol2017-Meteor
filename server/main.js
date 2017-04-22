import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('contactos.todo',()=>{
  return Contactos.find()
})