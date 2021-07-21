it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(amount: 10000, years: 10, rate: 0.1).toEqual(132.15))
});


it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment(50000, 15, 0.03456).toEqual(356.36))
});

/// etc
