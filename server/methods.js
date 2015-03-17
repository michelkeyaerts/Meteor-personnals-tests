//server/methods.js


Meteor.methods({
  getMonkeys: function () {
    // return Monkeys.find({}, {sort: { age:  -1,  name: 1}}).fetch();
    
    return Monkeys.find({}, {sort: {age: -1, name: 1}}).fetch();
  }
});

