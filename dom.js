
document.getElementById("weight").addEventListener("input", calculateBodyFat);
document.getElementById("waist").addEventListener("input", calculateBodyFat);
document.getElementById("wrist").addEventListener("input", calculateBodyFat);
document.getElementById("hip").addEventListener("input", calculateBodyFat);
document.getElementById("forearm").addEventListener("input", calculateBodyFat);
document.getElementById("task").addEventListener("input", goal);
var percentage;
var weight;

function calculateBodyFat(){
	//fetches all the values I could probably initiallize the element outside of the function
 	weight = document.getElementById("weight").value;
	var waist = document.getElementById("waist").value;
	var wrist = document.getElementById("wrist").value;
	var hip = document.getElementById("hip").value;
	var forearm = document.getElementById("forearm").value;

	//Creates the variables that may be used
	var x, y, z, a, b, lean, fat;

	if((wrist + hip + forearm) == 0){

		//Formula for males
		x = (weight * 1.082) + 94.42;
		y = waist * 4.15;

		lean = x - y;
	}
	else{

		//Forces user to enter all values
		if((wrist * hip * forearm) == 0){
			document.getElementById("information").textContent = " Please Enter in all Values";
			document.getElementById("information").style.fontSize = "20px";
		}
		else{

			//Formula for Female
			x = (weight * .732) + 8.987;
			y = wrist / 3.140;
			z = waist * 0.157;
			a = hip * .249;
			b = forearm * 0.434;

			lean = x + y - z - a + 5;
		}
	}

	fat = weight - lean;

	percentage = fat * 100 / weight;

	if(percentage > 0 && percentage <= 100){		
		document.getElementById("information").textContent = "Body Fat " + percentage.toFixed(2) + "%";
		document.getElementById("information").style.fontSize = "100px";
		backgroundColor(percentage);
		document.getElementById("bdy").style.color = "#FFF";
		document.getElementById("goal").style.visibility = "visible";
	}
}

function backgroundColor(n){
	var red = (510 / 41) * n - (4080 / 41);
	var green = (-510 / 41) * n + (14535 / 41);

	red = Math.floor(red);
	green = Math.floor(green);
	console.log(red + " " + green);

	document.getElementById("bdy").style.backgroundColor = "rgb(" + red + ", " + green + ", 0)"; 
}

function goal(n){
	var goal = document.getElementById("task").value;

	document.getElementById("advice").textContent = "So you want to change your body fat by " + Math.abs(percentage - goal).toFixed(2) + "%. That is approxiamately " + Math.floor((weight / 100 * Math.abs(percentage - goal))) + "lbs. It's going to be a tough road ahead of you but I know you can do it. I suggest going to r/lostit or r/leangains to help you get started";
}


// Formula used from http://www.bmi-calculator.net/body-fat-calculator/body-fat-formula.php
// Body Fat Formula For Women
// Factor 1	(Total body weight x 0.732) + 8.987
// Factor 2	Wrist measurement (at fullest point) / 3.140
// Factor 3	Waist measurement (at naval) x 0.157
// Factor 4	Hip measurement (at fullest point) x 0.249
// Factor 5	Forearm measurement (at fullest point) x 0.434
// Lean Body Mass	Factor 1 + Factor 2 - Factor 3 - Factor 4 + Factor 5
// Body Fat Weight	Total bodyweight - Lean Body Mass
// Body Fat Percentage	(Body Fat Weight x 100) / total bodyweight
 
// Body Fat Formula For Men
// Factor 1	(Total body weight x 1.082) + 94.42
// Factor 2	Waist measurement x 4.15
// Lean Body Mass	Factor 1 - Factor 2
// Body Fat Weight	Total bodyweight - Lean Body Mass
// Body Fat Percentage	(Body Fat Weight x 100) / total bodyweight