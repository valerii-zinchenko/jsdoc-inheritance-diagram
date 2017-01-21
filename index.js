/*
 * Copyright (c) 2017  Valerii Zinchenko
 * Licensed under MIT (https://github.com/valerii-zinchenko/jsdoc-inheritance-diagram/blob/master/LICENSE.txt)
 * All source files are available at: https://github.com/valerii-zinchenko/jsdoc-inheritance-diagram
 */
'use strict';

var Diagram = require('inheritance-diagram');
// Map of nodes
var map;

function addClass(doclet) {
	var name = doclet.name;
	var node = {
		children: [],
		link: `${name}.html`,
		// Reference to doclet is needed here to modify his description with a diagram
		doclet: doclet
	};

	// If class does not extends any other class, then 'augments' property does not exist
	if (doclet.augments && doclet.augments.length > 0) {
		// inheritance-diagram@1.0 supports only single parent
		node.parent = doclet.augments[0];

		// Add children
		let parentNode = map[node.parent];
		if (parentNode.children.indexOf(name) === -1) {
			parentNode.children.push(name);
		}
	}

	// If class does not mxies anything, then 'mixes' property does not exist
	if (doclet.mixes && doclet.mixes.length > 0) {
		node.mixes = [].concat(doclet.mixes);
	}

	map[name] = node;

	return node;
}

exports.handlers = {
	parseBegin: function() {
		map = {};
	},

	newDoclet: function(event) {
		var doclet = event.doclet;
		if (doclet.kind !== 'class') {
			return;
		}

		addClass(doclet);
	},

	parseComplete: function() {
		Object.keys(map).forEach((name) => {
			// Generate inheritance diagrams
			var diagram = new Diagram(name, map);

			var doclet = map[name].doclet;
			doclet.description = '<div class="class-diagram">' + diagram.getResult() + '</div>' + doclet.description;
		});
	}
};
