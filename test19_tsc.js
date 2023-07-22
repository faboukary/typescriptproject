// E1 
function clampNumber(n) {
    return Math.max(0, Math.min(n, 255));
}
function rgbToHex(r, g, b) {
    var cr = clampNumber(r);
    var cg = clampNumber(g);
    var cb = clampNumber(b);
    var color = "#" + cr.toString(16) + cg.toString(16) + cb.toString(16);
    return color;
}
// let black: string = rgbToHex(0, 0, "0");
// let red: number = rgbToHex(255, 0, 0);
var blue = rgbToHex(0, 0, 255);
