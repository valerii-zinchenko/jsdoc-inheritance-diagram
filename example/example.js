/**
 * ChildL31
 *
 * @class
 * @augments ChildL21
 */
function ChildL31() {}

/**
 * Root
 * @class
 * @augments SuperRoot
 */
function Root() {}
/**
 * property
 *
 * @type {Number}
 */
Root.prototype.prop = 8;
/**
 * Method
 *
 * @param {String} str - String
 */
Root.prototype.method = function(){};
/**
 * Static property
 *
 * @type {Number}
 */
Root.staticV = 5;

/**
 * Some namespace.
 * @namespace
 */
const ns = {};
/**
 * Class A in the namespace.
 * @class
 */
ns.A = class {};

/**
 * Class B in the namespace that extends the class A in the same namespace.
 * @class
 * @extends ns.A
 */
ns.B = class extends ns.A {};
