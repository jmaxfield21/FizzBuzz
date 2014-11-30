function isDecimal( number ) {
	return number % 1 != 0;
}

function isText( number ) {
	return isNaN( number );
}

function isLessThanZero( number ) {
	return number <= 0;
}

function getValidNumber() {
	var num = +prompt( 'Please enter a number!' );
	while ( isDecimal( num ) || isText( num ) || isLessThanZero( num ) ) {
		num = +prompt( 'You entered a decimal number, text, or a negative number.' +
			' These are not allowed. Please enter a new number.' );
	}
	return num;
}

function getTextNode( number ) {
	if ( number % 3 == 0 && number % 5 == 0 ) {
		return document.createTextNode('FizzBuzz');
	} else if ( number % 3 == 0 ) {
		return document.createTextNode('Fizz');
	} else if ( number % 5 == 0 ) {
		return document.createTextNode('Buzz');
	} else {
		return document.createTextNode( number );
	}
}

function fizzBuzz( number ) {
	for ( var i = 1; i <= number; i++ ) {
		var text = getTextNode( i );
		var element = document.createElement( 'p' );
		element.appendChild( text );
		document.body.appendChild( element );
	}
}