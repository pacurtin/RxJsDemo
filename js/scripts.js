console.log('Hello');
console.log($('h1'));
console.log(Rx);

var requestStream = Rx.Observable.of('https://api.github.com/users');

requestStream.subscribe(function(requestUrl) {
    console.log(requestUrl);
});