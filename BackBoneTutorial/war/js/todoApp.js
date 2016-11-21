(function ($){

	/* ----- BackBone Model ----- */
	var Tweet = Backbone.Model.extend({
		
		defaults: {
			
			todoListValue: '',
			date: new Date().toString()
		}
	});

	/* ----- Backbone Collection ----- */
	var TweetsLists = Backbone.Collection.extend({
		
		model: Tweet
	});

	var tweets = new TweetsLists();
	
	
	var TweetView = Backbone.View.extend({
		
		model: new Tweet(),
		tagName: 'div',
		className: '.listDiv',
		id : '#listDiv',
		events:{
			//'click #addlingList' : 'addList',
			'click #deleteList' : 'delList',
			'click #editList' : 'editList',
			'blur .display' : 'close',
			'keypress .result' : 'onEnterUpdate'
		},

		editList: function(){
			this.$(".display").attr('contenteditable',true).focus();
		},
		delList:function(){
			tweets.remove(this.model);
		},
		close:function(){
			var status = this.$(".display").text();
			this.model.set('todoListValue',status);
			this.$(".display").removeAttr('contenteditable');
		},
		onEnterUpdate: function(event){
			if(event.keyCode == 13){
				this.close();
			}
		},
		
		render: function(){
			
			 this.template = _.template($("#todolistTemplate").html());
			this.$el.html(this.template(this.model.toJSON()))
			return this;
			
		}
		
		
	});
	
	/* ----- Backbone view for All Views ----- */
	
	var TweetsView =  Backbone.View.extend({
		model: tweets,
		el: $("#todoLists"),
		initialize: function(){
			this.model.on('add',this.render,this);
			this.model.on('remove',this.render,this);
		},
		
		render: function(){
			var temp = this;
			temp.$el.html("");
			_.each(this.model.toArray(), function(tweet, i){
				
				temp.$el.append((new TweetView({model: tweet})).render().$el);
				
			});
			return this;
		}
		
	});
	
	
		$("#addlingList").on("click",function(){
			var tweet = new Tweet({ todoListValue:$("#focusedInput").val()});
			tweets.add(tweet);
			console.log(tweets.toJSON());
			$("#focusedInput").val("");
			
		});
		 
		$(".btn-success addingList").off("click");
		
		var appView = new TweetsView();
	
	
	
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

	


