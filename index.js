'use strict';

var conf = require('jsdoc/env').conf;
var fs = require('fs');

// Map of nodes
var map;

function addClass(doclet) {
	var name = doclet.name;
	var node = {
		children: [],
		link: `images/${name}.svg`
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
		node.mixes = doclet.mixes;
	}

	map[name] = node;

	return node;
}


exports.handlers = {
	parseBegin: function() {
		map = {};

		// Create temp directory where all diagrams will be saved
		fs.mkdir('tmp', function(e) {
			if (e) {
				throw e;
			}
		});
		fs.mkdir('tmp/images', function(e) {
			if (e) {
				throw e;
			}
		});
	},

	newDoclet: function(event) {
		var doclet = event.doclet;
		if (doclet.kind !== 'class') {
			return;
		}

		var node = addClass(doclet);

		// Add an image at the beginninng of the description
		doclet.description = `<div><img src="${node.link}" alt="Inheritance diagram for ${doclet.name} class" /></div>` + doclet.description;
	},

	parseComplete: function() {
		// todo Generate inheritance diagrams

		// todo Save images into the images forlder

		// Add static resources to the config to include the generated images into the documentation
		if (!conf.templates) {
			conf.templates = {};
		}
		if (!conf.templates.default) {
			conf.templates.default = {};
		}
		if (!conf.templates.default.staticFiles) {
			conf.templates.default.staticFiles = {};
		}
		if (!conf.templates.default.staticFiles.include) {
			conf.templates.default.staticFiles.include = [];
		}
		conf.templates.default.staticFiles.include.push('./tmp');
	},

	processingComplete: function() {
		/*
		fs.rmdir('tmp', function(e) {
			if (e) {
				throw e;
			}
		});
		*/
	}
};
