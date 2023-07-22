interface Point {
    x: number,
    y: number
}
interface Rectangle extends Point {
    width: number,
    length: number
}
interface Cuboid extends Rectangle {
    height: number
}
function volumeCuboid(cuboid: Cuboid) {
    let volume = cuboid.length*cuboid.width*cuboid.height;
    console.log(`Volume: ${volume}`);
}
let cuboid: Cuboid = {x: -22, y: 28, width: 12, length: 32, height: 20}
volumeCuboid(cuboid);
