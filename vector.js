


/**
 * Represents a 3D vector
 */
class Vector{
    constructor(x = 0, y = 0, z = 0){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    copy(){
        return new Vector(this.x,this.y,this.z);
    }
    /**
     * Returns the magnitude of the vector
     * @returns {Number}
     */
    mag() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z **2);
    }
    /**
     * Scales the vector to have the magnitud given
     * @param {Number} magnitude
     */
    setMag(mag) {
        let m = this.mag() / mag;
        this.x /= m;
        this.y /= m;
        this.z /= m;
        return this;
    }
    clampMag(mag){
        if (this.mag() > mag) {
            this.setMag(mag);
        }
        return this;
    }
    /**
     * Returns an object with the components of the direction
     * @returns Direction
     */
    dir(){
        let mag = this.mag();
        let alpha = this.x / mag;
        let beta = this.y / mag;
        let gamma = this.z / mag;
        return {alpha, beta, gamma};
    }
    /**
     * Returns the angle in radians between the two vectors
     * @param {Vector} Vector 
     * @returns {Number} radians
     */
    angleBetween(vec){
        return Math.acos(this.dotProduct(vec) / (this.mag() * vec.mag()));
    }
    /**
     * Gives the vector a random direction and sets its magnitude to the given magnitude
     * @param {Number} magnitude
     */
    randomDir(mag){
        console.log("randomDir(mag) - Not implemented");
    }
    /**
     * Subtracs the vector given to itself
     * @param {Vector} vector 
     */
    sub(vec){
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
        return this;
    }
    /**
     * Adds the vector given to itself
     * @param {Vector} Vector 
     */
    add(vec){
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
        return this;
    }
    /**
     * Scales the vector by the amount given
     * @param {Number} scalar 
     */
    mul(scalar){
        this.x *= vec.x;
        this.y *= vec.y;
        this.z *= vec.z;
        return this;
    }
    /**
     * Returns the dot product of the vector given with itself
     * @param {Vector} Vector  
     * @returns {Number}
     */
    dotProduct(vec){
        return (this.x*vec.x)+(this.y*vec.y)+(this.z*vec.z);
    }
    /**
     * Returns the cross product of the vector given with itself
     * @param {Vector} Vector
     * @returns {Vector} New vector
     */
    crossProduct(vec){
        let x = (this.y*vec.z - this.z*vec.y);
        let y = (this.z*vec.x - this.x*vec.z);
        let z = (this.x*vec.y - this.y*vec.x);
        return new Vector(x,y,z);
    }
}


    