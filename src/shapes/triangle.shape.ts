import { BaseShape } from './base.shape.js';

export interface TriangleConfiguration {
    a: number;
    b: number;
    c: number;
}

export class Triangle extends BaseShape {
    protected a: number;
    protected b: number;
    protected c: number; 
    constructor (config: TriangleConfiguration) {
        super();
        this.a = config.a;
        this.b = config.b;
        this.c = config.c;
    }

    public getSides(): { a: number, b: number, c: number } {
        return { a: this.a, b: this.b, c: this.c };
    }
    public getArea(): number {
        const halfPerimeter = this.getPerimeter() / 2;
        return Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c));
    }
    public getPerimeter(): number {
        return this.a + this.b + this.c;
    }
    public toString(): string {
        return  `Triangle [a = ${this.a}, b = ${this.b}, c = ${this.c}]`;
    }

    public scale(factor: number): Triangle {
        return new Triangle({ a: this.a * factor, b: this.b * factor, c: this.c * factor });
    }

    public isEquailateral(): boolean {
        return (this.a === this.b) && (this.b === this.c); 
    }
    public isRight(): boolean {
        const sides = [this.a, this.b, this.c].sort((a, b) => a - b);
        const [a, b, c] = sides;
        return Math.abs(a ** 2 + b ** 2 - c ** 2) < Number.EPSILON;
    }
    public isIsosceles(): boolean {
        return this.a === this.b || this.b === this.c || this.a === this.c;
    }
    
}