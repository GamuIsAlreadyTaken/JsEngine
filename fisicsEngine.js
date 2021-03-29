

/**
 * It represents a fisical object
 */
class FisicsBody {
	constructor(x, y, w, h, sx, sy) {
		this.pos = createVector(x, y);
		this.width = w;
		this.height = h;
		this.speed = createVector(sx, sy);

	}
	/**
	 * Draws the hitbox for debuging
	 */
	drawHitBox(){
		push();
			noFill();
			stroke(0,255,0);
			rect(this.pos.x,this.pos.y,this.width,this.height);
		pop();
	}
	/**
	 * Calculates the distance from itself to the obj suplied, -1 if theres a collision
	 * @param {FisicsBody} obj 
	 * @returns {Number} distance 
	 */
	distanceToObj(obj) {
		//Si hay collision devuelve -1
		if (this.collision(obj)) 
			return -1;
		let distX = Math.max(0, abs((this.pos.x + (this.width / 2)) - (obj.pos.x + (obj.width / 2))) - (this.width / 2) - (obj.width / 2));
		let distY = Math.max(0, abs((this.pos.y + (this.height / 2)) - (obj.pos.y + (obj.height / 2))) - (this.height / 2) - (obj.height / 2));

		return Math.sqrt(distX ** 2 + distY ** 2);
	}
	/**
	 * Calculates the distance from itself to the position suplied, -1 if theres a collision
	 * @param {Number} x 
	 * @param {Number} y 
	 * @returns {Number} distance
	 */
	distanceToPoint(x, y) {
		if (this.pointCollision(x, y, this)) 
			return -1;
		let distX = Math.max(0, abs((this.pos.x + (this.width / 2)) - x) - (this.width / 2));
		let distY = Math.max(0, abs((this.pos.y + (this.height / 2)) - y) - (this.height / 2));

		return Math.sqrt(distX ** 2 + distY ** 2);
	}
	/**
	 * Returns true if itself is colliding with any suplied object
	 * @param  {...FisicsBody} objs 
	 * @returns {Boolean} true if theres a collision
	 */
	collision(...objs) {
		for (const obj of objs) {
			if (this.pos.y + this.height > obj.pos.y &&
				this.pos.y < obj.pos.y + obj.height &&
				this.pos.x + this.width > obj.pos.x &&
				this.pos.x < obj.pos.x + obj.width) {
				return true;
			}
		}
		return false;
	}
	/**
	 * Returns true if itself at the position given is colliding with any suplied object
	 * @param {Number} x 
	 * @param {Number} y 
	 * @param  {...FisicsBody} objs 
	 * @returns {Boolean} true if theres a collision in the place
	 */
	placeCollision(x, y, ...objs) {
		for (const obj of objs) {
			if (y + this.height > obj.pos.y &&
				y < obj.pos.y + obj.height &&
				x + this.width > obj.pos.x &&
				x < obj.pos.x + obj.width) {
				return true;
			}
		}
		return false;
	}
	/**
	 * Returns true if there is an obj of objs in the given position
	 * @param {Number} x 
	 * @param {Number} y 
	 * @param  {...FisicsBody} objs 
	 * @returns {Boolean} true if theres an obj
	 */
	pointCollision(x, y, ...objs) {
		for (const obj of objs) {
			if (y > obj.pos.y &&
				y < obj.pos.y + obj.height &&
				x < obj.pos.x + obj.width &&
				x > obj.pos.x)
				return true;
		}
		return false;
	}
	/**
	 * Returns true if theres an object intersecting the line given
	 * @param {Number} x1 
	 * @param {Number} y1 
	 * @param {Number} x2 
	 * @param {Number} y2 
	 * @param  {...FisicsBody} objs 
	 * @returns {Boolean} true if an object intersects the line
	 */
	lineCollision(x1, y1, x2, y2, ...objs) {
		if (this.placeCollision(x1, y1, ...objs) || this.placeCollision(x2, y2, ...objs)) return true;
		
		let path = createVector(x1-x2,y1-y2);
		let pathMag = path.mag();
		//The closer to 1 the more precise it is
		const PRECISION = 1;

		while(pathMag > 0){
			if(this.placeCollision(x2-path.x,y2-path.y,...objs)) return true;
			
			pathMag -= PRECISION;
			path.setMag(pathMag);
		}
		return false;
	}
	rotate(angle){
		canvasManager.pen.save();
		canvasManager.pen.translate(this.pos.x,this.pos.y);
		canvasManager.pen.rotate(angle);
	}

}
/**
 * Creates and returns a vector
 * @param {Number} x 
 * @param {Number} y 
 * @returns Vector
 */
function createVector(x = 0, y = 0,z = 0) {
    return new Vector(x,y,z);
}
function createRandomVector(){
	let randVect = new Vector(Math.random()-0.5,Math.random()-0.5,Math.random()-0.5);
	randVect.setMag(1);
	return randVect;
}







