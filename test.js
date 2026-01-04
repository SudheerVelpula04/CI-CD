const { add, subtract, multiply, divide } = require('./index.js');

// Simple test function
function test(description, fn) {
  try {
    fn();
    console.log(`✅ PASS: ${description}`);
  } catch (error) {
    console.log(`❌ FAIL: ${description}`);
    console.log(`   Error: ${error.message}`);
    process.exit(1); // Exit with error code so CI/CD knows test failed
  }
}

// Run tests
console.log("Running tests...\n");

test("add 2 + 3 should equal 5", () => {
  const result = add(2, 3);
  if (result !== 5) throw new Error(`Expected 5, got ${result}`);
});

test("subtract 10 - 4 should equal 6", () => {
  const result = subtract(10, 4);
  if (result !== 6) throw new Error(`Expected 6, got ${result}`);
});

test("multiply 3 * 4 should equal 12", () => {
  const result = multiply(3, 4);
  if (result !== 12) throw new Error(`Expected 12, got ${result}`);
});

test("divide 20 / 5 should equal 4", () => {
  const result = divide(20, 5);
  if (result !== 4) throw new Error(`Expected 4, got ${result}`);
});

test("divide by zero should throw error", () => {
  try {
    divide(10, 0);
    throw new Error("Should have thrown an error");
  } catch (error) {
    if (error.message !== "Cannot divide by zero") {
      throw error;
    }
  }
});

console.log("\n🎉 All tests passed!");
console.log("\n🎉 All tests passed!");
console.log("\n🎉 All tests passed!");
console.log("\n🎉 All tests passed!");