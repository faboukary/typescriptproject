interface Circle {
    radius: number
}
interface Rectangle {
    width: number,
    length: number
}
type RoundedRectangle = Circle & Rectangle;
function areaRoundedRectangle(rR: RoundedRectangle) {
    let area_lw = (rR.length - 2*rR.radius)*(rR.width - 2*rR.radius);
    let area_lr = 2*rR.length*rR.radius;
    let area_wr = 2*rR.width*rR.radius;
    let area_r = 22*Math.pow(rR.radius, 2)/7;
    return area_lw + area_lr + area_wr + area_r;
}
let myRoundRect: RoundedRectangle = {radius: 7, width: 30, length: 50};
console.log(areaRoundedRectangle(myRoundRect));

