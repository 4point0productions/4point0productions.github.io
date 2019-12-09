var config = {
	databaseURL: "https://vr-productions-fce36.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
var master = database.ref('master');
master.on('value', (function(snapshot) {
	if(master){
		//Rooftop Video
		var rooftop = database.ref('rooftop');
		var rooftopstate = database.ref('rooftopstate')
		rooftop.on('value', (function(snapshot) {
			if(rooftopstate){
				var rooftopVal = snapshot.val();
				document.getElementById('rooftopembed').style = "max-width:100%; height:480px; width:855px; border:0px";
				document.getElementById('rooftopembed').src = "https://www.youtube.com/embed/"+rooftopVal;
			}
		}));
		//Open Mic Night Video
		var omn = database.ref('omn');
		var omnstate = database.ref('omnstate')
		omn.on('value', (function(snapshot) {
			if(omnstate){
				var omnVal = snapshot.val();
				document.getElementById('omnembed').style = "max-width:100%; height:480px; width:855px; border:0px";
				document.getElementById('omnembed').src = "https://www.youtube.com/embed/"+omnVal;
			}
		}));
	}
}));
