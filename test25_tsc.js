function volumeCuboid(cuboid) {
    var volume = cuboid.length * cuboid.width * cuboid.height;
    console.log("Volume: ".concat(volume));
}
var cuboid = { x: -22, y: 28, width: 12, length: 32, height: 20 };
volumeCuboid(cuboid);
