# `jsdoc-inheritance-diagram`

This is a plugin for [JSDoc](http://usejsdoc.org/), that by using the [`inheritance-diagram`](https://github.com/valerii-zinchenko/inheritance-diagram) library, will include the inheritance diagram of classes into the docuemntation.

Thanks to [SVG](https://www.w3.org/Graphics/SVG/) this diagram is interactive. It is visually easier to understand the hierarchy of a class and by one click jump to other class documentation from this diagram.


## Install

1. `npm install jsdoc-inheritance-diagram --save-dev`
1. Add `"node_modules/jsdoc-inheritance-diagram"` to the `plugins` in JSDoc config file
1. (opt.) Add customization configuration

Please be aware about the limitations of [`inheritance-diagram`](https://github.com/valerii-zinchenko/inheritance-diagram#limitations). Because of them some configuration are needed to make the output nice (see below).


## Configuration

`css` - (optional) specify the styles for the diagram. Alternatively, you can create your own CSS-file and include it into the configuration of static resources. For more details visit [JSDoc documentation](http://usejsdoc.org/about-configuring-default-template.html#copying-static-files-to-the-output-directory)

`rendering` - (optional) object of configurations that can be tuned to change some physic properties of a diagram, like the width or height of a node.

For more information, please visit [`inheritance-diagram`](https://github.com/valerii-zinchenko/inheritance-diagram).

## Usage example

Snippet example of enabling and configuring of this plugin:

```js
{
	"plugins":["node_modules/jsdoc-inheritance-diagram"],
	"opts": {
		"inheritance-diagram": {
			"css": ".parent rect {fill: lightgray;}",
			"rendering": {
				"node": {
					"dimensions": {
						"width": 40
					}
				}
			}
		}
	}
}
```


## Links

* [`inheritance-diagram`](https://github.com/valerii-zinchenko/inheritance-diagram)
* [JSDoc](http://usejsdoc.org/)
* How to:
	* [configure JSDoc](http://usejsdoc.org/about-configuring-jsdoc.html)
	* [apply a plugin in JSDoc](http://usejsdoc.org/about-configuring-jsdoc.html#plugins)
	* [copy static resources](http://usejsdoc.org/about-configuring-default-template.html#copying-static-files-to-the-output-directory)
