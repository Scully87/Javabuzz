describe('Javabuzz', function() {

	var javabuzz;

	describe('knows when a number is', function() {

		it('divisible by 3', function() {
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
		});

		it('divisible by 5', function() {
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByFive(5)).toEqual(true);
		});

		it('divisible by 15', function() {
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByFifteen(15)).toEqual(true);
		});

	});

	describe('knows when a number is NOT', function() {

		it('divisible by 3', function() {
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByThree(3)).toEqual(false);
		});

		it('divisible by 5', function() {
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByFive(5)).toEqual(false);
		});

		it('divisible by 15', function() {
			javabuzz = new Javabuzz();
			expect(javabuzz.isDivisibleByFifteen(15)).toEqual(false);
		});

	});

});