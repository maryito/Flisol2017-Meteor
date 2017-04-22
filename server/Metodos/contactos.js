Meteor.methods({
    'contactos.agregar': ( datos ) => {
        check( datos , Object )
        console.log(datos );
        Contactos.insert( datos )
    }
})