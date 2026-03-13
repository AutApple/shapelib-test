import { BaseShape } from './base.shape.js';
/**
 * Interface for configuring triangle parameters
 */
export interface TriangleConfiguration {
	a: number;
	b: number;
	c: number;
}

/**
 * Triangle shape class
 */
export class Triangle extends BaseShape {
	protected readonly a: number;
	protected readonly b: number;
	protected readonly c: number;
	/**
	 * Triangle shape constructor
	 * @param config configuration with triangle parameters specified
	 */
	constructor(config: TriangleConfiguration) {
		super();
		this.a = config.a;
		this.b = config.b;
		this.c = config.c;
	}
	/**
	 * Get triangle sides
	 * @returns object containing 3 sides of a triangle
	 */
	public getSides(): { a: number; b: number; c: number } {
		return { a: this.a, b: this.b, c: this.c };
	}
	public getArea(): number {
		const halfPerimeter = this.getPerimeter() / 2;
		return Math.sqrt(
			halfPerimeter *
				(halfPerimeter - this.a) *
				(halfPerimeter - this.b) *
				(halfPerimeter - this.c),
		);
	}
	public getPerimeter(): number {
		return this.a + this.b + this.c;
	}
	public toString(): string {
		return `Triangle [a = ${this.a}, b = ${this.b}, c = ${this.c}]`;
	}

	public scale(factor: number): Triangle {
		return new Triangle({ a: this.a * factor, b: this.b * factor, c: this.c * factor });
	}
	/**
	 * Is triangle equilateral
	 * @returns whether triangle is equilateral or not
	 */
	public isEquilateral(): boolean {
		return this.a === this.b && this.b === this.c;
	}
	/**
	 * Is triangle right angled
	 * @returns whether triangle is right angled or not
	 */
	public isRight(): boolean {
		const sides = [this.a, this.b, this.c].sort((a, b) => a - b);
		const [a, b, c] = sides;
		return Math.abs(a ** 2 + b ** 2 - c ** 2) < Number.EPSILON;
	}
	/**
	 * Is triangle isosceles
	 * @returns whether triangle is isosceles or not
	 */
	public isIsosceles(): boolean {
		return this.a === this.b || this.b === this.c || this.a === this.c;
	}
}
