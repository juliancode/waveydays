// GLOBAL VARS

var weather = [];
var output = "";

// map functions

function buildArray(feed){
	weather.push(feed);
}

function plotMap(){
	for (var i = 0; i < weather.length; i++){
		output += '<google-map-marker style="background:black;" icon="' 
		+ weather[i].current_observation.icon_url 
		+ '" latitude="' 
		+ weather[i].current_observation.display_location.latitude 
		+ '" longitude="' 
		+ weather[i].current_observation.display_location.longitude 
		+ '" draggable="false" title="' 
		+ weather[i].current_observation.display_location.city 
		+ '"><div class="marker"><h1 style="font-family: Roboto Condensed;font-size: 1.1rem;margin-bottom: 0.5rem;text-align: center;">' 
		+ weather[i].current_observation.display_location.city 
		+ ' - '
		+ weather[i].current_observation.temp_c
		+ 'ºC</h1><img style="width: 6rem; height: auto; margin: 0 auto;" src="images/' 
		+ weather[i].current_observation.display_location.city 
		+ '.jpg"></div></google-map-marker>';
		$("#map-canvas").html(output);	
	}
}

// ajax calls

var ajax1 = $.ajax({
type:'GET',
url:"http://api.wunderground.com/api/4e82987695572e2d/conditions/q/IS/Akranes.json",
dataType:'jsonp',
success:function(feed) {
	buildArray(feed);
	}
});

var ajax2 = $.ajax({
type:'GET',
url:"http://api.wunderground.com/api/4e82987695572e2d/conditions/q/IS/Eyrarbakki.json",
dataType:'jsonp',
success:function(feed) {
	buildArray(feed);
	}
});

var ajax3 = $.ajax({
type:'GET',
url:"http://api.wunderground.com/api/4e82987695572e2d/conditions/q/IS/Stykkisholmur.json",
dataType:'jsonp',
success:function(feed) {
	buildArray(feed);
	}
});

var ajax4 = $.ajax({
type:'GET',
url:"http://api.wunderground.com/api/4e82987695572e2d/conditions/q/IS/Keflavik.json",
dataType:'jsonp',
success:function(feed) {
	buildArray(feed);
}});

// when ajax has completed

$.when(ajax1, ajax2, ajax3, ajax4).done(function(){
	plotMap();
});

