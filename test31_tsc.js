var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.position = function () {
        console.log("The point is at (".concat(this.x, ", ").concat(this.y, ")."));
    };
    return Point;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, width, length) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.length = length;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.length;
    };
    Rectangle.prototype.position = function () {
        console.log("The rectangle is at (".concat(this.x, ", ").concat(this.y, ")."));
    };
    return Rectangle;
}());
var myPoint = new Point(10, 20);
var myRect = new Rectangle(0, 0, 20, 30);
myPoint.position();
myRect.position();
console.log(myRect.area());
