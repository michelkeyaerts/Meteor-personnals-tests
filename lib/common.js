TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.Monkeys = new Tabular.Table({
  name: "Monkeys",
  collection: Monkeys,
  order: [[0, "desc"]],
  
  columns: [
  
    {data: "name", title: "name"},
    {data: "age", title: "age"},
    {
  tmpl: Meteor.isClient && Template.deleteButton,title:"delete"
}
  ]

});

