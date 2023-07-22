function areaRoundedRectangle(rR) {
    var area_lw = (rR.length - 2 * rR.radius) * (rR.width - 2 * rR.radius);
    var area_lr = 2 * rR.length * rR.radius;
    var area_wr = 2 * rR.width * rR.radius;
    var area_r = 22 * Math.pow(rR.radius, 2) / 7;
    return area_lw + area_lr + area_wr + area_r;
}
var myRoundRect = { radius: 7, width: 30, length: 50 };
console.log(areaRoundedRectangle(myRoundRect));
