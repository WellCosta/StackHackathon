var testTools = {
    _testCases: [],
    it: function(testName, testFn) {
        this._testCases.push({
            name: testName,
            fn: testFn
        })
    },
    runTests: function() {
        var successCount = 0;
        var failureCount = 0;
        this._testCases.forEach((testCase) => {
            console.log("Running test '" + testCase.name + "'");
            try {
                testCase.fn();
                successCount++
            } catch (error) {
                console.log("Test '" + testCase.name + "' failed. Reason: ", error.message);
                failureCount++
            }
        });
        console.log("TestSuccess:", successCount, "TestFailure:", failureCount)
    },
    assertEquals: function(expected, actual){
        if(expected !== actual){
            throw new Error(actual + " should be equal to " + expected);
        }
    }
}

module.exports = testTools 