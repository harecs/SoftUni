class Point {
    constructor(a, y) {
        this.x = a;
        this.y = y;
    }

    static distance(firstPoint, secondPoint) {
        return Math.sqrt((secondPoint.x - firstPoint.x) ** 2 + (secondPoint.y - firstPoint.y) ** 2);
    }
}