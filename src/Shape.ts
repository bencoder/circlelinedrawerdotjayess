interface Shape {
    parentShape: Shape;
    getWorldLocation(): CartesianCoordinate
    angle: number

}


class Circle implements Shape {
    parentShape: Circle;
    angle: number = 0;
    private radius: number;
    private distanceTravelled: number;

    moveDistance(distance: number) {
        this.distanceTravelled = this.distanceTravelled + distance % this.parentShape.getInnerTrackSize();
    }

    update(distance: number) {
        this.moveDistance(distance);
        this.rotate(distance);
    }

    rotate(distance: number) {
        this.angle += distance / this.getCircumference() * 2 * Math.PI
    }

    getCircumference() {
        return 2 * Math.PI * this.radius
    }

    getInnerTrackSize() {
        return 2 * Math.PI * this.radius
    }

    getWorldLocation() {
        // FIXME: This assumes parentShape is another circle
        if (this.parentShape === null) {
            return {x: 0, y:0}
        }
        var angle = this.distanceTravelled / this.parentShape.getInnerTrackSize() * Math.PI * 2
        var distance = this.parentShape.radius - this.radius;
        return PolarCoordinate(angle, distance).toCartesian(this.parentShape.getWorldLocation())
    }
}
