describe('fizzbuzz', function() {

	beforeEach(function() {
			fizzbuzz = new Fizzbuzz()
	});

	describe('Number should be divisible by', function() {

		it('Three', function() {
			expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true)
		});

		it('Five', function() {
			expect(fizzbuzz.isDivisibleByFive(5)).toEqual(true)
		});

		it('Fifteen', function() {
			expect(fizzbuzz.isDivisibleByFifteen(15)).toEqual(true)
		});

	});

	describe('Number should NOT be divisible by', function() {

		it('Three', function() {
			expect(fizzbuzz.isDivisibleByThree(1)).toEqual(false)
		});

		it('Five', function() {
			expect(fizzbuzz.isDivisibleByFive(1)).toEqual(false)
		});

		it('Fifteen', function() {
			expect(fizzbuzz.isDivisibleByFifteen(1)).toEqual(false)
		});

	});

	describe('Knows when to say', function() {

		it('"Fizz" if a number is divisible by three', function() {
			expect(fizzbuzz.says(3)).toEqual("Fizz")
		});

		it('"Buzz" if a number is divisible by five', function() {
			expect(fizzbuzz.says(5)).toEqual("Buzz")
		});

		it('"Fizzbuzz" if a number is divisible by fifteen', function() {
			expect(fizzbuzz.says(15)).toEqual("Fizzbuzz");
		});

		it('Knows when a number is not divisible by Three or Five', function() {
			expect(fizzbuzz.says(1)).toEqual(1);
		});
	});

});