

class Pen {
    public parentShape : Shape;
    public position : PolarCoordinate; // With respect to parent


    public getWorldLocation(): CartesianCoordinate
    {
        return polar2Cartesian(
            this.position,
            this.parentShape.getWorldLocation()
        );
    }
}
