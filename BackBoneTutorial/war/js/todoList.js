(function ($){

	/* ----- BackBone Model ----- */
	var Tweet = Backbone.Model.extend({
		
		defaults: {
			
			todoListValue: '',
			date: new Date().toString()
		}
	});

var view = Backbone.View.extend({
	
	model 		: 	Tweet,
	
	el			:	"#todoLists",
	
	initialize	: 	function()
					{
//					this.model.on('add',this.addOne,this);
//					this.model.on('remove',this.addAll,this);
					},
	
	tagName		: 'div',
	
	className	: '.listDiv',
	
	id 			: '#listDiv',
	
	events		:{
		
					'click #deleteList' : 'delList',
					'click #editList' : 'editList',
					'click #addlingList' : 'create',
					'blur .display' : 'close',
					'keypress .result' : 'onEnterUpdate'
					},
					
	addOne		:	function(todo)
					{
					this.$el.html("");
					alert("hello");
		//_.each(this.model.toArray(), function(tweet, i){
					var view = new TweetView({model: this.model});
			//console.log((new TweetView({model: tweet})).render().$el);
					this.$el.append(view.render().$el);
					},
					
	addAll		:	function()
					{
					this.$el.html("");
					tweetCollection.each(this.addOne(), this);
					},
					
	create		:	function()
					{
						var value = $("#focusedInput").val();
						var addModel =  new Tweet({todoListValue : value});
						tweetCollection.add(addModel);
					},

});





/* ----- BackBone Collections ----- */

var TweetsLists = Backbone.Collection.extend({
	
	model		: Tweet,
	initialize	: function()
				{
				var tweetView = new view();
				
				this.on('add', function(model) {

				tweetView.addOne(model);

				});
				}
});

var tweetCollection = new TweetsLists();

	
})(jQuery);



/* ------------- Generating Date dynamically ----------------- */

var today;

				today = new Date();
				var activeDate = today.toDateString();
				var currentDate = new Date();
				var first = currentDate.getDate() - currentDate.getDay();
				//	var firstday = (new Date(currentDate.setDate(first))).toString();
				for (var i = 0; i < 7; i++)
				{
					var next = new Date(currentDate.getTime());
					var crntDate = next.toDateString();
					console.log("firstNext:" + crntDate);
					next.setDate(first + i);
					console.log(next.toDateString());
					if (crntDate == next.toDateString())
					{

						$("#date").append('<button type="button"  class="btn btn-primary dateclass active">'+ next.toDateString()+ '</button>');


					}
					else
					{
						$("#date").append('<button type="button"  class="btn btn-primary dateclass">'+ next.toDateString()+ '</button>');
					}
				}
				$(".dateclass").on("click", function() {
					$(".dateclass").removeClass("active");
					$(this).addClass("active");


				});

		
	$("#nextSet").click(function() {

				var element = $('.dateclass')[6];

				$("#date").empty();
				var getLastDate = $(element).text();
				//console.log(getLastDate);
				var currentDate = new Date(getLastDate);

				var first = currentDate.getDate() + 1;

				for (var i = 0; i < 7; i++)
				{
					var next = new Date(currentDate.getTime());
					next.setDate(first + i);
					$("#date").append('<button type="button"  class="btn btn-primary dateclass">'+ next.toDateString() + '</button>');

				}

			});
	$("#prevSet").click(function() {

				var element = $('.dateclass')[0];
				$("#date").empty();
				var getLastDate = $(element).text();
				//console.log(getLastDate);
				var curr = new Date(getLastDate);

				var first = curr.getDate() - 1;
				//var firstday = (new Date(curr.setDate(first+1))).toString();

				for (var i = 0; i < 7; i++)
				{
					var next = new Date(curr.getTime());
					//console.log(next.setDate(first - i));
					next.setDate(first - i);
					$("#date").prepend('<button type="button"  class="btn btn-primary dateclass">'+ next.toDateString() + '</button>');

				}

			});