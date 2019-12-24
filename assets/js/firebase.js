var config = {
	databaseURL: "https://vr-productions-fce36.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
var master = database.ref('master');
master.on('value', (function(snapshot) {
	var masterVal = snapshot.val();
	if(masterVal){
		//Rooftop Video
		var rooftopstate = database.ref('the-rooftop/state')
		rooftopstate.on('value', (function(snapshot) { 
			var rooftopstateVal = snapshot.val();
			if(rooftopstateVal){
				var rooftop = database.ref('the-rooftop/id');
				rooftop.on('value', (function(snapshot) {
					var rooftopVal = snapshot.val();
					document.getElementById('rooftopembed').style = "max-width:100%; height:480px; width:855px; border:0px";
					document.getElementById('rooftopembed').src = "https://www.youtube.com/embed/"+rooftopVal;
				}));
			}
		}));
		//Open Mic Night Video
		var omnstate = database.ref('open-mic/state')
		omnstate.on('value', (function(snapshot) { 
			var omnstateVal = snapshot.val();
			if(omnstateVal){
				var omn = database.ref('open-mic/id');
				omn.on('value', (function(snapshot) {
					var omnVal = snapshot.val();
					document.getElementById('omnembed').style = "max-width:100%; height:480px; width:855px; border:0px";
					document.getElementById('omnembed').src = "https://player.twitch.tv/?autoplay=false&video=v"+omnVal;
				}));
			}
		}));
	}
}));
