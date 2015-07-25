class Shape {
    private parent: Shape
    private distanceTravelled: number;

    public getWorldLocation(): CartesianCoordinate
    public getRotation(): number

    public getInnerTrackSize(): number

    public moveDistance(distance: number) {
        this.distanceTravelled = this.distanceTravelled + distance % parent.getInnerTrackSize();
    }

    public rotate(distance: number): Void;

    public update(distance: number) {
        this.moveDistance(distance);
        this.rotate(distance);
    }
}

class Circle extends Shape {
    private radius: number;
    private angle: number = 0;

    public getRadius() {
        return radius
    }

    public rotate(distance: number) {
        this.angle += distance / this.getCircumference() * 2 * Math.PI
    }

    private getCircumference() {
        return 2 * Math.PI * this.radius
    }

    public getInnerTrackSize() {
        return 2 * Math.PI * this.radius
    }

    public getWorldLocation() {
        // FIXME: This assumes parent is another circle
        if (this.parent === null) {
            return {x: 0, y:0}
        }
        var angle = this.distanceTravelled / this.parent.getInnerTrackSize() * Math.PI * 2
        var distance = this.parent.getRadius() - this.radius;
        return PolarCoordinate(angle, distance).toCartesian(this.parent.getWorldLocation())
    }
}
