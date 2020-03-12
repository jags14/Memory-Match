	/*	document.getElementsById('firstRowFirstElement').addEventListener('mouseover', hoverFunc);
		document.getElementById('firstRowFirstElement').addEventListener('mouseout', mouseOutFunc);
		function hoverFunc(){
			document.getElementById('firstRowFirstElement').style.backgroundColor = 'orange';
		}
		function mouseOutFunc() {
			// body...
			document.getElementById('firstRowFirstElement').style.backgroundColor = 'blue';
		} 



let elements = document.getElementsByTagName('td');


function hoverFunc(){

	elements[0][0].target.style.backgroundColor = 'orange';
		}
function mouseOutFunc() {
			// body...
	document.getElementsByTagName('td').style.backgroundColor = 'blue';
		}

document.getElementsByTagName('td').addEventListener('mouseover', hoverFunc);
document.getElementsByTagName('td').addEventListener('mouseout', mouseOutFunc); */

// Global variables go here
var interval ;
var started = false;
var clickedArray = [];
var time = 0;
var ready = true;
var numCompleted = 0;

// functions call go here

setUp();

// Define functions here

function hide(cell){
	cell.style.backgroundColor = 'blue';
	cell.innerHTML = "";
	cell.clicked = false;

}
