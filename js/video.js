var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=document.querySelector("#player1")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	volume.innerHTML= slider.value + "%"
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *=.95 
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /=.95 
	console.log(video.playbackRate)
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.add("OldSchool");
	video.vintage()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removing CSS");
	video.classList("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removing CSS");
	video.classList("oldSchool")
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volume");
	console.log()
	video.volume = this.value/100
	volume.innerHTML=this.value + "%"
	console.log(video.volume)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
if (video.muted == true){
	video.muted = false
	console.log("Mute the Video")
	this.innerHTML = "Mute"
}

else {
	video.muted = true
	console.log("Unute the Video")
	this.innerHTML="Unmute"
}
});	

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");

if (video.currentTime= 180)
	video.skip=180
	video.skip == 15
	console.log("Skip Ahead")

else (video.currentTime=180)
	 video.skip == "Play"

});