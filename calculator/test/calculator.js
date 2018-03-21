var expect    = require("chai").expect;
var calculator = require("../app/calculator");

describe("Calculator", function() {
  describe("Sum", function() {
    it("sum two numbers", function() {
      var result= calculator.sum(2,3);
      expect(result).to.equal(5);
    });
  });
  describe("Subtract", function() {
    it("subtract two numbers", function() {
      var result= calculator.subtract(2,3);
      expect(result).to.equal(-1);
    });
  });
  describe("Multiply", function() {
    it("multiply two numbers", function() {
      var result= calculator.multiply(2,3);
      expect(result).to.equal(6);
    });
  });
  describe("Divide", function() {
    it("divide two numbers", function() {
      var result= calculator.divide(4,2);
      expect(result).to.equal(2);

    });
    it("returns an exception when the divisor is 0", () => {
      expected = Error;
      expect(()=>(calculator.divide(4,0))).to.throw(Error);
    })
  });
});
