function Fizzbuzz() {};

Fizzbuzz.prototype.isDivisibleByThree = function(number) {
  return this.isDivisibleBy(number, 3);
};

Fizzbuzz.prototype.isDivisibleByFive = function(number) {
  return this.isDivisibleBy(number, 5);
};

Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
  return this.isDivisibleBy(number, 15);
};

Fizzbuzz.prototype.isDivisibleBy = function(number, divisor) {
  return number % divisor == 0;
};

Fizzbuzz.prototype.says = function(number) {
  if(this.isDivisibleByFifteen(number)) return "Fizzbuzz";
  if(this.isDivisibleByThree(number)) return "Fizz";
  if(this.isDivisibleByFive(number)) return "Buzz";
  return number;
};



