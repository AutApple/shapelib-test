import { Rectangle } from './shapes/rectangle.shape.js';
import { Triangle } from './shapes/triangle.shape.js';

const rect = new Rectangle({ width: 10, height: 5 });

const triangle = new Triangle({ a: 2, b: 5, c: 3 });


console.log(rect.getArea());
console.log(rect.getPerimeter());

console.log(rect.getDimensions());

console.log(rect.toString());