let airHeatCapacity = 0.00121;

//initial game load
function load(){
	if(localStorage.getItem("started")){
		heat = localStorage.getItem("heat");
		volume = localStorage.getItem("volume");
	}else{
		newGame();
	}
	updateCounts();
	setInterval(save, 30000);
}

//update resources count display
function updateCounts(){
	document.getElementById("heat").innerHTML = heat+"J";
	document.getElementById("volume").innerHTML = volume+"m<sup>3</sup>";
	document.getElementById("temp").innerHTML = roundToDec(calcTemp(),4)+"K";
}

//when generate heat button is pressed
function heatButton(){
	heat++;
	updateCounts();
	document.getElementById("heatButton").blur();
}

//save game data to localStorage
function save(){
	localStorage.setItem("heat",heat);
	localStorage.setItem("volume",volume);
	document.getElementById("saveText").innerHTML = "Game last saved at "+new Date().toLocaleTimeString();
}

//passive game tick
function tick(){
	disperseHeat();
}

//delete game data
function deleteSave(){
	heat=0;
	volume=1;
	updateCounts();
}

function disperseHeat(){
	
}

function calcTemp(){
	return heat/volume*airHeatCapacity;
}

function newGame(){
	localStorage.setItem("heat",0);
	localStorage.setItem("volume",1)
	localStorage.setItem("started",true);
}

function roundToDec(num,sig){
	return Math.round(num*Math.pow(10,sig))/Math.pow(10,sig);
}

function showSettings(){
	document.getElementById("settings").style.display="block";
}

function hideSettings(){
	document.getElementById("settings").style.display="none";
}