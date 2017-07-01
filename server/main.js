import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {
  // code to run on server at startup
  const petSchema = new SimpleSchema({
    name: {
      type: String,
      min: 1,
      max: 200
    }
  });


  petSchema.validate({
    name: 'Endre'
  });
});
