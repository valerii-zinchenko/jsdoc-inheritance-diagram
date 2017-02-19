# `jsdoc-inheritance-diagram`

This is a plugin for [JSDoc](http://usejsdoc.org/), that by using the [`inheritance-diagram`](https://github.com/valerii-zinchenko/inheritance-diagram) library, will include the inheritance diagram of classes into the docuemntation.

Thanks to [SVG](https://www.w3.org/Graphics/SVG/) this diagram is interactive. It is visually easier to understand the hierarchy of a class and by one click jump to other class documentation from this diagram.


## Install

1. `npm install jsdoc-inheritance-diagram --save-dev`
1. Add `"node_modules/jsdoc-inheritance-diagram"` to the `plugins` in JSDoc config file
1. (opt.) Add customization configuration

Please be aware about the limitations of [`inheritance-diagram`](https://github.com/valerii-zinchenko/inheritance-diagram#limitations). Because of them some configuration are needed to make the output nice (see below).


## Configuration

`css` - (optional) string of the styles for the diagram. Initiall styles can be found in the [API doc to `inheritance-diagram`](https://valerii-zinchenko.github.io/inheritance-diagram/doc/nightly/OutputAdapter.html#_css). Alternatively, you can create your own CSS-file and include it into the configuration of static resources. For more details visit [JSDoc documentation](http://usejsdoc.org/about-configuring-default-template.html#copying-static-files-to-the-output-directory)

`node` and `line` - (optional) object of configurations that can be tuned to change some physic properties of a diagram, like the width or height of a node. The full list of available properties, which can be tuned can be found in the [API doc to `inheritance-diagram`](https://valerii-zinchenko.github.io/inheritance-diagram/doc/nightly/Rendering.html#properties)

`externalLinks` - (optional) defines the links to the external documentation for the classes. More information can be found in the [API doc to `inheritance-diagram`](https://valerii-zinchenko.github.io/inheritance-diagram/doc/nightly/InputAdapter.html#properties)

Because this plugin is just a wrapper over [`inheritance-diagram`](https://github.com/valerii-zinchenko/inheritance-diagram) module, this means that the configuration for this plugin is the same. So you can visit that module to find more details.


## Usage example

Snippet example of enabling and configuring of this plugin:

```js
{
	"plugins":["node_modules/jsdoc-inheritance-diagram"],
	"opts": {
		"inheritance-diagram": {
			"externalLinks": {
				"ExtClass": "http://link.to/external/class/documentation.html"
			},
			"css": ".parent rect {fill: lightgray;}",
			"node": {
				"dimensions": {
					"width": 40
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
