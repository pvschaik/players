	function openS() {
		window.open("https://en.wikipedia.org/wiki/Camera_obscura", '_blank');
	}

        function showAbout(file) {
		const aboutTitle = document.getElementById("aboutTitle");
		aboutTitle.innerText = "Hildebrand media player";
	}

        function hideAbout(file) {
		const aboutTitle = document.getElementById("aboutTitle");
		aboutTitle.innerText = "Let's continue.";
	}

        function loadMedium(file) {
		const player = document.getElementById("mediaPlayer");
		player.src = file;
		player.pause();
		//player.type = 'video/mp4'; only use this if the file is of type mp4
		//player.load();

		// update current medium label
		const currentMediumLabel = document.getElementById("currentMedium");
		currentMediumLabel.innerText = file;
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


	function loadLocalMedium(input) {
		const file = input.files[0];
		if (!file) return;

		const url = URL.createObjectURL(file);
		const player = document.getElementById("mediaPlayer");

		// Revoke any previous object URL to free memory
		if (player._objectURL) {
			URL.revokeObjectURL(player._objectURL);
		}

		player._objectURL = url;
		player.src = url;
		player.load();
		// player.play();

		// update current medium label
		// player.src = file;
		const currentMediumLabel = document.getElementById("currentMedium");
		currentMediumLabel.innerText = file.name;
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
		console.log('changeVolume', currentVolume, pChange, updatedVolume); // use console, not alert
	}
