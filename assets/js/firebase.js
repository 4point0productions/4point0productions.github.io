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
		var rooftop = database.ref('rooftop');
		var rooftopstate = database.ref('rooftopstate')
		rooftopstate.on('value', (function(snapshot) { 
			var rooftopstateVal = snapshot.val();
			if(rooftopstateVal){
				rooftop.on('value', (function(snapshot) {
					var rooftopVal = snapshot.val();
					document.getElementById('rooftopembed').style = "max-width:100%; height:480px; width:855px; border:0px";
					document.getElementById('rooftopembed').src = "https://www.youtube.com/embed/"+rooftopVal;
				}));
			}
		}));
		//Open Mic Night Video
		var omn = database.ref('omn');
		var omnstate = database.ref('omnstate')
		omnstate.on('value', (function(snapshot) { 
			var omnstateVal = snapshot.val();
			if(omnstateVal){
				omn.on('value', (function(snapshot) {
					var omnVal = snapshot.val();
					document.getElementById('omnembed').style = "max-width:100%; height:480px; width:855px; border:0px";
					document.getElementById('omnembed').src = "https://www.youtube.com/embed/"+omnVal;
				}));
			}
		}));
	}
}));
