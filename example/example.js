/**
 * Root
 * @class
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
Root.statisV = 5;

/**
 * ChildL11
 * @class
 * @augments Root
 */
function ChildL11() {}
/**
 * Overriden metod
 *
 * @param {String} str - String
 */
ChildL11.prototype.method = function(){};
/**
 * Method 2
 */
ChildL11.prototype.method2 = function(){};

/**
 * ChildL12
 * @class
 * @augments Root
 */
function ChildL12() {}

/**
 * ChildL21
 * @class
 * @augments ChildL11
 * @mixes Mixin1
 * @mixes Mixin2
 * @mixes ExtMixin
 */
function ChildL21(){}
/**
 * Method 3
 */
ChildL21.prototype.method3 = function(){};
/**
 * Property 3
 *
 * @type {String}
 */
ChildL21.prototype.prop3 = 'str';

/**
 * Mixin class
 * @class
 */
function Mixin1(){}
/**
 * mixin method 1
 */
Mixin1.prototype.mixin1method = function(){};
/**
 * property of mixin 1
 */
Mixin1.prototype.mixin1prop = 'str';
/**
 * Mixin2
 * @class
 */
function Mixin2(){}
/**
 * mixin method 2
 */
Mixin2.prototype.mixin2method = function(){};
