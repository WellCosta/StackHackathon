var testTools = require("./testTools.js")
var it = testTools.it.bind(testTools)
var assertEquals = testTools.assertEquals
// begin: test cases

var Stack = require ("./Stack.js")

it("push should add an item", () => {
    var stack = new Stack();
    stack.push("item");
});

it("should start with size 0", () => {
    var stack = new Stack();
    assertEquals(0, stack.size())
})

it("should have size 1 after adding 1 element", () => {
    var stack = new Stack();
    stack.push("item");
    assertEquals(1, stack.size())
})

it("should have size 2 after adding 2 elements", () => {
    var stack = new Stack();
    stack.push("item1");
    stack.push("item2");
    assertEquals(2, stack.size())
})

it("should peek the last element without removing", () => {
    var stack = new Stack();
    stack.push("Item");
    var peekItem = stack.peek();
    assertEquals("Item", peekItem); 
    assertEquals(1, stack.size());
})

it("should pop the last element and remove it", () => {
    var stack = new Stack();
    stack.push("Item");
    var peekItem = stack.pop();
    assertEquals("Item", peekItem); 
    assertEquals(0, stack.size());
})

it("should clear the stack", () => {
    var stack = new Stack();
    stack.push("Item1");
    stack.push("Item2");
    stack.clear(); 
    assertEquals(0, stack.size());
})

it("should be empty only if size is 0", () => {
    var stack = new Stack();
    assertEquals(true, stack.isEmpty())
    assertEquals(0, stack.size())
    stack.push("Item1");
    assertEquals(false, stack.isEmpty());
    assertEquals(1, stack.size());
})





// end: test cases

testTools.runTests();