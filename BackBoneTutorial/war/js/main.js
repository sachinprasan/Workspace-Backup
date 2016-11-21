/* ----- Backbone Model ----- */
var Todo = Backbone.Model.extend({
	
	defaults:{
		title:'',
		completed:false
	}
});

/* ----- Backbone Collections ----- */

var TodoList = Backbone.Collection.extend({
	
	model: Todo,
	localStorage: new Store("backbone-todo")
});

var todoList = new TodoList();

var MainView = Backbone.View.extend({
	
	el: "#container",
	template: _.template("<h4>Hello <%= who%></h3>"),
	initialize: function(){
		this.render();
	},
	
	render: function(){
		
		this.$el.html(this.template({who:"world"}));
	}
	
});

var view = new MainView();