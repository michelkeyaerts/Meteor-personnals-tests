

Router.map(function() {
    this.route('hello', {
        path: '/',
        waitOn:function() {
        	Meteor.subscribe('Monkeys');
        	
        	
        },
    });
    

});

