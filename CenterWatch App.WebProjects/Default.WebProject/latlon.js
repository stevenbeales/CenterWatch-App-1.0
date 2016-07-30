if (typeof module!='undefined' && module.exports) var Dms = require('./dms'); // = import Dms from 'dms.js'


/**
 * Library of geodesy functions for operations on a spherical earth model.
 *
 * @module   latlon-spherical
 * @requires dms
 */


/**
 * Creates a LatLon point on the earth's surface at the specified latitude / longitude.
 *
 * @constructor
 * @param {number} lat - Latitude in degrees.
 * @param {number} lon - Longitude in degrees.
 *
 * @example
 *     var p1 = new LatLon(52.205, 0.119);
 */
function LatLon(lat, lon) {
    // allow instantiation without 'new'
    if (!(this instanceof LatLon)) return new LatLon(lat, lon);

    this.lat = Number(lat);
    this.lon = Number(lon);
}


/**
 * Returns the distance from ‘this’ point to destination point (using haversine formula).
 *
 * @param   {LatLon} point - Latitude/longitude of destination point.
 * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
 * @returns {number} Distance between this point and destination point, in same units as radius.
 *
 * @example
 *     var p1 = new LatLon(52.205, 0.119);
 *     var p2 = new LatLon(48.857, 2.351);
 *     var d = p1.distanceTo(p2); // 404.3 km
 */
LatLon.prototype.distanceTo = function(point, radius) {
    if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');
    radius = (radius === undefined) ? 6371e3 : Number(radius);

    var R = radius;
    var f1 = this.lat.toRadians(),  ?1 = this.lon.toRadians();
    var f2 = point.lat.toRadians(), ?2 = point.lon.toRadians();
    var ?f = f2 - f1;
    var ?? = ?2 - ?1;

    var a = Math.sin(?f/2) * Math.sin(?f/2)
          + Math.cos(f1) * Math.cos(f2)
          * Math.sin(??/2) * Math.sin(??/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;

    return d;
};


/**
 * Returns the (initial) bearing from ‘this’ point to destination point.
 *
 * @param   {LatLon} point - Latitude/longitude of destination point.
 * @returns {number} Initial bearing in degrees from north.
 *
 * @example
 *     var p1 = new LatLon(52.205, 0.119);
 *     var p2 = new LatLon(48.857, 2.351);
 *     var b1 = p1.bearingTo(p2); // 156.2°
 */
LatLon.prototype.bearingTo = function(point) {
    if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');

    var f1 = this.lat.toRadians(), f2 = point.lat.toRadians();
    var ?? = (point.lon-this.lon).toRadians();

    // see http://mathforum.org/library/drmath/view/55417.html
    var y = Math.sin(??) * Math.cos(f2);
    var x = Math.cos(f1)*Math.sin(f2) -
            Math.sin(f1)*Math.cos(f2)*Math.cos(??);
    var ? = Math.atan2(y, x);

    return (?.toDegrees()+360) % 360;
};


/**
 * Returns final bearing arriving at destination destination point from ‘this’ point; the final bearing
 * will differ from the initial bearing by varying degrees according to distance and latitude.
 *
 * @param   {LatLon} point - Latitude/longitude of destination point.
 * @returns {number} Final bearing in degrees from north.
 *
 * @example
 *     var p1 = new LatLon(52.205, 0.119);
 *     var p2 = new LatLon(48.857, 2.351);
 *     var b2 = p1.finalBearingTo(p2); // 157.9°
 */
LatLon.prototype.finalBearingTo = function(point) {
    if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');

    // get initial bearing from destination point to this point & reverse it by adding 180°
    return ( point.bearingTo(this)+180 ) % 360;
};


/**
 * Returns the midpoint between ‘this’ point and the supplied point.
 *
 * @param   {LatLon} point - Latitude/longitude of destination point.
 * @returns {LatLon} Midpoint between this point and the supplied point.
 *
 * @example
 *     var p1 = new LatLon(52.205, 0.119);
 *     var p2 = new LatLon(48.857, 2.351);
 *     var pMid = p1.midpointTo(p2); // 50.5363°N, 001.2746°E
 */
LatLon.prototype.midpointTo = function(point) {
    if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');

    // fm = atan2( sinf1 + sinf2, v( (cosf1 + cosf2·cos??) · (cosf1 + cosf2·cos??) ) + cos²f2·sin²?? )
    // ?m = ?1 + atan2(cosf2·sin??, cosf1 + cosf2·cos??)
    // see http://mathforum.org/library/drmath/view/51822.html for derivation

    var f1 = this.lat.toRadians(), ?1 = this.lon.toRadians();
    var f2 = point.lat.toRadians();
    var ?? = (point.lon-this.lon).toRadians();

    var Bx = Math.cos(f2) * Math.cos(??);
    var By = Math.cos(f2) * Math.sin(??);

    var x = Math.sqrt((Math.cos(f1) + Bx) * (Math.cos(f1) + Bx) + By * By);
    var y = Math.sin(f1) + Math.sin(f2);
    var f3 = Math.atan2(y, x);

    var ?3 = ?1 + Math.atan2(By, Math.cos(f1) + Bx);

    return new LatLon(f3.toDegrees(), (?3.toDegrees()+540)%360-180); // normalise to -180..+180°
};


/**
 * Returns the destination point from ‘this’ point having travelled the given distance on the
 * given initial bearing (bearing normally varies around path followed).
 *
 * @param   {number} distance - Distance travelled, in same units as earth radius (default: metres).
 * @param   {number} bearing - Initial bearing in degrees from north.
 * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
 * @returns {LatLon} Destination point.
 *
 * @example
 *     var p1 = new LatLon(51.4778, -0.0015);
 *     var p2 = p1.destinationPoint(7794, 300.7); // 51.5135°N, 000.0983°W
 */
LatLon.prototype.destinationPoint = function(distance, bearing, radius) {
    radius = (radius === undefined) ? 6371e3 : Number(radius);

    // f2 = asin( sinf1·cosd + cosf1·sind·cos? )
    // ?2 = ?1 + atan2( sin?·sind·cosf1, cosd - sinf1·sinf2 )
    // see http://williams.best.vwh.net/avform.htm#LL

    var d = Number(distance) / radius; // angular distance in radians
    var ? = Number(bearing).toRadians();

    var f1 = this.lat.toRadians();
    var ?1 = this.lon.toRadians();

    var f2 = Math.asin(Math.sin(f1)*Math.cos(d) + Math.cos(f1)*Math.sin(d)*Math.cos(?));
    var x = Math.cos(d) - Math.sin(f1) * Math.sin(f2);
    var y = Math.sin(?) * Math.sin(d) * Math.cos(f1);
    var ?2 = ?1 + Math.atan2(y, x);

    return new LatLon(f2.toDegrees(), (?2.toDegrees()+540)%360-180); // normalise to -180..+180°
};


/**
 * Returns the point of intersection of two paths defined by point and bearing.
 *
 * @param   {LatLon} p1 - First point.
 * @param   {number} brng1 - Initial bearing from first point.
 * @param   {LatLon} p2 - Second point.
 * @param   {number} brng2 - Initial bearing from second point.
 * @returns {LatLon|null} Destination point (null if no unique intersection defined).
 *
 * @example
 *     var p1 = LatLon(51.8853, 0.2545), brng1 = 108.547;
 *     var p2 = LatLon(49.0034, 2.5735), brng2 =  32.435;
 *     var pInt = LatLon.intersection(p1, brng1, p2, brng2); // 50.9078°N, 004.5084°E
 */
LatLon.intersection = function(p1, brng1, p2, brng2) {
    if (!(p1 instanceof LatLon)) throw new TypeError('p1 is not LatLon object');
    if (!(p2 instanceof LatLon)) throw new TypeError('p2 is not LatLon object');

    // see http://williams.best.vwh.net/avform.htm#Intersection

    var f1 = p1.lat.toRadians(), ?1 = p1.lon.toRadians();
    var f2 = p2.lat.toRadians(), ?2 = p2.lon.toRadians();
    var ?13 = Number(brng1).toRadians(), ?23 = Number(brng2).toRadians();
    var ?f = f2-f1, ?? = ?2-?1;

    var d12 = 2*Math.asin( Math.sqrt( Math.sin(?f/2)*Math.sin(?f/2)
        + Math.cos(f1)*Math.cos(f2)*Math.sin(??/2)*Math.sin(??/2) ) );
    if (d12 == 0) return null;

    // initial/final bearings between points
    var ?1 = Math.acos( ( Math.sin(f2) - Math.sin(f1)*Math.cos(d12) ) / ( Math.sin(d12)*Math.cos(f1) ) );
    if (isNaN(?1)) ?1 = 0; // protect against rounding
    var ?2 = Math.acos( ( Math.sin(f1) - Math.sin(f2)*Math.cos(d12) ) / ( Math.sin(d12)*Math.cos(f2) ) );

    var ?12 = Math.sin(?2-?1)>0 ? ?1 : 2*Math.PI-?1;
    var ?21 = Math.sin(?2-?1)>0 ? 2*Math.PI-?2 : ?2;

    var a1 = (?13 - ?12 + Math.PI) % (2*Math.PI) - Math.PI; // angle 2-1-3
    var a2 = (?21 - ?23 + Math.PI) % (2*Math.PI) - Math.PI; // angle 1-2-3

    if (Math.sin(a1)==0 && Math.sin(a2)==0) return null; // infinite intersections
    if (Math.sin(a1)*Math.sin(a2) < 0) return null;      // ambiguous intersection

    //a1 = Math.abs(a1);
    //a2 = Math.abs(a2);
    // ... Ed Williams takes abs of a1/a2, but seems to break calculation?

    var a3 = Math.acos( -Math.cos(a1)*Math.cos(a2) + Math.sin(a1)*Math.sin(a2)*Math.cos(d12) );
    var d13 = Math.atan2( Math.sin(d12)*Math.sin(a1)*Math.sin(a2), Math.cos(a2)+Math.cos(a1)*Math.cos(a3) );
    var f3 = Math.asin( Math.sin(f1)*Math.cos(d13) + Math.cos(f1)*Math.sin(d13)*Math.cos(?13) );
    var ??13 = Math.atan2( Math.sin(?13)*Math.sin(d13)*Math.cos(f1), Math.cos(d13)-Math.sin(f1)*Math.sin(f3) );
    var ?3 = ?1 + ??13;

    return new LatLon(f3.toDegrees(), (?3.toDegrees()+540)%360-180); // normalise to -180..+180°
};


/**
 * Returns (signed) distance from ‘this’ point to great circle defined by start-point and end-point.
 *
 * @param   {LatLon} pathStart - Start point of great circle path.
 * @param   {LatLon} pathEnd - End point of great circle path.
 * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
 * @returns {number} Distance to great circle (-ve if to left, +ve if to right of path).
 *
 * @example
 *   var pCurrent = new LatLon(53.2611, -0.7972);
 *   var p1 = new LatLon(53.3206, -1.7297);
 *   var p2 = new LatLon(53.1887,  0.1334);
 *   var d = pCurrent.crossTrackDistanceTo(p1, p2);  // -307.5 m
 */
LatLon.prototype.crossTrackDistanceTo = function(pathStart, pathEnd, radius) {
    if (!(pathStart instanceof LatLon)) throw new TypeError('pathStart is not LatLon object');
    if (!(pathEnd instanceof LatLon)) throw new TypeError('pathEnd is not LatLon object');
    radius = (radius === undefined) ? 6371e3 : Number(radius);

    var d13 = pathStart.distanceTo(this, radius)/radius;
    var ?13 = pathStart.bearingTo(this).toRadians();
    var ?12 = pathStart.bearingTo(pathEnd).toRadians();

    var dxt = Math.asin( Math.sin(d13) * Math.sin(?13-?12) ) * radius;

    return dxt;
};


/**
 * Returns maximum latitude reached when travelling on a great circle on given bearing from this
 * point ('Clairaut's formula'). Negate the result for the minimum latitude (in the Southern
 * hemisphere).
 *
 * The maximum latitude is independent of longitude; it will be the same for all points on a given
 * latitude.
 *
 * @param {number} bearing - Initial bearing.
 * @param {number} latitude - Starting latitude.
 */
LatLon.prototype.maxLatitude = function(bearing) {
    var ? = Number(bearing).toRadians();

    var f = this.lat.toRadians();

    var fMax = Math.acos(Math.abs(Math.sin(?)*Math.cos(f)));

    return fMax.toDegrees();
};


/**
 * Returns the pair of meridians at which a great circle defined by two points crosses the given
 * latitude. If the great circle doesn't reach the given latitude, null is returned.
 *
 * @param {LatLon} point1 - First point defining great circle.
 * @param {LatLon} point2 - Second point defining great circle.
 * @param {number} latitude - Latitude crossings are to be determined for.
 * @returns {Object|null} Object containing { lon1, lon2 } or null if given latitude not reached.
 */
LatLon.crossingParallels = function(point1, point2, latitude) {
    var f = Number(latitude).toRadians();

    var f1 = point1.lat.toRadians();
    var ?1 = point1.lon.toRadians();
    var f2 = point2.lat.toRadians();
    var ?2 = point2.lon.toRadians();

    var ?? = ?2 - ?1;

    var x = Math.sin(f1) * Math.cos(f2) * Math.cos(f) * Math.sin(??);
    var y = Math.sin(f1) * Math.cos(f2) * Math.cos(f) * Math.cos(??) - Math.cos(f1) * Math.sin(f2) * Math.cos(f);
    var z = Math.cos(f1) * Math.cos(f2) * Math.sin(f) * Math.sin(??);

    if (z*z > x*x + y*y) return null; // great circle doesn't reach latitude

    var ?m = Math.atan2(-y, x);                  // longitude at max latitude
    var ??i = Math.acos(z / Math.sqrt(x*x+y*y)); // ?? from ?m to intersection points

    var ?i1 = ?1 + ?m - ??i;
    var ?i2 = ?1 + ?m + ??i;

    return { lon1: (?i1.toDegrees()+540)%360-180, lon2: (?i2.toDegrees()+540)%360-180 }; // normalise to -180..+180°
};


/* Rhumb - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/**
 * Returns the distance travelling from ‘this’ point to destination point along a rhumb line.
 *
 * @param   {LatLon} point - Latitude/longitude of destination point.
 * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
 * @returns {number} Distance in km between this point and destination point (same units as radius).
 *
 * @example
 *     var p1 = new LatLon(51.127, 1.338);
 *     var p2 = new LatLon(50.964, 1.853);
 *     var d = p1.distanceTo(p2); // 40.31 km
 */
LatLon.prototype.rhumbDistanceTo = function(point, radius) {
    if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');
    radius = (radius === undefined) ? 6371e3 : Number(radius);

    // see http://williams.best.vwh.net/avform.htm#Rhumb

    var R = radius;
    var f1 = this.lat.toRadians(), f2 = point.lat.toRadians();
    var ?f = f2 - f1;
    var ?? = Math.abs(point.lon-this.lon).toRadians();
    // if dLon over 180° take shorter rhumb line across the anti-meridian:
    if (Math.abs(??) > Math.PI) ?? = ??>0 ? -(2*Math.PI-??) : (2*Math.PI+??);

    // on Mercator projection, longitude distances shrink by latitude; q is the 'stretch factor'
    // q becomes ill-conditioned along E-W line (0/0); use empirical tolerance to avoid it
    var ?? = Math.log(Math.tan(f2/2+Math.PI/4)/Math.tan(f1/2+Math.PI/4));
    var q = Math.abs(??) > 10e-12 ? ?f/?? : Math.cos(f1);

    // distance is pythagoras on 'stretched' Mercator projection
    var d = Math.sqrt(?f*?f + q*q*??*??); // angular distance in radians
    var dist = d * R;

    return dist;
};


/**
 * Returns the bearing from ‘this’ point to destination point along a rhumb line.
 *
 * @param   {LatLon} point - Latitude/longitude of destination point.
 * @returns {number} Bearing in degrees from north.
 *
 * @example
 *     var p1 = new LatLon(51.127, 1.338);
 *     var p2 = new LatLon(50.964, 1.853);
 *     var d = p1.rhumbBearingTo(p2); // 116.7 m
 */
LatLon.prototype.rhumbBearingTo = function(point) {
    if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');

    var f1 = this.lat.toRadians(), f2 = point.lat.toRadians();
    var ?? = (point.lon-this.lon).toRadians();
    // if dLon over 180° take shorter rhumb line across the anti-meridian:
    if (Math.abs(??) > Math.PI) ?? = ??>0 ? -(2*Math.PI-??) : (2*Math.PI+??);

    var ?? = Math.log(Math.tan(f2/2+Math.PI/4)/Math.tan(f1/2+Math.PI/4));

    var ? = Math.atan2(??, ??);

    return (?.toDegrees()+360) % 360;
};


/**
 * Returns the destination point having travelled along a rhumb line from ‘this’ point the given
 * distance on the  given bearing.
 *
 * @param   {number} distance - Distance travelled, in same units as earth radius (default: metres).
 * @param   {number} bearing - Bearing in degrees from north.
 * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
 * @returns {LatLon} Destination point.
 *
 * @example
 *     var p1 = new LatLon(51.127, 1.338);
 *     var p2 = p1.rhumbDestinationPoint(40300, 116.7); // 50.9642°N, 001.8530°E
 */
LatLon.prototype.rhumbDestinationPoint = function(distance, bearing, radius) {
    radius = (radius === undefined) ? 6371e3 : Number(radius);

    var d = Number(distance) / radius; // angular distance in radians
    var f1 = this.lat.toRadians(), ?1 = this.lon.toRadians();
    var ? = Number(bearing).toRadians();

    var ?f = d * Math.cos(?);
    var f2 = f1 + ?f;

    // check for some daft bugger going past the pole, normalise latitude if so
    if (Math.abs(f2) > Math.PI/2) f2 = f2>0 ? Math.PI-f2 : -Math.PI-f2;

    var ?? = Math.log(Math.tan(f2/2+Math.PI/4)/Math.tan(f1/2+Math.PI/4));
    var q = Math.abs(??) > 10e-12 ? ?f / ?? : Math.cos(f1); // E-W course becomes ill-conditioned with 0/0

    var ?? = d*Math.sin(?)/q;
    var ?2 = ?1 + ??;

    return new LatLon(f2.toDegrees(), (?2.toDegrees()+540) % 360 - 180); // normalise to -180..+180°
};


/**
 * Returns the loxodromic midpoint (along a rhumb line) between ‘this’ point and second point.
 *
 * @param   {LatLon} point - Latitude/longitude of second point.
 * @returns {LatLon} Midpoint between this point and second point.
 *
 * @example
 *     var p1 = new LatLon(51.127, 1.338);
 *     var p2 = new LatLon(50.964, 1.853);
 *     var pMid = p1.rhumbMidpointTo(p2); // 51.0455°N, 001.5957°E
 */
LatLon.prototype.rhumbMidpointTo = function(point) {
    if (!(point instanceof LatLon)) throw new TypeError('point is not LatLon object');

    // http://mathforum.org/kb/message.jspa?messageID=148837

    var f1 = this.lat.toRadians(), ?1 = this.lon.toRadians();
    var f2 = point.lat.toRadians(), ?2 = point.lon.toRadians();

    if (Math.abs(?2-?1) > Math.PI) ?1 += 2*Math.PI; // crossing anti-meridian

    var f3 = (f1+f2)/2;
    var f1 = Math.tan(Math.PI/4 + f1/2);
    var f2 = Math.tan(Math.PI/4 + f2/2);
    var f3 = Math.tan(Math.PI/4 + f3/2);
    var ?3 = ( (?2-?1)*Math.log(f3) + ?1*Math.log(f2) - ?2*Math.log(f1) ) / Math.log(f2/f1);

    if (!isFinite(?3)) ?3 = (?1+?2)/2; // parallel of latitude

    var p = LatLon(f3.toDegrees(), (?3.toDegrees()+540)%360-180); // normalise to -180..+180°

    return p;
};


/**
 * Returns a string representation of ‘this’ point, formatted as degrees, degrees+minutes, or
 * degrees+minutes+seconds.
 *
 * @param   {string} [format=dms] - Format point as 'd', 'dm', 'dms'.
 * @param   {number} [dp=0|2|4] - Number of decimal places to use - default 0 for dms, 2 for dm, 4 for d.
 * @returns {string} Comma-separated latitude/longitude.
 */
LatLon.prototype.toString = function(format, dp) {
    return Dms.toLat(this.lat, format, dp) + ', ' + Dms.toLon(this.lon, format, dp);
};


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/** Extend Number object with method to convert numeric degrees to radians */
if (Number.prototype.toRadians === undefined) {
    Number.prototype.toRadians = function() { return this * Math.PI / 180; };
}

/** Extend Number object with method to convert radians to numeric (signed) degrees */
if (Number.prototype.toDegrees === undefined) {
    Number.prototype.toDegrees = function() { return this * 180 / Math.PI; };
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
if (typeof module != 'undefined' && module.exports) module.exports = LatLon; // = export default LatLon