// E1 
function clampNumber(n: number): number {
    return Math.max(0, Math.min(n, 255));
}

function rgbToHex(r: number, g: number, b: number): string {
 
    let cr = clampNumber(r);
    let cg = clampNumber(g);
    let cb = clampNumber(b);
    
    let color = "#" + cr.toString(16) + cg.toString(16) + cb.toString(16);

    return color;
}

// let black: string = rgbToHex(0, 0, "0");
// let red: number = rgbToHex(255, 0, 0);
let blue: string = rgbToHex(0, 0, 255);

