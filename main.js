// Fizz Buzz test: Scrivi un programma che stampi i numeri da 1 a 100 ma per i multipli di 3
//  stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz, mostrarlo su pagina

var i = 0;
var j = 100;
var num = 0;
var soluzione = document.querySelector('#numeri');

while (i < j) {
  num = i + 1;

  if ((num % 5 == 0) && (num % 3 == 0)) {
    // console.log("FizzBuzz");
    soluzione.insertAdjacentText('beforeend',' FizzBuzz');
    soluzione.insertAdjacentHTML('beforeend', '<div class = "spazio"> </div>');
  } else if (num % 5 == 0){
    // console.log("Buzz");
    soluzione.insertAdjacentText('beforeend',' Buzz');
    soluzione.insertAdjacentHTML('beforeend', '<div class = "spazio"> </div>');
  } else if (num % 3 == 0) {
    // console.log("Fizz");
    soluzione.insertAdjacentText('beforeend',' Fizz');
    soluzione.insertAdjacentHTML('beforeend', '<div class = "spazio"> </div>');
  } else {
    // console.log(num);
    soluzione.insertAdjacentText('beforeend',' ' + num);
    soluzione.insertAdjacentHTML('beforeend', '<div class = "spazio"> </div>');
  }

  i++;
}
