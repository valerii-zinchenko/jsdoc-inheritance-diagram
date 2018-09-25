/*
 * Copyright (c) 2017-2018  Valerii Zinchenko
 * Licensed under MIT (https://github.com/valerii-zinchenko/jsdoc-inheritance-diagram/blob/master/LICENSE.txt)
 * All source files are available at: https://github.com/valerii-zinchenko/jsdoc-inheritance-diagram
 */
'use strict';

const conf = require('jsdoc/env').conf.opts['inheritance-diagram'] || {};
const Diagram = require('inheritance-diagram');
// Map of nodes
let map;

function addClass(doclet) {
	const name = doclet.longname;
	const node = {
		children: [],
		link: `${name}.html`,
		// Reference to doclet is needed here to modify his description with a diagram
		doclet: doclet
	};

	// If class does not extends any other class, then 'augments' property does not exist
	if (doclet.augments && doclet.augments.length > 0) {
		// inheritance-diagram@1.0 supports only single parent
		node.parent = doclet.augments[0];
	}

	// If class does not mxies anything, then 'mixes' property does not exist
	if (doclet.mixes && doclet.mixes.length > 0) {
		node.mixes = [].concat(doclet.mixes);
	}

	map[name] = node;

	return node;
}

let isDocForExternalLinksGenerated = !conf.externalLinks;
exports.handlers = {
	beforeParse: function(e) {
		// this event is fired for each file but additional documentation should be added only once
		if (isDocForExternalLinksGenerated) {
			return;
		}

		let extraDoc = '';
		Object.keys(conf.externalLinks).forEach(key => {
			extraDoc += `/**
			 * This is automatically generated documentation page by <a href="https://www.npmjs.com/package/jsdoc-inheritance-diagram" target="_blank"><code>jsdoc-inheritance-diagram</code></a> plugin. Please follow "see" link to see more details about this class.
			 * @class ${key}
			 * @see ${conf.externalLinks[key]}
			 */`;
		});

		e.source += extraDoc;

		isDocForExternalLinksGenerated = true;
	},

	parseBegin: function() {
		map = {};
	},

	newDoclet: function(event) {
		const doclet = event.doclet;
		if (doclet.kind !== 'class') {
			return;
		}

		addClass(doclet);
	},

	parseComplete: function() {
		// Populate children
		Object.keys(map).forEach((name) => {
			const node = map[name];
			const parentNode = map[node.parent] || {
				children: []
			};

			if (parentNode.children.indexOf(name) === -1) {
				parentNode.children.push(name);
			}
		});

		Object.keys(map).forEach((name) => {
			// Generate inheritance diagrams
			const diagram = new Diagram(name, map, conf);

			const doclet = map[name].doclet;
			doclet.description = '<div class="class-diagram">' + diagram.getResult() + '</div>' + doclet.description;
		});
	}
};
