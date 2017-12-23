console.log('Hello');
console.log($('h1'));
console.log(Rx);

// Simplest string emits one string
var singleStringStream = Rx.Observable.of('Hello World');

// Demonstrates map function
var copyCatStream = singleStringStream.map(
    function (url) {
        return url;
    }
);

var helloWorldDiv = document.querySelector('#hello-world-div');

// Display anything received via stream
copyCatStream.subscribe(function(received) {
    helloWorldDiv.innerText=received;
});


// Stream to count button clicks
var buttonOne = document.querySelector('#button-one');
var buttonOneCounter = document.querySelector('#button-one-counter');
var buttonOneClickCountStream = Rx.Observable
    .fromEvent(buttonOne, 'click')
    .map( function() {return 1;})
    .scan( function (acc, one) { return acc+one; })
    .startWith(0);

buttonOneClickCountStream.subscribe(function(received) {
    buttonOneCounter.innerText=received;
});

var buttonTwo = document.querySelector('#button-two');
var buttonTwoCounter = document.querySelector('#button-two-counter');
var buttonTwoClickCountStream = Rx.Observable
    .fromEvent(buttonTwo, 'click')
    .map( function() {return 1;})
    .scan( function (acc, one) { return acc+one; })
    .startWith(0);

buttonTwoClickCountStream.subscribe(function(received) {
    buttonTwoCounter.innerText=received;
});

// Example of merging two counters
var sumCounter = document.querySelector('#button-count-sum');
var sumStream = Rx.Observable.merge(
    buttonOneClickCountStream, buttonTwoClickCountStream
);

sumStream.subscribe(function(received) {
    sumCounter.innerText=received;
});