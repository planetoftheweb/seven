---
layout: layouts/post-sidebar.njk
title: Setup Instructions
summary: A markdown first slide framework based on the awesome reveal.js, with multiple presentations, custom layouts and a whole lot more."
sidebar: rayveal
eleventyNavigation:
  key: instructions
  title: 'Instructions'
  parent: rayveal
  order: 2
tags:
  - project
  - rayveal
---

# Setup Instructions

## Instructions

Instead of creating HTML files, you simply create one or more `*.md` files in the `build/slides` folder. A server is required in order to use RayVeal properly...since the markdown files have to be loaded dynamicaly, so upload the contents of the `build` folder to a server.

## Installing Locally (optional)

Optionally, you can just run the presentation locally (great when you can't guarantee a network connection), There's a live preview server provided.

1. Grab/Fork from [repo](http://github.com/planetoftheweb/rayveal)
1. `build` folder has presentation
1. `build/slides/demo.md` subfolder has sample markdown
1. `slides/index.json` has a list of presentations (optional)

## Running locally

1. Run `$ npm install` from your terminal
1. Edit `build/slides/demo.md` or add `*.md files`
1. Run `$ npm start` from your terminal
1. Generates the `build/slides/index.json` file (index)
1. Creates a live reload server

## Pre-installed libraries

Pre-installed libraries like [Font Awesome](https://fontawesome.com/?from=io) will let you easily add icons to your presentation, while a lightweight version of bootstrap, which you can customize for your own needs, lets you use things like buttons, table, cards, list-groups and form styles if you need them. You can customize what's included with an `npm run bootstrap-light` command.

- [Font Awesome](https://fontawesome.com/?from=io)
- [Lightweight Bootstrap](https://getbootstrap.com)

If you want to control what gets included in the `bootstrap-light.css` file, you can edit the `src/bootstrap-light/scss/bootstrap.scss` file.

## Pre-installed plugins

There are lots of great [reveal.js plugins](https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware) and I added the awesome [menu plugin](https://github.com/denehyg/reveal.js-menu), so that you can hit the `m` key and get a list of your presentations.
