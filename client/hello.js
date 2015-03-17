//Monkeys collection subscription is in the waitOn function in the router.js page
//--------------------------------------------------------------------
//The two helpers doesn't work. The Monkeys collection is called by tabular package
// Template.hello.helpers({
//   monkeys: function(){
//     var listMonkeys =  Monkeys.find({}, {sort: {age: -1, name: 1}}).fetch();
//     return listMonkeys; 
//   }
// });


// Template.hello.helpers({
//   monkeys: function(){
   
//     Meteor.call("getMonkeys", function(err,monkeys){
//       if(err){    
//      }    
//      return monkeys;
//    });
   
   

//   }
// })

//---------------------------------------------------------------------
 Template.hello.events({
  // insert new monkey
    'submit': function (e) {
      e.preventDefault();
      var name = e.target.new_name.value;
      var age = parseInt(e.target.new_age.value);     
      Monkeys.insert({"name":name,"age":age}, function(error, result) {
        if (error) {alert(error.message);} 
    });
  },
  //delete this monkey
  'click .delete': function(){   
    var name = this.name;
    Monkeys.remove({"_id":this._id}, function(error, result) {
      if (result) {alert(name + " has been deleted");}
      if (error) {alert(error.message);}
    });
  },
  //update listMonkeys
  'click #updatelistMonkeys': function(){
    listMonkeys =  Monkeys.find({}, {sort: {age: -1, name: 1}, reactive: false}).fetch();
    return listMonkeys;
  }
});
//--------------------------------------------------------------------------
// Meteor.startup(function () {
  
//   var listMonkeys = Monkeys.find({}, {sort: {age: -1, name: 1}});
  

// Tracker.autorun(function(computation){
  
//   if(listMonkeys.count() !== 0){

// console.log(listMonkeys.fetch());

//     //computation.stop();
//     return listMonkeys;
//   }

//  return listMonkeys;
// });

// });