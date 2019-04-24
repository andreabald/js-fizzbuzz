// Fizz Buzz test: Scrivi un programma che stampi i numeri da 1 a 100 ma per i multipli di 3
//  stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

var i = 0;
var j = 100;
var num = 0;

while (i < j) {
  num = i + 1;
   if ((num % 5 == 0) && (num % 3 == 0)) {
     console.log("FizzBuzz");
     // document.getElementById('numeri').innerHTML= "FizzBuzz";
   } else if (num % 5 == 0){
     console.log("Buzz");
     // document.getElementById('numeri').innerHTML= "Buzz";
   } else if (num % 3 == 0) {
     console.log("Fizz");
     // document.getElementById('numeri').innerHTML= "Fizz";
   } else {
     console.log(num);
     // document.getElementById('numeri').innerHTML= num;
   }
  i++;
}
