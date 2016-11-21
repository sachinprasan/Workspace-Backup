$(document).ready(function(){
	var today = new Date();
	console.log("today"+today);


	var curr = new Date; // get current date
	var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
	var last = first + 6; // last day is the first day + 6

	var firstday = new Date(curr.setDate(first)).toUTCString();
	var lastday = new Date(curr.setDate(last)).toUTCString();

	/*firstday
	"Sun, 06 Mar 2011 12:25:40 GMT"
	lastday
	"Sat, 12 Mar 2011 12:25:40 GMT"
*/

	for (i = 0; i < 8; i++) {
	var tmr=new Date(curr.setDate(first));

	tmr.setDate(tmr.getDate() + i);
	console.log("today"+tmr+""+i);
	var checkfrmt=$.datepicker.formatDate("DD,MM d,yy", tmr);
	console.log("check frmt"+checkfrmt);
	var j=i+1;
	$("#button"+j).append("<a id='link"+i+"' class='hdrlink' href='#' data-date='"+ tmr +"'>"+checkfrmt+"</a>");
}var prev=$("#button3").children('a')[0].text;
console.log("got the date "+prev);

});

//*********************called when previous button called******************************************//

$(document).ready(function(){


	 function reload_cart() {
	        console.log("method called");
	        //var prev=$(".active_class").children('a')[0].text;
 var prev=$(".active_class").children('a')[0];

			console.log(prev);
			var at=prev.getAttribute("data-date");
			console.log(at);
	        console.log(prev);
	        $.ajax({
				url:"data/date/"+at,
				type:"GET",
				 beforeSend: function(xhr) {
			         xhr.setRequestHeader("Accept", "application/json");
			         xhr.setRequestHeader("Content-Type", "application/json");
			     },
				success: function(a) {
					console.log(a);
					$('ul .content').remove();
					for(var i=0;i<a.length;i++){
						console.log("loop running");
						console.log(a[i].listid);
						$("#"+a[i].listid).append("<li class='content "+a[i].id+"'>"+a[i].todo+"<button id='"+a[i].id+"' class='buttn'>DEL</button></li>");
					}

				}

			});
	    }

	$("#prev").click(function(){
		var prev=$("#button1").children('a')[0];

		console.log(prev);
		var at=prev.getAttribute("data-date");
		console.log(at);

		$.ajax({
			url:"data/date/prev/"+at,
			type: "GET",
			beforeSend: function(xhr) {
	            xhr.setRequestHeader("Accept", "application/json");
	            xhr.setRequestHeader("Content-Type", "application/json");
	        },
	        success: function(a) {
	             console.log("resp back to prev "+a);
	             var curr=new Date(a);
	             console.log(curr);
	             var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
	         	var last = first + 6; // last day is the first day + 6 dd M yy
				console.log("first value "+first);
				console.log("last value "+last);
				$( ".datebutton a" ).remove();
				for (i = 0; i < 8; i++) {
					var tmr=new Date(curr.setDate(first));

					tmr.setDate(tmr.getDate() + i);
					console.log("today"+tmr+""+i);
					var checkfrmt=$.datepicker.formatDate( "D,M dd", tmr);
					console.log("check frmt"+checkfrmt);
					var j=i+1;
					$("#button"+j).append("<a id='link"+i+"' class='hdrlink' href='#' data-date='"+ tmr +"'>"+checkfrmt+"</a>");
				}
				//reload_cart();
				$(".active_class").trigger('click');
	            /*
	            var curr = new Date; // get current date
	var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
	var last = first + 6; // last day is the first day + 6

	var firstday = new Date(curr.setDate(first)).toUTCString();
	var lastday = new Date(curr.setDate(last)).toUTCString();

	for (i = 0; i < 8; i++) {
	var tmr=new Date(curr.setDate(first));

	tmr.setDate(tmr.getDate() + i);
	console.log("today"+tmr+""+i);
	var checkfrmt=$.datepicker.formatDate( "D,M dd", tmr);
	console.log("check frmt"+checkfrmt);
	var j=i+1;
	$("#button"+j).append("<a id='link"+i+"' class='hdrlink' href='#' target='"+ tmr +"'>"+checkfrmt+"</a>");
}




	            $( ".datebutton a" ).remove();
	             var j=5;
	             for (i = 1; i < 6; i++) {
	            		var tmr=new Date(a);

	            		tmr.setDate(tmr.getDate() + i);
	            		console.log("today"+tmr+""+i);
	            		var checkfrmt=$.datepicker.formatDate( "D M yy", tmr);
	            		console.log("check frmt"+checkfrmt);
	            		var j=i+1;

	            		$("#button"+j).append("<a id='lnk"+i+"' href='#' class='buttonlink'>"+a[i-1]+"</a>");
	            	    j--;
	             }*/

	        }
		});
	});

});

//*********************called when next button clicked******************************************//
$(document).ready(function(){
	function reload_cart() {
        console.log("method called");
        var prev=$(".active_class").children('a')[0];

		console.log(prev);
		var at=prev.getAttribute("data-date");
		console.log(at);
        console.log(prev);
        $.ajax({
			url:"data/date/"+at,
			type:"GET",
			 beforeSend: function(xhr) {
		         xhr.setRequestHeader("Accept", "application/json");
		         xhr.setRequestHeader("Content-Type", "application/json");
		     },
			success: function(a) {
				console.log(a);
				$('ul .content').remove();
				for(var i=0;i<a.length;i++){
					console.log("loop running");
					console.log(a[i].listid);
					$("#"+a[i].listid).append("<li class='content "+a[i].id+"'>"+a[i].todo+"<button id='"+a[i].id+"' class='buttn'>DEL</button></li>");
				}

			}

		});
    }

	$("#next").click(function(){
var prev=$("#button7").children('a')[0];

		console.log(prev);
		var at=prev.getAttribute("data-date");
		console.log(at);
		$.ajax({
			url:"data/date/next/"+at,
			type: "GET",
			beforeSend: function(xhr) {
	            xhr.setRequestHeader("Accept", "application/json");
	            xhr.setRequestHeader("Content-Type", "application/json");
	        },
	        success: function(a) {
	             console.log("got the next date to add "+a);

	            var curr=new Date(a);
	            console.log(curr);
	            var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
	         	var last = first + 6; // last day is the first day + 6
				console.log("first value "+first);
				console.log("last value "+last);
				$( ".datebutton a" ).remove();
				for (i = 0; i < 8; i++) {
					var tmr=new Date(curr.setDate(first));

					tmr.setDate(tmr.getDate() + i);
					console.log("today"+tmr+""+i);
					var checkfrmt=$.datepicker.formatDate( "D,M dd", tmr);
					console.log("check frmt"+checkfrmt);
					var j=i+1;
					$("#button"+j).append("<a id='link"+i+"' class='hdrlink' href='#' data-date='"+ tmr +"'>"+checkfrmt+"</a>");
				}
	             /*   var d = new Date(a);
	             console.log(d);
	             $( ".datebutton a" ).remove();
	             for (i = 0; i < 6; i++) {
	            		var tmr=new Date(a);

	            		tmr.setDate(tmr.getDate() + i);
	            		console.log("today"+tmr+""+i);
	            		var checkfrmt=$.datepicker.formatDate( "yy-mm-dd", tmr);
	            		console.log("check frmt"+checkfrmt);
	            		var j=i+1;
	            		$("#button"+j).append("<a id='lnk"+i+"' href='#' class='buttonlink'>"+checkfrmt+"</a>");

	            	}
	            */
				$(".active_class").trigger('click');
	             // reload_cart();
	        }
		});
	});

});


var User = Backbone.Model.extend({
    defaults: {
        id: "",

    },
    idAttribute: "id",
    urlRoot: 'data/bmlist',
});

var Users = Backbone.Collection.extend({
    model: User,
    url: 'data/blist',

});

var Todo = Backbone.Model.extend({
    defaults: {
        id: "",

    },
    idAttribute: "id",
    urlRoot: 'data/bmtodo',
});

var Todos = Backbone.Collection.extend({
    model: Todo,
    url: 'data/btodo',

});
var Todos2 = Backbone.Collection.extend({
    model: Todo,
    url: 'data/bmtodo',

});

var UserList = Backbone.View.extend({
    el: ".page",

    render: function() {
        var that = this;
        console.log(this.$el);
        var users = new Users();

        users.fetch({
            success: function(users) {
                console.log(that.$el);

                console.log(users);
                var template = _.template($('#user-list-template').html());
                that.$el.html(template({
                    users: users.models
                }));

                var todos = new Todos();
                todos.fetch({
                	 success: function(todos) {

                		// console.log("todo"+ el);
                		 console.log(todos);

                		 todos.each(function(item, index, all) {
                			 console.log(item.get("listid"));
                			 //var $el = "#"+item.get("listid");
                			 that.setElement("#"+item.get("listid"));
                		      console.log(that.$el);

                		      console.log(this.$el);
                              that.$el.append("<li class='content "+item.get("id")+"'>"+item.get("todo")+"<button id='"+item.get("id")+"' class='buttn'></button></li>");
                           });
                	 }
                })
                var one = users.at(1);

                var two = users.at(0);
                var showuser = new ShowUser();
           }
        })
    }
  });

// doubt Backbone.View.prototype.remove.call(this);
var ShowUser = Backbone.View.extend({
    el: "body",
    events: {
        'click .datebutton': 'clicked',
        'click .mybtn': 'add',
        'click #addid': 'add2',
        'click #addlistname': 'addlistname',
        'click .buttn': 'deletetodo',
        'click .listdel': 'deletelist',
    },
    deletelist: function(event) {
    	console.log(event.currentTarget);
    	var $val = event.currentTarget;
    	var todoid=$val.getAttribute("data-listid");
    	console.log(todoid);

    	var todo = new User({ id: todoid});
    	console.log(todo);
    	todo.destroy({
    	    success: function (resp) {
    	        console.log(resp.toJSON().id);
    	        $("."+resp.toJSON().id).remove();
    	    }
    	});
    },
    deletetodo: function(event) {
    	console.log(event.currentTarget);
    	var $val = event.currentTarget;
    	var todoid=$val.id;
    	var todo = new Todo({ id: $val.id});
    	console.log(todo);
    	todo.destroy({
    	    success: function (resp) {
    	        console.log(resp.toJSON().id);
    	        $("."+resp.toJSON().id).remove();
    	    }
    	});
    },
    addlistname: function(event) {
    	var that = this;
    	console.log(event.currentTarget);
    	var listname=$("#recipient-listname").val();
		console.log(listname);

		if(listname != ""){
    	var listname=$("#recipient-listname").val();
		console.log(listname);

		var list = new User();
    	list.save({
            listname: $("#recipient-listname").val(),
        },
        {
            success: function(user) {
                console.log(user.toJSON());
                that.setElement(".page");
	  		    		console.log(that.$el);
	  						console.log(this.$el);
                that.$el.append('<div id="list" class="listdiv '+user.get('id')+'" ><div class="listname"> '+user.get('listname')+'<div id="listdeldiv"><button class="listdel" data-listid="'+user.get('id')+'"></button></div></div><ul id="'+user.get('id')+'" class="mytodo"></ul><div class="addbuttondiv"><button type="button" class="btn btn-default mybtn" data-toggle="modal" data-target="#exampleModal"> + </button></div></div>');
                that.setElement("body");
                console.log(that.$el);

            }
        }
        );
		}else{
			alert("please enter the list name to create \n Thank you ");
		}
        event.preventDefault();
    },
    add: function(event) {

    	console.log(event.currentTarget);
    	var $val = event.currentTarget;
    	var $parent = $val.parentElement;
    	var $curr = $parent.previousElementSibling;
    	var $listname = $curr.previousElementSibling;
    	//var $btnprnt=$val.parent().get().tagName;
		 console.log($curr.id);
		 var prev=$(this).parent().prev('ul').attr('id');
		 var $namlist=$(this).parent().prev('div');
		 var namlistval=$namlist.text();
		 console.log(namlistval);

		 var todotxt=$("#recipient-name").val($curr.id);

		 var date=$(".active_class").children('a')[0].text;
		 var prev=$(".active_class").children('a')[0];

			console.log(prev);
			var at=prev.getAttribute("data-date");
			console.log(at);


		 $("#recipient-date").val(at);
		 console.log(todotxt);
		 console.log(prev);

    },
    add2: function(event) {
    	var that = this;
    	console.log(event.currentTarget);

    	var listid=$("#recipient-name").val();
		var dateid=$("#recipient-date").val();
		var todoid=$("#recipient-todo").val();
		if(todoid != ""){
		console.log(listid);
		console.log(dateid);
		var curr=new Date(dateid);
		var checkfrmt=$.datepicker.formatDate( "yy-mm-dd", curr);
		console.log("check frmt"+checkfrmt);
		console.log(todoid);
    	var todo = new Todo();
    	todo.save({
            todo: $("#recipient-todo").val(),
            date: checkfrmt,
            listid: $("#recipient-name").val()

        },
        {
            success: function(item) {
                console.log("got it return");
                console.log(item.toJSON());
                that.setElement("#"+item.get("listid"));
	  		    console.log(that.$el);
	  			console.log(this.$el);
                that.$el.append("<li class='content "+item.get("id")+"'>"+item.get("todo")+"<button id='"+item.get("id")+"' class='buttn'></button></li>");
                that.setElement("body");

                console.log(that.$el);


            }
        }
        );

		}else{
			alert("please enter some data to add \n Thank you ");
		}

        event.preventDefault();
    },
    clicked: function(event) {
    	var that = this;
        console.log(event.currentTarget);
        var val = event.currentTarget;
        var id = val.getAttribute('id');
        $(".datebutton").removeClass("active_class");
		 $("#"+id).addClass('active_class');

        console.log(id);
        var prev=$("#"+id).children('a')[0];
		console.log(prev.getAttribute('data-date'));
		var todo = new Todos2();
		var clicked_date = prev.getAttribute('data-date');
		var curr=new Date(clicked_date);
		var checkfrmt=$.datepicker.formatDate( "D,M dd", curr);
		console.log("check frmt"+checkfrmt);
         todo.fetch({
             success: function(todos) {
                 console.log("success came");
                 /*var a= JSON.stringify(todos);
                 console.log(a.length);
                 var arr = $.parseJSON(a);*/
                 console.log(todos);

                 $('.content').remove();
                 todos.each(function(item, index, all) {
        			 var curr=new Date(item.get("date"));
        			 var filter=$.datepicker.formatDate( "D,M dd", curr);

    	             if(filter == checkfrmt){
    	            	 that.setElement("#"+item.get("listid"));

    	            	 that.$el.append("<li class='content "+item.get("id")+"'>"+item.get("todo")+"<button id='"+item.get("id")+"' class='buttn'></button></li>");
    	             }
                   });

                 that.setElement("#datediv");

                 console.log(that.$el);



             }
         });

    }


});

/*
 var UserListView = Backbone.View.extend({
    model: User,
    render: function() {
        console.log(this.el);
        var users = new Users();
        var that = this;
        users.fetch({
            success: function(users) {
                console.log(users.__proto__);
                console.log(that.el);
                users.each(function(item, index, all) {
                    that.$el.append('<li>' + item.get("todo") + " " + index + '<a class="btn" href="#/edit/' + item.get("id") + '">Edit</a></li>');
                }
                );
            }
        })
    },
});
var ShowUser = Backbone.View.extend({
    el: ".container",

    render: function(options) {
        var that = this;

        console.log("render" + options.id);

        if (options.id) {
            console.log("inside if condition");
            var user = new User({
                id: options.id
            });
            console.log(user.toJSON());
            user.fetch({
                success: function(user) {
                    console.log("success came");
                    console.log(user.toJSON());
                    var template = _.template($('#show-user-template').html());

                    that.$el.html(template({
                        user: user
                    }));

                }
            });
        }
        //console.log("el here"+ el); {dogs: this.collection.toJSON() }

    }
});

var EditUser = Backbone.View.extend({
    el: ".page",
    render: function(options) {
        var that = this;

        console.log("render");

        if (options.id) {
            console.log("inside if condition");
            var user = new User({
                id: options.id
            });
            console.log(user);
            user.fetch({
                success: function(user) {
                    console.log("success came");
                    var template = _.template($('#edit-user-template').html());
                    that.$el.html(template({
                        user: user
                    }));
                }
            });
        } else {
            var template = _.template($('#edit-user-template').html());
            this.$el.html(template({
                user: null
            }));
        }

        console.log("id value" + options.id);
    },
    events: {
        'submit .edit-user-form': 'saveUser',
    },
    saveUser: function(event) {
        var user = new User();
        var id = $('.id').val();
        console.log("id value from form" + id);
        user.save({
            id: $('.id').val(),
            todo: $('.todo').val(),
            email: $('.email').val(),
            username: $('.username').val()

        },
        {
            success: function(users) {
                console.log("got it return");
                router.navigate('', {
                    trigger: true
                });
            }
        }
        );
        event.preventDefault();
    }
});
*/
var Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'new': 'editUser',
        'edit/:id': 'editUser',
    }
});

var userList = new UserList();

var router = new Router();
router.on('route:home', function() {
    console.log("router is started working");
    userList.render({
        el: '.page'
    });
}
);
//var editUser = new EditUser();
router.on('route:editUser', function(id) {
    console.log("router is in editUser");
   /* editUser.render({
        id: id
    });*/
    //userList.render();
}
);

Backbone.history.start();
