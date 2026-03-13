/**
 * Shape scale event
 */
export class ShapeScaleEvent extends Event {
	constructor(public readonly factor: number) {
		super('scale');
	}
}

/**
 * Base class for all shapes
 */
export abstract class BaseShape extends EventTarget {
	/**
	 * Returns an area of a shape
	 * @returns area of a specified shape
	 */
	public abstract getArea(): number;

	/**
	 * Returns perimeter of a shape
	 * @returns perimeter of a specified shape
	 */
	public abstract getPerimeter(): number;

	/**
	 * Converts shape to a string
	 * @returns shape in a string format
	 */
	public abstract toString(): string;

	/**
	 * Scales shape by some factor and returns a new, scaled shape instance
	 * @param factor factor by which the shape should be scaled
	 * @returns new scaled shape instance
	 */
	public scale(factor: number): BaseShape {
		const scaled = this.scaleBy(factor);
		this.dispatchEvent(new ShapeScaleEvent(factor));
		return scaled;
	}

	protected abstract scaleBy(factor: number): BaseShape;
}
