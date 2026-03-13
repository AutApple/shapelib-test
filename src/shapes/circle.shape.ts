import { BaseShape } from './base.shape.js';

export interface CircleConfiguration {
    radius: number;
}

export class Circle extends BaseShape {
    protected readonly radius: number;

    constructor(config: CircleConfiguration) {
        super();
        this.radius = config.radius;
    }

    public getRadius(): number {
        return this.radius;
    }
    public getDiameter(): number {
        return this.radius * 2;
    }
    public getArea(): number {
        return Math.PI * this.radius ** 2;
    }
    public getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
    public scale(factor: number): Circle {
        return new Circle({ radius: this.radius * factor });
    }
    public toString(): string {
        return `Circle [radius = ${this.radius}]`;
    }
}