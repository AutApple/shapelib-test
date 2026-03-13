import { Rectangle } from './shapes/rectangle.shape.js';

const rect = new Rectangle({ width: 10, height: 5 });

console.log(rect.getArea());
console.log(rect.getPerimeter());

console.log(rect.getDimensions());

console.log(rect.toString());