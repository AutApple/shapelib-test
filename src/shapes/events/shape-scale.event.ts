/**
 * Event fired when a shape is scaled
 * 
 * @param factor Scaling factor applied to the shape
 */
export class ShapeScaleEvent extends Event {
	constructor(public readonly factor: number) {
		super('scale');
	}
}
