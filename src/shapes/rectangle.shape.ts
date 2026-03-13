import { BaseShape } from './base.shape.js';
/**
 * Interface for configuring cirlce parameters
 */
export interface RectangleConfiguration {
	width: number;
	height: number;
}

/**
 * Rectangle shape class
 */
export class Rectangle extends BaseShape {
	protected readonly width: number;
	protected readonly height: number;
	/**
	 * Rectangle shape constructor
	 * @param config configuration with rectangle parameters specified
	 */
	constructor(config: RectangleConfiguration) {
		super();
		this.width = config.width;
		this.height = config.height;
	}
	/**
	 * Get rectangle's width and height
	 * @returns width and height of a rectangle
	 */
	public getDimensions(): { width: number; height: number } {
		return { width: this.width, height: this.height };
	}
	/**
	 * Get rectangle's diagonal
	 * @returns diagonal of a rectangle
	 */
	public getDiagonal(): number {
		return Math.sqrt(this.width ** 2 + this.height ** 2);
	}
	/**
	 * Check whether rectangle is a square or not
	 * @returns whether rectangle is a square or not
	 */
	public isSquare(): boolean {
		return this.width === this.height;
	}

	public getArea(): number {
		return this.width * this.height;
	}
	public getPerimeter(): number {
		return 2 * this.width + 2 * this.height;
	}
	public toString(): string {
		return `Rectangle [width = ${this.width}, height = ${this.height}]`;
	}

	public scale(factor: number): Rectangle {
		return new Rectangle({ width: this.width * factor, height: this.height * factor });
	}
}
