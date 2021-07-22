it('should calculate the monthly rate correctly', function () {
  const values = {
    loanAmount: 10000,
    loanYears: 10,
    loanRate: 0.1
  };
  expect(calculateMonthlyPayment(values)).toEqual(132.15)
});


it("should return a result with 2 decimal places", function () {
  const values = {
    loanAmount: 50000,
    loanYears: 15,
    loanRate: 0.03456
  };
  expect(calculateMonthlyPayment(values)).toEqual(356.36)
});

/// etc
