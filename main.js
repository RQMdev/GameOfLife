var canvas = document.getElementById('canvas');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var random = document.getElementById('random');
var clear = document.getElementById('clear');
var width = 200;
var height = 100;
var array = [];
var isRunning = false;

function randomWithProbability() {
  var notRandomNumbers = [0, 0, 0, 0, 0, 1, 2, 3];
  var idx = Math.floor(Math.random() * notRandomNumbers.length);
  return notRandomNumbers[idx];
}

// generate randomly the cells in array and in DOM.
for (var i = 0; i < width*height; i++){
	var cell = randomWithProbability();

	array.push(cell);

	var newCell = document.createElement('div');
	newCell.classList.add('cell');
	if (cell === 0 ){
		newCell.classList.add('dead');
	} else {
		newCell.classList.add('alive');
	}

	if (cell === 1){
		newCell.classList.add('red');
	} else if (cell === 2){
		newCell.classList.add('purple');
	} else if (cell === 3){
		newCell.classList.add('yellow');
	}
	newCell.setAttribute('id', i);
	canvas.appendChild(newCell);
}

// RANDOM Button
random.onclick = function(){
  var length = array.length;
	var newState = [];
	for (var i = 0; i < width*height; i++){
		var cell = randomWithProbability();

		newState.push(cell);
	}
	array = newState.slice(0);

	for (var i = 0; i < length; i++){
		currentCell = document.getElementById(i);
		if (array[i] === 0){
			currentCell.classList.remove('alive');
			currentCell.classList.remove('red');
			currentCell.classList.remove('purple');
			currentCell.classList.remove('yellow');
			currentCell.classList.add('dead');
		} else {
			currentCell.classList.remove('dead');
			currentCell.classList.add('alive');
		}

		if (array[i] === 1){
			currentCell.classList.add('red');
		} else if (array[i] === 2){
			currentCell.classList.add('purple');
		} else if (array[i] === 3){
			currentCell.classList.add('yellow');
		}
	}
}

// CLEAR Button
clear.onclick = function(){
  var length = array.length;
	var newState = [];
	for (var i = 0; i < width*height; i++){
		var cell = 0;

		newState.push(cell);
	}
	array = newState.slice(0);

	for (var i = 0; i < length; i++){
		currentCell = document.getElementById(i);
		if (array[i] === 0){
			currentCell.classList.remove('alive');
			currentCell.classList.remove('red');
			currentCell.classList.remove('purple');
			currentCell.classList.remove('yellow');
			currentCell.classList.add('dead');
		} else {
			currentCell.classList.remove('dead');
			currentCell.classList.add('alive');
		}
	}
}

// Actualize the state of the cells.
start.onclick = function(){

  if (isRunning == false) {
    isRunning = true;
  	refresh = window.setInterval(function(){
  	var length = array.length;
  	var newState = [];
  		for (var i = 0; i < length; i++){
  			var neighbourAlive = 0;
  			var neighbourRed = 0;
  			var neighbourPurple = 0;
  			var neighbourYellow = 0;

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
  			} else if (array[i - width - 1] > 0  && !(i%width == 0)){
  				neighbourAlive++;
  				if (array[i - width - 1] === 1){
  					neighbourRed++;
  				}	else if (array[i - width - 1] === 2){
  					neighbourPurple++;
  				}	else if (array[i - width - 1] === 3){
  					neighbourYellow++;
  				}
  			}

  			// UP
  			if (typeof array[i - width] === 'undefined'){
  				// do nothing
  			} else if (array[i - width] > 0){
  				neighbourAlive++;
  				if (array[i - width] === 1){
  					neighbourRed++;
  				}	else if (array[i - width] === 2){
  					neighbourPurple++;
  				}	else if (array[i - width] === 3){
  					neighbourYellow++;
  				}
  			}

  			// UP RIGHT
  			if (typeof array[i - width + 1] === 'undefined'){
  				// do nothing
  			} else if (array[i - width + 1] > 0 && !(i%width == (width - 1))){
  				neighbourAlive++;
  				if (array[i - width + 1] === 1){
  					neighbourRed++;
  				}	else if (array[i - width + 1] === 2){
  					neighbourPurple++;
  				}	else if (array[i - width + 1] === 3){
  					neighbourYellow++;
  				}
  			}

  			// LEFT
  			if (typeof array[i - 1] === 'undefined'){
  				// do nothing
  			} else if (array[i - 1]  > 0 && !(i%width == 0)){
  				neighbourAlive++;
  				if (array[i - 1] === 1){
  					neighbourRed++;
  				}	else if (array[i - 1] === 2){
  					neighbourPurple++;
  				}	else if (array[i - 1] === 3){
  					neighbourYellow++;
  				}
  			}

  			// RIGHT
  			if (typeof array[i + 1] === 'undefined'){
  				// do nothing
  			} else if (array[i + 1]  > 0 && !(i%width == (width - 1))){
  				neighbourAlive++;
  				if (array[i + 1] === 1){
  					neighbourRed++;
  				}	else if (array[i + 1] === 2){
  					neighbourPurple++;
  				}	else if (array[i + 1] === 3){
  					neighbourYellow++;
  				}
  			}

  			// DOWN LEFT
  			if (typeof array[i + width - 1] === 'undefined'){
  				// do nothing
  			} else if (array[i + width - 1]  > 0 && !(i%width == 0)){
  				neighbourAlive++;
  				if (array[i + width - 1] === 1){
  					neighbourRed++;
  				}	else if (array[i + width - 1] === 2){
  					neighbourPurple++;
  				}	else if (array[i + width - 1] === 3){
  					neighbourYellow++;
  				}
  			}

  			// DOWN
  			if (typeof array[i + width] === 'undefined'){
  				// do nothing
  			} else if (array[i + width]  > 0){
  				neighbourAlive++;
  				if (array[i + width] === 1){
  					neighbourRed++;
  				}	else if (array[i + width] === 2){
  					neighbourPurple++;
  				}	else if (array[i + width] === 3){
  					neighbourYellow++;
  				}
  			}

  			// DOWN RIGHT
  			if (typeof array[i + width + 1] === 'undefined'){
  				// do nothing
  			} else if (array[i + width + 1]  > 0 && !(i%width == (width - 1))){
  				neighbourAlive++;
  				if (array[i + width + 1] === 1){
  					neighbourRed++;
  				}	else if (array[i + width + 1] === 2){
  					neighbourPurple++;
  				}	else if (array[i + width + 1] === 3){
  					neighbourYellow++;
  				}
  			}


  			if (array[i] === 0 && neighbourAlive == 3){
  				if (neighbourRed > 1){
  					var cell = 1;
  				}	else if (neighbourPurple > 1){
  					var cell = 2;
  				}	else if (neighbourYellow > 1){
  					var cell = 3;
  				} else {
  					var cell = Math.floor(Math.random()*3) + 1;
  				}
  			} else if (array[i] > 0 && neighbourAlive == 3){
  				var cell = array[i];
  			} else if (array[i] > 0 && neighbourAlive == 2){
  				var cell = array[i];
  			}else {
  				var cell = 0;
  			}

  			newState.push(cell);

  		}

  		array = newState.slice(0);


  		for (var i = 0; i < length; i++){
  			currentCell = document.getElementById(i);
  			if (array[i] === 0){
  				currentCell.classList.remove('alive');
  				currentCell.classList.remove('red');
  				currentCell.classList.remove('purple');
  				currentCell.classList.remove('yellow');
  				currentCell.classList.add('dead');
  			} else {
  				currentCell.classList.remove('dead');
  				currentCell.classList.add('alive');
  			}

  			if (array[i] === 1){
  				currentCell.classList.add('red');
  			} else if (array[i] === 2){
  				currentCell.classList.add('purple');
  			} else if (array[i] === 3){
  				currentCell.classList.add('yellow');
  			}
  		}

  	}, 100);
  }
};

stop.onclick = function(){
	window.clearInterval(refresh);
  isRunning = false;
};

// Add cells on Click
var cells = document.getElementsByClassName('cell');
for ( var i = 0; i < cells.length; i++){

	cells[i].onclick = function(){
		current = this;
		if ( array[current.id] === 0 ){
			current.classList.remove('dead');
			current.classList.add('alive');
			current.classList.add('red');
			array[current.id] = 1;
		} else if ( array[current.id] === 1 ){
			current.classList.remove('red');
			current.classList.add('purple');
			array[current.id] = 2;
		} else if ( array[current.id] === 2 ){
			current.classList.remove('purple');
			current.classList.add('yellow');
			array[current.id] = 3;
		} else if ( array[current.id] === 3 ){
			current.classList.remove('alive');
			current.classList.remove('yellow');
			current.classList.add('dead');
			array[current.id] = 0;
		}
	};
}
