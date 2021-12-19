/**
 * @author Peter Kelley
 * @author pgkelley4@gmail.com
 * modified version of https://github.com/pgkelley4/line-segments-intersect/blob/master/js/line-segments-intersect.js
 */

import { Point } from "chart.js";



/**
 * See if two line segments intersect. This uses the 
 * vector cross product approach described below:
 * http://stackoverflow.com/a/565282/786339
 * 
 * @param {Point} p point object with x and y coordinates
 *  representing the start of the 1st line.
 * @param {Point} p2 point object with x and y coordinates
 *  representing the end of the 1st line.
 * @param {Point} q point object with x and y coordinates
 *  representing the start of the 2nd line.
 * @param {Point} q2 point object with x and y coordinates
 *  representing the end of the 2nd line.
 */
 function doLineSegmentsIntersect(p:Point, p2:Point, q:Point, q2:Point): Point | undefined {
	let r = subtractPoints(p2, p);
	let s = subtractPoints(q2, q);

	let uNumerator = crossProduct(subtractPoints(q, p), r);
	let denominator = crossProduct(r, s);

	// if (uNumerator == 0 && denominator == 0) {
	// 	// They are coLlinear
		
	// 	// Do they touch? (Are any of the points equal?)
	// 	if (equalPoints(p, q) || equalPoints(p, q2) || equalPoints(p2, q) || equalPoints(p2, q2)) {
	// 		return true
	// 	}
	// 	// Do they overlap? (Are all the point differences in either direction the same sign)
	// 	return !allEqual(
	// 			(q.x - p.x < 0),
	// 			(q.x - p2.x < 0),
	// 			(q2.x - p.x < 0),
	// 			(q2.x - p2.x < 0)) ||
	// 		!allEqual(
	// 			(q.y - p.y < 0),
	// 			(q.y - p2.y < 0),
	// 			(q2.y - p.y < 0),
	// 			(q2.y - p2.y < 0));
	// }

	// We dont count collinear or parallel 
	if (denominator == 0) {
		// lines are paralell
		// console.log("denominator = 0");
		
		return undefined;
	}

	var u = uNumerator / denominator;
	var t = crossProduct(subtractPoints(q, p), s) / denominator;

	if ((t >= 0) && (t <= 1) && (u >= 0) && (u <= 1)){
		// console.log(`t=${t}, u=${u}`);
		
		return {x:q.x +s.x*u,y:q.y +s.y*u};;
	}
	// console.log(`t=${t}, u=${u}`);

	return  undefined
}

/**
 * Calculate the cross product of the two points.
 * 
 * @param {Point} point1 point object with x and y coordinates
 * @param {Point} point2 point object with x and y coordinates
 * 
 * @return the cross product result as a float
 */
function crossProduct(point1:Point, point2:Point) {
	return point1.x * point2.y - point1.y * point2.x;
}

/**
 * Subtract the second point from the first.
 * 
 * @param {Point} point1 point object with x and y coordinates
 * @param {Point} point2 point object with x and y coordinates
 * 
 * @return the subtraction result as a point object
 */ 
function subtractPoints(point1:Point, point2:Point) {
	let result:Point = {x:point1.x - point2.x, y:point1.y - point2.y};
	return result;
}

/**
 * See if the points are equal.
 *
 * @param {Point} point1 point object with x and y coordinates
 * @param {Point} point2 point object with x and y coordinates
 *
 * @return if the points are equal
 */
function equalPoints(point1:Point, point2:Point) {
	return (point1.x == point2.x) && (point1.y == point2.y)
}

/**
 * See if all arguments are equal.
 *
 * @param {...} args arguments that will be compared by '=='.
 *
 * @return if all arguments are equal
 */
function allEqual(...args:any[]) {
	var firstValue = args[0],
		i;
	for (i = 1; i < args.length; i += 1) {
		if (args[i] != firstValue) {
			return false;
		}
	}
	return true;
}



export {doLineSegmentsIntersect}