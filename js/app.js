// ********** set date ************
const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

// ********** scroll ************
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function(){
	const scrollHeight = window.pageYOffset;
	
	if(scrollHeight > 500) {
		topLink.style.display = "block";
	}
	else {
		topLink.style.display = "none";
	}
});

// ********** open about section ************

function openAboutSection(){
	var element = document.getElementById("about");
	if (element.style.display === "block") {
		element.style.display = "none";
	} else {
		element.style.display = "block";
	}
}

// ********** manage video btn ************

function playBtn(){
	var pausePlayBtn = document.getElementById("pausePlay")
	if(pausePlayBtn.innerHTML === "play_arrow") {
		pausePlayBtn.innerHTML = "pause";
	}
	else {
		pausePlayBtn.innerHTML = "play_arrow";
	}
}
function volumeBtn(){
	var volume = document.getElementById("volume")
	if(volume.innerHTML === "volume_off") {
		volume.innerHTML = "volume_up";
	}
	else {
		volume.innerHTML = "volume_off";
	}
}

const btnPlay = document.querySelector('.play-btn');
const btnVolume = document.querySelector('.volume-btn');
const video = document.querySelector('.video-container');

btnPlay.addEventListener('click', function(){
	if( !btnPlay.classList.contains('slide')) {
		btnPlay.classList.add('slide');
		video.pause();
	}
	else {
		btnPlay.classList.remove('slide');
		video.play();
	}
	
});

btnVolume.addEventListener('click', function(){
	if( !btnVolume.classList.contains('slide')) {
		btnVolume.classList.add('slide');
		video.volume = 0.5;
		if(video.muted) {
			video.muted = false;
		}
	}
	else {
		btnVolume.classList.remove('slide');
		video.volume = 0.025;
	}
});