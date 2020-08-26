

class Plinko {
    constructor(x, y, width, height, radius) {
        var options = {
            isStatic :true
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = raidus;
        this.width = height;
        this.width = width;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x, pos.y, this.width, this.height, this.radius);
    }

}

