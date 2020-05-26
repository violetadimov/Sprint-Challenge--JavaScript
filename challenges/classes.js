// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume() {
        return (` ${this.length * this.height * this.width}`);
    }
    surfaceArea() {
        return ` ${2 * (this.length *  this.width + this.length * this.height  + this.width  * this.height)}`;
    }
}

var cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.

class CubeMaker extends CuboidMaker {
    constructor(length, width, height, volume, surfaceArea) {
        super(length, width, height);
    }
    volume() {
        return (` ${Math.pow(this.length, 3)}`);
    }
    surfaceArea() {
        return (`${ 6 * Math.pow(this.length, 2)}`)
    }
}

var cubes = new CubeMaker(4, 5, 5);
console.log(cubes.volume());
console.log(cubes.surfaceArea());