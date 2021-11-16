var video = document.getElementById("player1");
const btn = document.getElementById("mute");
var r = 1;
window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.getElementById("play").addEventListener("click",  function (){
	video.play();
	document.getElementById("volume").innerText = video.volume*100 + "%";
});
document.getElementById("pause").addEventListener("click",  function (){
	video.pause();
});
document.getElementById("slower").addEventListener("click",  function (){
	r = r-.05;
	video.playbackRate = r;
	console.log(video.playbackRate)
});
document.getElementById("faster").addEventListener("click",  function (){
	r = r+.05;
	video.playbackRate = r;
	console.log(video.playbackRate);
});
document.getElementById("skip").addEventListener("click",  function (){
	if(video.duration<video.currentTime+15){
		video.currentTime = 0;
	}
	else{
		video.currentTime = video.currentTime+15;
	}
	console.log(video.currentTime);
});
btn.addEventListener("click",  function (){
	if(btn.innerText == "Mute"){
		btn.innerText = "Unmute"
		video.muted = true;
		document.getElementById("volume").innerText = 0 + "%";
	}
	else{
		btn.innerText = "Mute"
		video.muted = false;
		document.getElementById("volume").innerText = video.volume*100 + "%";
	}

});
let volume = document.getElementById("slider");
let volVal = document.getElementById("volume");
volume.addEventListener("change", function(e) {
	video.volume = e.currentTarget.value / 100;
	volVal.innerText = e.currentTarget.value + "%";
})
document.getElementById("vintage").addEventListener("click",  function (){
	video.classList.add("oldSchool")
});
document.getElementById("orig").addEventListener("click",  function (){
	video.classList.remove("oldSchool")
});