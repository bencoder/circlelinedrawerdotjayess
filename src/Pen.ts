interface PolarCoordinate {
    angle : number;
    distance : number;
}

interface CartesianCoordinate {

}


class Pen {
    public parent : Shape;
    public position : PolarCoordinate // With respect to parent


    getWorldLocation(): CartesianCoordinate
    {

    }
}
