var config = {
	databaseURL: "https://vr-productions-fce36.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
var state = database.ref('state');
state.on('value', (function(snapshot) {
	//Rooftop Video
	var rooftop = database.ref('rooftop');
	rooftop.on('value', (function(snapshot) {
		var rooftopVal = snapshot.val();
		document.getElementById('rooftopembed').src = "https://www.youtube.com/embed/"+rooftopVal;
	}));
	//Open Mic Night Video
	/*
	var omn = database.ref('rooftop');
	omn.on('value', (function(snapshot) {
		var omnVal = snapshot.val();
		document.getElementById('omnembed').src = "https://www.youtube.com/embed/"+omnVal;
	}));
	*/
}));
