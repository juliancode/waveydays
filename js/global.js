// youtube slider
// ==============


function populateVideos(data) {
    "use strict";
    // variables
    var entries = data.feed.entry,
        output = "",
        i = 0,
        entriesID = "";

    // loops through data feed getting videos and adding to output variable
    for (i = 0; i < data.feed.entry.length; i++) {
        entriesID = entries[i].id.$t.substring(38);

        output += '<iframe id="child" src="//www.youtube.com/embed/' + entriesID + '" frameborder="0" allowfullscreen></iframe>';
    }
    $(".slidercontainer").html(output);
}

$(document).ready(function() {
	// variables
	var button1 = $(".button:nth-child(1)"),
	button2 = $(".button:nth-child(2)"),
	button3 = $(".button:nth-child(3)"),
	button4 = $(".button:nth-child(4)"),
	button5 = $(".button:nth-child(5)"),
	button6 = $(".button:nth-child(6)"),
	allButtons = $(".button:nth-child(1),.button:nth-child(2),.button:nth-child(3),.button:nth-child(4),.button:nth-child(5),.button:nth-child(6)"),

	child1 = $("#child:nth-child(1)"),
	child2 = $("#child:nth-child(2)"),
	child3 = $("#child:nth-child(3)"),
	child4 = $("#child:nth-child(4)"),
	child5 = $("#child:nth-child(5)"),
	child6 = $("#child:nth-child(6)"),

	slideTime = "250";

	//gives first button the class of current
	button1.addClass("current");

	//slider function 
	function slider(position, time){
		child1.velocity({ left: position + "%"}, time);
		child2.velocity({ left: position + 100 + "%" }, time);
		child3.velocity({ left: position + 200 + "%" }, time);
		child4.velocity({ left: position + 300 + "%" }, time);
		child5.velocity({ left: position + 400 + "%" }, time);
		child6.velocity({ left: position + 500 + "%" }, time);
	}

	//button events
	button1.click (function(){
		slider(0, slideTime);
		allButtons.removeClass("current");
		$(this).addClass("current");
	});

	button2.click (function(){
		slider(-100, slideTime);
		allButtons.removeClass("current");
		$(this).addClass("current");
	});

	button3.click (function(){
		slider(-200, slideTime);
		allButtons.removeClass("current");
		$(this).addClass("current");
	});

	button4.click (function(){
		slider(-300, slideTime);
		allButtons.removeClass("current");
		$(this).addClass("current");
	});

	button5.click (function(){
		slider(-400, slideTime);
		allButtons.removeClass("current");
		$(this).addClass("current");
	});

	button6.click (function(){
		slider(-500, slideTime);
		allButtons.removeClass("current");
		$(this).addClass("current");
	});
});


// dropdown navigation code
// ========================

var drop = $("#drop");
var seconditem = $(".seconditem");
var secondlist = $(".secondlist")

function toggleNav(){
	var open = false;
	// if the navigation is open close it, else open (toggle effect)
	if (open) {
		secondlist.velocity({height: "0rem"}, 250);
		open = false;
	} else {
		secondlist.velocity({height: "15rem"}, 250);
		console.log(open);
	}
}

// function to execute when dropdown is clicked
drop.click(function(){
	toggleNav();
});

