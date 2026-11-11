function changePlaybackSpeed(change) {

    const player = document.getElementById("mediaPlayer");

    // Change speed relative to current speed
    player.playbackRate *= (1 + change);

    // Set minimum and maximum speeds
    player.playbackRate = Math.max(0.25,
        Math.min(2.0, player.playbackRate));

    // Display current speed as a percentage
    document.getElementById("currentSpeed").textContent =
        Math.round(player.playbackRate * 100) + "%";

}

document.addEventListener("keydown", function(event) {

    if (event.ctrlKey && event.key == "1") {
        event.preventDefault();
        changePlaybackSpeed(0.01);
    }

    if (event.ctrlKey && event.key == "2") {
        event.preventDefault();
        changePlaybackSpeed(0.10);
    }

    if (event.ctrlKey && event.key == "3") {
        event.preventDefault();
        changePlaybackSpeed(-0.01);
    }

    if (event.ctrlKey && event.key == "4") {
        event.preventDefault();
        changePlaybackSpeed(-0.10);
    }
});


function openS() {
		/* alert("S audio player presents\n\n" + 
			"T  h  e     g  r  a  n  d  f  a  t  h  e  r     o  f     J  S     B  a  c  h  ."); */
		// window.open("https://en.wikipedia.org/wiki/Jan_Pieterszoon_Sweelinck", '_blank');
		window.open("https://www.britannica.com/biography/Jan-Pieterszoon-Sweelinck", '_blank');
		// window.open("https://www.encyclopedia.com/people/literature-and-arts/music-history-composers-and-performers-biographies/jan-pieterszoon-sweelinck", '_blank');
	}

        function showAbout(file) {
		const aboutTitle = document.getElementById("aboutTitle");
		aboutTitle.innerText = "Sweelinck audio player";
	}

        function hideAbout(file) {
		const aboutTitle = document.getElementById("aboutTitle");
		aboutTitle.innerText = "Let's continue.";
	}

        function loadAudio(file) {
		const player = document.getElementById("mediaPlayer");
		prepareRestore(file);
		player.src = file;
		player.pause();		//player.load();
		document.getElementById("mediaPlayer").playbackRate = 1;
		document.getElementById("currentSpeed").textContent = "100%";

		// update current audio label
		const currentAudioLabel = document.getElementById("currentAudio");
		currentAudioLabel.innerText = file;
        }

	function resetToStart() {
		const player = document.getElementById("mediaPlayer");
		player.currentTime = 0;
	}

        function getCurrentTime() {
		const player = document.getElementById("mediaPlayer");
		const currentTime = player.currentTime;
	}
	
	function setCurrentTime() {
		const seconds = document.getElementById("seconds");
		const minutes = document.getElementById("minutes");

		let intervalSeconds;
		if (isNumeric(seconds.value)) {
			intervalSeconds = parseInt(seconds.value);
 		} else {
			intervalSeconds = 0;
		}

		let intervalMinutes;
		if (isNumeric(minutes.value)) {
			intervalMinutes = 60 * parseInt(minutes.value);
 		} else {
			intervalMinutes = 0;
		}

		const interval = intervalMinutes + intervalSeconds;
		const player = document.getElementById("mediaPlayer");
		player.currentTime = interval;
        } 

	function advance(pInterval) {
		const player = document.getElementById("mediaPlayer");
		const currentTime = player.currentTime;
		const newTime = currentTime + pInterval;
		player.currentTime = newTime;
        } 

	function isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function advanceNumber(pDirection) {
		const seconds = document.getElementById("seconds");
		const minutes = document.getElementById("minutes");

		let intervalSeconds;
		if (isNumeric(seconds.value)) {
			intervalSeconds = pDirection * parseInt(seconds.value);
 		} else {
			intervalSeconds = 0;
		}

		let intervalMinutes;
		if (isNumeric(minutes.value)) {
			intervalMinutes = pDirection * 60 * parseInt(minutes.value);
 		} else {
			intervalMinutes = 0;
		}

		const interval = intervalMinutes + intervalSeconds;
		const player = document.getElementById("mediaPlayer");
		const currentTime = player.currentTime;
		const newTime = currentTime + interval;
		player.currentTime = newTime;
        } 

	function playMedium() {
		const player = document.getElementById("mediaPlayer");
		player.play();
	}

	function pauseMedium() {
		const player = document.getElementById("mediaPlayer");
		player.pause();
	}

	function showShortCutLabels() {
		//document.getElementById('shortCutLabels').style.display = 'block';
		document.getElementById('SC1').style.display = 'block';
		document.getElementById('SC2').style.display = 'block';
		document.getElementById('SC3').style.display = 'block';
		document.getElementById('SC4').style.display = 'block';
		document.getElementById('SC5').style.display = 'block';
		document.getElementById('SC6').style.display = 'block';
		document.getElementById('SC7').style.display = 'block';
		document.getElementById('SC8').style.display = 'block';
	}

	function showShortCutLabelsSpeed() {
		document.getElementById('SC9').style.display = 'block';
		document.getElementById('SC0').style.display = 'block';
		document.getElementById('SpeedPlus1').style.display = 'block';
		document.getElementById('SpeedPlus10').style.display = 'block';
		document.getElementById('SpeedMinus1').style.display = 'block';
		document.getElementById('SpeedMinus10').style.display = 'block';
	}
 
	function hideShortCutLabels() {
		//document.getElementById('shortCutLabels').style.display = 'none';
		document.getElementById('SC1').style.display = 'none';
		document.getElementById('SC2').style.display = 'none';
		document.getElementById('SC3').style.display = 'none';
		document.getElementById('SC4').style.display = 'none';
		document.getElementById('SC5').style.display = 'none';
		document.getElementById('SC6').style.display = 'none';
		document.getElementById('SC7').style.display = 'none';
		document.getElementById('SC8').style.display = 'none';
	}

	function hideShortCutLabelsSpeed() {
		document.getElementById('SC9').style.display = 'none';
		document.getElementById('SC0').style.display = 'none';
		document.getElementById('SpeedPlus1').style.display = 'none';
		document.getElementById('SpeedPlus10').style.display = 'none';
		document.getElementById('SpeedMinus1').style.display = 'none';
		document.getElementById('SpeedMinus10').style.display = 'none';
	}

	function loadLocalAudio(input) {
		const file = input.files[0];
		if (!file) return;

		const url = URL.createObjectURL(file);
		const player = document.getElementById("mediaPlayer");

		// Revoke any previous object URL to free memory
		if (player._objectURL) {
			URL.revokeObjectURL(player._objectURL);
			}

		player._objectURL = url;
		prepareRestore(file.name + "|" + file.size);
		player.src = url;
		player.load();
		// player.play();

		// update current audio label
		const currentAudioLabel = document.getElementById("currentAudio");
		currentAudioLabel.innerText = file.name;

		document.getElementById("mediaPlayer").playbackRate = 1;
		document.getElementById("currentSpeed").textContent = "100%";
	}

	function hideHeaderSection() {
		document.getElementById('headerSection').style.display = 'none';
		document.getElementById('concise').style.display = 'none';
		document.getElementById('verbose').style.display = 'inline-block';
		document.getElementById('headerDisplay').style.textAlign = 'right';
	}

	function showHeaderSection() {
		document.getElementById('headerSection').style.display = 'block';
		document.getElementById('concise').style.display = 'inline-block';
		document.getElementById('verbose').style.display = 'none';
		document.getElementById('headerDisplay').style.textAlign = 'right';
	}

	function changeVolume(pChange) {
		const mediaPlayer = document.getElementById('mediaPlayer');
		const currentVolume = mediaPlayer.volume;
		const updatedVolume = Math.min(1.0, Math.max(0.0, currentVolume + pChange));
		mediaPlayer.volume = updatedVolume;
	}





// ---- Remembered playback position ----
let pendingKey = null;   // key of the medium being loaded
let currentKey = null;   // key of the medium whose position is being saved
let lastSaveTime = 0;

function savePosition() {
	if (!currentKey) return;
	const player = document.getElementById("mediaPlayer");
	try {
		localStorage.setItem("pos:" + currentKey, player.currentTime);
	} catch (e) { /* storage unavailable: ignore */ }
}

function prepareRestore(key) {
	savePosition();        // save the old medium's position first
	currentKey = null;     // pause saving until the new medium has loaded
	pendingKey = key;
}

const mediaPlayer = document.getElementById("mediaPlayer");

mediaPlayer.addEventListener("loadedmetadata", function () {
	if (!pendingKey) return;
	let saved = 0;
	try {
		saved = parseFloat(localStorage.getItem("pos:" + pendingKey));
	} catch (e) {}
	// Restore only if valid and not within 5 s of the end
	if (isFinite(saved) && saved > 0 && saved < mediaPlayer.duration - 5) {
		mediaPlayer.currentTime = saved;
	}
	currentKey = pendingKey;
	pendingKey = null;
});

// Save about every 2 seconds while playing, and on pause
mediaPlayer.addEventListener("timeupdate", function () {
	const now = Date.now();
	if (now - lastSaveTime > 2000) {
		lastSaveTime = now;
		savePosition();
	}
});
mediaPlayer.addEventListener("pause", savePosition);

// Finished: forget the position so it starts from 0 next time
mediaPlayer.addEventListener("ended", function () {
	if (!currentKey) return;
	try { localStorage.removeItem("pos:" + currentKey); } catch (e) {}
});

// Save when the tab is closed or reloaded
window.addEventListener("pagehide", savePosition);

