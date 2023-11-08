var video = document.querySelector ("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.load ();
	video.pause ();
	video.loop = false; 
	video.volume = document.querySelector ("#slider").value /100;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	console.log("Play Video");
	video.play ();
	document.querySelector ("#volume").textContent = Math.round (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
video.pause ();
console.log ("Pause video");
});

document.querySelector("#slower").addEventListener("click", function() {
video.playbackRate -= 0.1; 
console.log ("Slow Down");
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.1; 
	console.log ("Speed Up");
}); 

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 0.1; 
	if (video.currentTime < video.duration) {
		video.currentTime = 0; 
	}
	console.log ("Skip Ahead");
	console.log("New Time: " + video.currentTime);

}); 

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
	video.muted = true;
	document.querySelector.innerHTML("Unmute");
	}
	else {
	video.muted = false; 
	document.querySelector.innerHTML ("Mute");
	}
}); 

document.querySelector("#slider").addEventListener("click", function() {
var volume = volumeslider.value; 
video.volume = currVolume/100; 
video.volume = document.querySelector ("#volume").textContent = Math.round (video.volume * 100) + "%";

});

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");

});
