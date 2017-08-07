var canvas = document.getElementById('canvas');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var random = document.getElementById('random');
var clear = document.getElementById('clear');
var width = 200;
var height = 100;
var array = [];


// generate randomly the cells in array and in DOM.
for (var i = 0; i < width*height; i++){
	var cell = Math.random() >= 1;

	array.push(cell);

	var newCell = document.createElement('div');
	newCell.classList.add('cell');
	if (cell == true ){
		newCell.classList.add('alive');
	} else if ( cell == false ){
		newCell.classList.add('dead');
	}
	newCell.setAttribute('id', i);
	canvas.appendChild(newCell);
}

// RANDOM Button
random.onclick = function(){
	var newState = [];
	for (var i = 0; i < width*height; i++){
		var cell = Math.random() >= 0.5;

		newState.push(cell);
	}
	array = newState.slice(0);

	for (var i = 0; i < length; i++){
		currentCell = document.getElementById(i);
		if (array[i] == false){
			currentCell.classList.remove('alive');
			currentCell.classList.add('dead');
		} else {
			currentCell.classList.remove('dead');
			currentCell.classList.add('alive');
		}
	}
}

// CLEAR Button
clear.onclick = function(){
	var newState = [];
	for (var i = 0; i < width*height; i++){
		var cell = false;

		newState.push(cell);
	}
	array = newState.slice(0);

	for (var i = 0; i < length; i++){
		currentCell = document.getElementById(i);
		if (array[i] == false){
			currentCell.classList.remove('alive');
			currentCell.classList.add('dead');
		} else {
			currentCell.classList.remove('dead');
			currentCell.classList.add('alive');
		}
	}
}

// Actualize the state of the cells.
start.onclick = function(){
	refresh = window.setInterval(function(){
	var length = array.length;
	var newState = [];
		for (var i = 0; i < length; i++){
			var neighbourAlive = 0;

			// var neighbourUpLeft = array[i - width - 1] == true && !(i%width == 0);
			// var neighbourUp = array[i - width] == true;
			// var neighbourUpRight = array[i - width + 1] == true && !(i%width == 99);
			// var neighbourLeft = array[i - 1] == true && !(i%width == 0);
			// var neighbourRight = array[i + 1] == true && !(i%width == 99);
			// var neighbourDownLeft = array[i + width - 1] == true && !(i%width == 0);
			// var neighbourDown = array[i + width] == true;
			// var neighbourDownRight = array[i + width + 1] == true && !(i%width == 99);
			// var neighbour = [];
			//
			// neighbour.push(neighbourUpLeft, neighbourUp, neighbourUpRight, neighbourLeft, neighbourRight, neighbourDownLeft, neighbourDown, neighbourDownRight);
			//
			// for (var i = 0; i < 8; i++){
			// 	if (typeof neighbour[i] === 'undefined'){
			// 		// do nothing
			// 	} else if (neighbour[i]){
			// 		neighbourAlive++;
			// 	}
			// }


			// UP LEFT
			if (typeof array[i - width - 1] === 'undefined'){
				// do nothing
			} else if (array[i - width - 1] == true  && !(i%width == 0)){
				neighbourAlive++;
			}

			// UP
			if (typeof array[i - width] === 'undefined'){
				// do nothing
			} else if (array[i - width] == true){
				neighbourAlive++;
			}

			// UP RIGHT
			if (typeof array[i - width + 1] === 'undefined'){
				// do nothing
			} else if (array[i - width + 1] == true && !(i%width == (width - 1))){
				neighbourAlive++;
			}

			// LEFT
			if (typeof array[i - 1] === 'undefined'){
				// do nothing
			} else if (array[i - 1] == true && !(i%width == 0)){
				neighbourAlive++;
			}

			// RIGHT
			if (typeof array[i + 1] === 'undefined'){
				// do nothing
			} else if (array[i + 1] == true && !(i%width == 99)){
				neighbourAlive++;
			}

			// DOWN LEFT
			if (typeof array[i + width - 1] === 'undefined'){
				// do nothing
			} else if (array[i + width - 1] == true && !(i%width == 0)){
				neighbourAlive++;
			}

			// DOWN
			if (typeof array[i + width] === 'undefined'){
				// do nothing
			} else if (array[i + width] == true){
				neighbourAlive++;
			}

			// DOWN RIGHT
			if (typeof array[i + width + 1] === 'undefined'){
				// do nothing
			} else if (array[i + width + 1] == true && !(i%width == 99)){
				neighbourAlive++;
			}


			if (array[i] == false && neighbourAlive == 3){
				var cell = true;
			} else if (array[i] == true && neighbourAlive == 3){
				var cell = true;
			} else if (array[i] == true && neighbourAlive == 2){
				var cell = true;
			}else {
				var cell = false;
			}

			newState.push(cell);

		}

		array = newState.slice(0);


		for (var i = 0; i < length; i++){
			currentCell = document.getElementById(i);
			if (array[i] == false){
				currentCell.classList.remove('alive');
				currentCell.classList.add('dead');
			} else {
				currentCell.classList.remove('dead');
				currentCell.classList.add('alive');
			}
		}

	}, 100);
};

stop.onclick = function(){
	window.clearInterval(refresh);
};

var cells = document.getElementsByClassName('cell');
for ( var i = 0; i < cells.length; i++){

	cells[i].onclick = function(){
		current = this;
		if ( current.classList.contains('alive') ){
			current.classList.remove('alive');
			current.classList.add('dead');
			array[current.id] = false;
			console.log(current.id);

		} else if ( current.classList.contains('dead') ){
			current.classList.remove('dead');
			current.classList.add('alive');
			array[current.id] = true;
			console.log(current.id);
		}
	};
}
