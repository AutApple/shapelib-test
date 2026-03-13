export abstract class BaseShape {
    constructor() { }

    public abstract getArea(): number;
    public abstract getPerimeter(): number;
    public abstract toString(): string;
}