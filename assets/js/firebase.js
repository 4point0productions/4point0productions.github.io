var config = {
	databaseURL: "https://vr-productions-fce36.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
//Rooftop Video
var rooftop = database.ref('the-rooftop/id');
rooftop.on('value', (function(snapshot) { 
	var rooftopVal = snapshot.val();
	if(rooftopVal){
			document.getElementById('rooftopembed').style = "max-width:100%; height:480px; width:855px; border:0px";
			document.getElementById('rooftopembed').src = "https://www.youtube.com/embed/"+rooftopVal;
		
	}
	if(!rooftopVal){
		document.getElementById('rooftopembed').style = "max-width:0px; height:0px; width:0px; border:0px";
		document.getElementById('rooftopembed').src = "";
	}
}));
//Open Mic Night Video
var omn = database.ref('open-mic/id');
omn.on('value', (function(snapshot) {
	var omnVal = snapshot.val();
	if(omnVal){
		document.getElementById('omnembed').style = "max-width:100%; height:480px; width:855px; border:0px";
		document.getElementById('omnembed').src = "https://www.youtube.com/embed/"+omnVal;
	}
	if(!omnVal){
		document.getElementById('omnembed').style = "max-width:0px; height:0px; width:0px; border:0px";
		document.getElementById('omnembed').src = "";
	}
}));
//The Hunt
var hunt = database.ref('the-hunt/id');
hunt.on('value', (function(snapshot) {
	var huntVal = snapshot.val();
	if(huntVal){
		document.getElementById('huntembed').style = "max-width:100%; height:480px; width:855px; border:0px";
		document.getElementById('huntembed').src = "https://www.youtube.com/embed/"+huntVal;
	}
	if(!omnVal){
		document.getElementById('huntembed').style = "max-width:0px; height:0px; width:0px; border:0px";
		document.getElementById('huntembed').src = "";
	}
}));