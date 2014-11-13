function populateVideos(data){
			var entries = data.feed.entry;
  			var output = '<h2 class="label">Latest Videos</h2>';

  			output += '<ul>';
 			for (var i=0; i<data.feed.entry.length; i++) {
			    var entriesID=entries[i].id.$t.substring(38);
			    var entriesTitle=entries[i].title.$t;
			    var entriesDescription=entries[i].media$group.media$description.$t;
			    var entriesThumbnail=entries[i].media$group.media$thumbnail[1].url;

				output += '<li><div class="entriestitle">' + entriesTitle + '</div>';
				output += '<a href="http://www.youtube.com/watch?v=' + entriesID + '&feature=youtube_gdata" target="_blank"><img src="' + entriesThumbnail + '" alt=' + entriesTitle + ' /></a>';
			}
			output +='</ul>';
			document.getElementById('videogroup').innerHTML = output;
		}