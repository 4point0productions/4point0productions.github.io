var config = {
	databaseURL: "https://vr-productions-fce36.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
var state = database.ref('state');
state.on('value', (function(snapshot) {
	var id = database.ref('id');
	id.on('value', (function(snapshot) {
		var idVal = snapshot.val();
		document.getElementById('embed').src = "https://www.youtube.com/embed/"+idVal;
	}));
}));