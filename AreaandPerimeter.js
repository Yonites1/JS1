/*Rectangle Area  = L * W , Rectangle Perimeter = 2*L+ W
Circle Area = PI * r*r ,  Perimeter of Circle = 2*PI*r
*/

const PI = 3.14;

const calculateRectangleArea = (L, W) => {
    if(isNaN(L) || isNaN(W) || L<=0 || W<=0) {
    return; 
}
return L*W;
}

function calculateRectanglePerimeter(L, W) {
    if(isNaN(L) || isNaN(W) || L<=0 || W<=0) {
        return; 
    }

    return 2*(L+W);
}
  const calculateCircleArea = (r) => {
    if(isNaN(r) || r<=0) {
        return; 
    }
    return PI*Math.pow(r, 2);
}

const calculateCircleCircumference =(r) => {
    if(isNaN(r) || r<=0) {
        return; 
    }
    return 2*PI*r;
}

let RectangleAreaResult = calculateRectangleArea(2,3);
let RectanglePerimeterResult = calculateRectanglePerimeter(2,3);
let CircleAreaResult = calculateCircleArea(2);
let CircleCircumferenceResult = calculateCircleCircumference(3);  


console.log(`Rectangle area: ${RectangleAreaResult}`);
console.log(`Rectangle perimeter: ${ RectanglePerimeterResult}`);
console.log(`Circle area: ${CircleAreaResult}`);
console.log(`Circle perimeter Area: ${CircleCircumferenceResult}`);