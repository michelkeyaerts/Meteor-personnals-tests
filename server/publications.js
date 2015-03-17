
Meteor.publish("Monkeys", function() {
  return Monkeys.find({}, {sort: {age: -1}});
});

