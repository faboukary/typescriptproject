interface IPoint {
    x: number,
    y: number,
    position(x: number, y: number): void
}
interface IRectangle extends IPoint {
    width: number,
    length: number,
    area(width: number, length: number): number
}
class Point implements IPoint {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    position(): void {
        console.log(`The point is at (${this.x}, ${this.y}).`);
    }
}
class Rectangle implements IRectangle {
    width: number;
    length: number;
    x: number;
    y: number;
    constructor(x: number, y: number, width: number, length: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.length = length;
    }
    area(): number {
        return this.width*this.length;
    }
    position(): void {
        console.log(`The rectangle is at (${this.x}, ${this.y}).`);
    }
}
let myPoint = new Point(10, 20);
let myRect = new Rectangle(0, 0, 20, 30);
myPoint.position();
myRect.position();
console.log(myRect.area());

