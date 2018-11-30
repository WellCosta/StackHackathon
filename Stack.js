function Stack () {
    this.items = []
}

Stack.prototype.push = function (item) {
    this.items.push(item)
}

Stack.prototype.size = function() {
    return this.items.length
}

Stack.prototype.peek = function () {
    return this.items[this.items.length - 1]
}

Stack.prototype.pop = function () {
    var topElement = this.peek();
    this.items.length = this.items.length - 1;
    return topElement
}

Stack.prototype.clear = function () {
    this.items.length = 0;
}

Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
}

module.exports = Stack 