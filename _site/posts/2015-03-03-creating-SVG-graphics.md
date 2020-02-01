---
layout: layouts/post.njk
title: "Getting started creating SVG Graphics"
summary: "A lot of data visualizations use the SVG format to create graphics, so in this article, we'll use SVG to create some basic shapes and graphics. Understanding how the format works will help you when you're using SVG based libraries and frameworks."
hero: /images/posts/svggraphics.png
thumb: /images/posts/svggraphics_tn.png
tags:
  - data visualization
  - svg
---

## SVG Graphic Fundamentals

Visualization tools like D3.js or C3.js use the SVG (Scalable Vector Graphics) format by default, so it's important to understand how that format uses XML style commands to generate graphics. Let's dive straight into some code.

<a class="jsbin-embed" href="http://jsbin.com/bidevi/3/embed?html,output">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

SVG is pretty easy to read and if you know HTML it should be even easier. An SVG graphic begins and ends with the `<svg></svg>` tags like many other HTML elements and you can add different attributes like the width and height of the graphic. As a matter of fact, the very first thing you do with SVG is specify the canvas that the rest of the graphics will be using.

Just like with any other HTML tag we can add a style attribute and pass it common CSS commands, here we've set the color of the background to a bluish medium gray.

Inside the SVG tag, you can create additional elements that generate graphics. Here's a comprehensive reference to all of the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG">SVG elements that you can create</a>. Common elements (with examples) include:

- <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect">Rectangle</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle">Circle</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse">Ellipse</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line">Line</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path">Paths</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon">Polygon</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline">Polyline</a>

|`<path d="M 100 100 L 300 100 L 200 300 z" fill="orange" stroke="black" stroke-width="3" />` | <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path">Paths</a> |

- <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text">Text</a>

If you come from an HTML background, there are some important things to note about this code. First, you'll notice that the tags use a self closing style when they are single tags. So instead of writing something like `<rect></rect>` you can write something like `<rect> />`. SGV looks like HTML, but it isn't exactly HTML, so an XHTML style is used for the tags. Although most browsers will be forgiving on some traditional XML rules like capitalization, punctuation and quotes around attributes, the format itself is more strict.

For example, technically, the `<svg>` tag should include an SVG namespace declaration specifying the version and format of the library you're using.

```
	<svg xmlns="http://www.w3.org/2000/svg" …>
  	<rect …/>
	</svg>
```

Here's where you can <a href="http://www.w3.org/Graphics/SVG/">learn more about the SVG specification</a> and format.

You might also notice that like with HTML we can use the style attribute and use CSS.
