Monkeys = new Mongo.Collection("Monkeys");
var Schemas = {};
Schemas.monkeys = new SimpleSchema({
	name:{
		type: String,
		label:"name",
		max:20,
		index: 1,
		unique: true
	},
	age:{
		type: Number,
		label:"age",
		min: 0,
		max: 100
	}

});

Monkeys.attachSchema(Schemas.monkeys);