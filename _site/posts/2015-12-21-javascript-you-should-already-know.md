---
layout: layouts/post.njk
title: "6 JavaScript technologies Front-end developers should already know"
summary: "Life's tough for a front end developer because the pace of learning moves so fast. Today's developer needs to be familiar with a number of libraries, frameworks and processes in order to be successful. Here's my list of JavaScript technologies that you should already be familiar with if you're a professional front end developer."
hero: /images/posts/jsfrontend.png
thumb: /images/posts/jsfrontend_tn.png
tags:
  - web design
  - web development
  - javascript
  - NodeJS
---

## jQuery

[![jQuery](http://i.imgur.com/OtX9CNp.png)](https://jquery.com/)
[jQuery](https://jquery.com/) has gotten a bad rap lately, and that's largely because where in the past it solved a lot of problems with backwards compatibility, those issues have disappeared up to a point in modern browsers. However, it's so prevalent and already installed in most websites that you should be familiar with the framework, especially how the \$ selector engine works, chaining and complex selectors. If jQuery is already installed on your site (and chances are, if you're using either [WordPress](https://wordpress.org/) or [Bootstrap](http://getbootstrap.com/), it already is), then you're doing yourself a disservice by not knowing where it can save you time and add some backwards compatibility when you must support older browsers.

## !jQuery

On the flipside, you need to learn when jQuery is unnecessary and if it's not preinstalled in the stack you're using, then you're doing a disservice to your site by adding it just because you need a simple AJAX call or want to add form validation or some other pre-built feature. You need to know things like the [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector), how to clone or destroy nodes manually so that you don't end up loading a huge library, when a straightforward DOM selector already exists.

jQuery's features are like the dark side of the force, seductive and easier, but you'll be a stronger developer if you force yourself to learn how to work without them. It's up to you to figure out when it makes more sense to use jQuery, but be strong enough to know when you should stay away.

## NodeJS & NPM

[![NodeJS](http://i.imgur.com/KVJybSQ.png)](https://nodejs.org/en/)
[NodeJS](https://nodejs.org/en/) has changed the way front end developers work, and sometimes in a rather subtle way. It drives workflow technologies like [Gulp](http://gulpjs.com/), [Grunt](http://gruntjs.com/), [PostCSS](https://github.com/postcss/postcss), [Webpack](https://webpack.github.io/) and others that can help you make your life easier, so you owe it to yourself to spend some time learning how to program with Node. Learning the node way of doing things will make you a better developer by making you learn best practices and think about modules,learn about routes and other techniques. Even if you don't end up developing a site so that it runs on a node server, you'll still benefit from the structure and process of creating node apps or modules.

At the very least, learn how to work with [NPM](https://www.npmjs.com/), the Node Package Manager. It's crucial in understanding how to use workflow management apps. You also need to understand what a [package.json](http://browsenpm.org/package.json) file is and how to install, remove and manage node modules.

## Workflows

[![GulpJS](http://i.imgur.com/vAjOLYL.png)](http://gulpjs.com/)
Learning to code is great, but we all make mistakes and could use a little help, so creating workflows is how you get things done with a minimal amount of errors and with future or modern features that can compile to be compatible with older browsers.

Some editors IDE's like [Visual Studio](https://www.visualstudio.com/en-us/visual-studio-homepage-vs.aspx) and [Webstorm](https://www.jetbrains.com/webstorm/) will help you with tasks like code completion, linting, transpiling and pre-processing, but only if you know how to use them. Spending some time mastering your editor is way more important than trying to find the perfect editor. Get better with what you know and if you're like me and want something more configurable, look for NodeJS based tools like [Gulp](http://gulpjs.com/), [Grunt](http://gruntjs.com/) or [Webpack](https://webpack.github.io/) that will help you work well in a shared environment and give you some of those same capabilities without the overhead. Within a team, you can develop coding standards and styles that can be shared so the team is on the same page.

Creating a Workflow is about building a set of processes that make your life easier. It's guaranteed to help you code faster, with added features and less errors. Who wouldn't want that?

## Git & Github

[![Github](http://i.imgur.com/GFLj4ag.png)](https://github.com/planetoftheweb)
Modern development would be nothing without Open Source tools. And [Github](https://github.com) is where most of those tools live. In order to master Github, though, you need to learn about [Git](https://git-scm.com/), the version control system at Github's core. Git fundamentally changes the way you work with your code in the same way that things like copy and paste and unlimited undos changed the way you worked with documents. Learn to create repos, branches, commits. It takes some time to get used to Git, but that time will be well worth it the next time you roll back to a previous commit state. In the same way, Github changes the way you work with others, because it gives them the ability to comment, branch, star and even submit bug reports.

## Pre-Processors & Transpilers

[![Babel](http://i.imgur.com/kw94yuz.png)](https://babeljs.io)
I'm a big believer in working smarter, and that means spending time on technologies that help me become more efficient. Therefore, I love things like [Sass](http://sass-lang.com/), [Less](http://lesscss.org/) [PostCSS](https://github.com/postcss/postcss) and others that give languages new capabilities. Once you've learned how to work with CSS variables, you'll never go back to plain CSS. In the same way, the ability to work with functions (mixins) and extends makes your code smarter by allowing you to create reusable bits of code. Today some of these libraries, like Sass have been ported over to JavaScript for blazing performance and without requiring a Ruby install.

[PostCSS](https://github.com/postcss/postcss) eliminates the need for prefixed code, has a large library of plugins with Sass-like features and can even help you use future CSS features today. Another hot new technology...transpilers like [Babel](https://babeljs.io/) let you use ES2015(ES6) in today's browsers or use languages like TypeScript that add interesting new features to your programming arsenal. If you aren't taking advantage of these workflow enhancements, then you're wasting time writing CSS/JavaScript and falling behind on what you can do with programming languages today.
