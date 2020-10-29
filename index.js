class Polygon {
  constuctor(array) {
    this.sides = array
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((sum, currentSide) => sum + currentSide, 0)
  }
}