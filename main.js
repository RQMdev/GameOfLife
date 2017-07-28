var body = document.getElementsByTagName('body')[0];
var width = 100;
var height = 100;
var array = [];

for (var i = 0; i < width*height; i++){
	var cell = Math.random() >= 0.5;

	array.push(cell);

	var newCell = document.createElement('div');
	newCell.classList.add('cell');
	if (cell == true ){
		newCell.classList.add('alive');
	} else if ( cell == false ){
		newCell.classList.add('dead');
	}
	newCell.setAttribute('id', i);
	body.appendChild(newCell);
}


setInterval(function(){
var length = array.length;
var newState = [];
	for (var i = 0; i < length; i++){
		var neighbourAlive = 0;

		// UP LEFT
		if (typeof array[i - width - 1] === 'undefined'){
			// do nothing
		} else if (array[i - width - 1] == true){
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
		} else if (array[i - width + 1] == true){
			neighbourAlive++;
		}

		// LEFT
		if (typeof array[i - 1] === 'undefined'){
			// do nothing
		} else if (array[i - 1] == true){
			neighbourAlive++;
		}

		// RIGHT
		if (typeof array[i + 1] === 'undefined'){
			// do nothing
		} else if (array[i + 1] == true){
			neighbourAlive++;
		}

		// DOWN LEFT
		if (typeof array[i + width - 1] === 'undefined'){
			// do nothing
		} else if (array[i + width - 1] == true){
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
		} else if (array[i + width + 1] == true){
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

		// if (array[i] == true){
		// 	var cell = false;
		// } else {
		// 	var cell = true;
		// }

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

}, 50);
