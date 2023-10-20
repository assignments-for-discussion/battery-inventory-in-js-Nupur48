// Function to calculate SoH and classify batteries
function classifyBatteries(presentCapacities) {
  const ratedCapacity = 120; // Rated capacity of a new battery
  const results = {
    healthy: 0,
    exchange: 0,
    failed: 0,
  };

  for (const presentCapacity of presentCapacities) {
    const soh = (presentCapacity / ratedCapacity) * 100;

    if (soh > 80) {
      results.healthy++;
    } else if (soh >= 63) {
      results.exchange++;
    } else {
      results.failed++;
    }
  }

  return results;
}

// Test cases
function testClassifyBatteries() {
  // Test case 1: All healthy batteries
  const result1 = classifyBatteries([120, 119, 120, 118, 120]);
  assert.deepStrictEqual(result1, { healthy: 5, exchange: 0, failed: 0 });

  // Test case 2: Mix of healthy, exchange, and failed batteries
  const result2 = classifyBatteries([105, 95, 100, 80, 60, 75]);
  assert.deepStrictEqual(result2, { healthy: 3, exchange: 2, failed: 1 });

  // Test case 3: All failed batteries
  const result3 = classifyBatteries([40, 50, 30, 20, 10]);
  assert.deepStrictEqual(result3, { healthy: 0, exchange: 0, failed: 5 });
}

// Run the test cases
testClassifyBatteries();
