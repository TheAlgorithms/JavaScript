

/**
 * Calculates the intersection point of two lines
 * defined by the points (x1, y1) to (x2, y2) and (x3, y3) to (x4, y4).
 * 
 * @param {number} x1 - x-coordinate of the first point of the first line
 * @param {number} y1 - y-coordinate of the first point of the first line
 * @param {number} x2 - x-coordinate of the second point of the first line
 * @param {number} y2 - y-coordinate of the second point of the first line
 * @param {number} x3 - x-coordinate of the first point of the second line
 * @param {number} y3 - y-coordinate of the first point of the second line
 * @param {number} x4 - x-coordinate of the second point of the second line
 * @param {number} y4 - y-coordinate of the second point of the second line
 * @returns {Object|null} The intersection point { x, y } or null if no intersection
 */

export function findIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
    const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
    
    // Lines are parallel if denom is zero
    if (denom === 0) {
        return null; // No intersection
    }

    const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom;
    const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denom;

    // Check if intersection is within the segments
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
        return null; // Intersection not within the segments
    }

    // Calculate the intersection point
    const intersectionX = x1 + ua * (x2 - x1);
    const intersectionY = y1 + ua * (y2 - y1);

    return { x: intersectionX, y: intersectionY };
}