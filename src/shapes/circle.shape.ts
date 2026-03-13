import { BaseShape } from './base.shape.js';

/**
 * Interface for configuring cirlce parameters
 */
export interface CircleConfiguration {
	radius: number;
}

/**
 * Circle shape class
 */
export class Circle extends BaseShape {
	protected readonly radius: number;

	/**
	 * Circle shape constructor
	 * @param config configuration with circle parameters specified
	 */
	constructor(config: CircleConfiguration) {
		super();
		this.radius = config.radius;
	}

	/**
	 * Get circle's radius
	 * @returns radius of a circle
	 */
	public getRadius(): number {
		return this.radius;
	}
	/**
	 * Get circle's diameter
	 * @returns diameter of a circle
	 */
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
