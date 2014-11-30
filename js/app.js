function fizzBuzz() {
	for ( var i = 1; i <= 100; i++ ) {
		var text;
		if ( i % 3 == 0 && i % 5 == 0 ) {
			text = document.createTextNode('FizzBuzz');
		} else if ( i % 3 == 0 ) {
			text = document.createTextNode('Fizz');
		} else if ( i % 5 == 0 ) {
			text = document.createTextNode('Buzz');
		} else {
			text = document.createTextNode(i);
		}
		var element = document.createElement('p');
		element.appendChild(text);
		document.body.appendChild(element);
	}
}