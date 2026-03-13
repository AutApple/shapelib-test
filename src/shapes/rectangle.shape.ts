import { BaseShape } from './base.shape.js';

export interface RectangleConfiguration {
    width: number;
    height: number;
}

export class Rectangle extends BaseShape {
    protected readonly width: number;
    protected readonly height: number; 

    constructor (config: RectangleConfiguration) {
        super();
        this.width = config.width;
        this.height = config.height;
    }

    public getDimensions(): { width: number, height: number } {
        return { width: this.width, height: this.height };
    }
    public getArea(): number {
        return this.width * this.height;
    }
    public getPerimeter(): number {
        return 2 * this.width + 2 * this.height;
    }
    public toString(): string {
        return  `Rectangle [width = ${this.width}, height = ${this.height}]`;
    }


    public scale(factor: number): Rectangle {
        return new Rectangle({ width: this.width * factor, height: this.height * factor });
    }

}