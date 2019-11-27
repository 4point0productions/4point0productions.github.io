<div class="encase">
	<button class="collapsible" id="store" data-parent="store" data-child="store-child">Merch Store</button>
		<div id="store-child" class="innertext center" data-parent="store">
			<br />
			<a href="https://www.teepublic.com/user/coastalyst" target="_blank" id="merch_store" data-parent="store">Rooftop Store</a>
			<br /><br />
		</div>
	<button class="collapsible" id="openme" data-parent="openme" data-child="rooftop">The Rooftop</button>
		<div id="rooftop" class="innertext center" data-parent="openme">
			<br />
			<a href="https://account.altvr.com/channels/therooftop" target="_blank" id="rooftop_channel" data-parent="openme">
				<img src="/assets/img/Rooftop_banner.png" alt="The Rooftop Banner" height="auto" width="100%"/>
			</a>
			<p><a href="https://discord.gg/EnxejzC" target="_blank" id="rooftop_discord" data-parent="openme">Rooftop Discord</a></p>
			<p><a href="https://www.youtube.com/channel/UCbfC2jrbV-aO5oSIWcW16Xg" target="_blank" id="rooftop_youtube" data-parent="openme">Rooftop YouTube Channel</a></p>
			<iframe id="embed" allow="encrypted-media" style="max-width:100%; height:640px; width:1140px; border:0px" allowfullscreen  data-parent="openme"></iframe>
			<hr style="height:20px; visibility:hidden;">
		</div>
	<button class="collapsible" id="open_mic_night" data-parent="open_mic_night" data-child="open_mic_night-child">Open Mic Night</button>
		<div id="open_mic_night-child" class="innertext center" data-parent="open_mic_night">
			<br />
			<a href="https://account.altvr.com/channels/openmicnight" target="_blank" id="open_mic_night_channel" data-parent="open_mic_night">
				<img src="/assets/img/omn_banner.png" alt="Open Mic Night Banner" height="auto" width="100%"/>
			</a>
			<p><a href="https://discord.gg/6hUbDyC" target="_blank" id="open_mic_night_discord" data-parent="open_mic_night">Open Mic Night Discord</a></p>
		</div>
	<button class="collapsible" id="minimum_specs" data-parent="minimum_specs" data-child="minimum_specs-child">Minimum Specs</button>
		<div id="minimum_specs-child" class="innertext center" data-parent="minimum_specs">
			<br />
			<a href="https://account.altvr.com/channels/minimumspecs" target="_blank" id="minimum_specs_channel" data-parent="minimum_specs">
				<img src="/assets/img/ms_banner.png" alt="Minimum Specs Banner" height="auto" width="100%"/>
			</a>
			<p><a href="https://discord.gg/WNUfMr5" target="_blank" id="minimum_specs_discord" data-parent="minimum_specs">Minimum Specs Discord</a></p>
		</div>
</div>
<script src="https://www.gstatic.com/firebasejs/5.1.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.1.0/firebase-database.js"></script>
<script>
	// Initialize Firebase
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
</script>
<!---->
