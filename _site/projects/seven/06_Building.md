---
layout: layouts/post-sidebar.njk
title: Building
sidebar: seven
summary: 
eleventyNavigation:
  key: building
  title: 'Building'
  parent: seven
  order: 6
tags:
  - project
  - rayveal
---

## Building

The main configuration file is called `.eleventy.js` and is in the root folder. The important bits are the special collections based on existing folders.

```js
// only content in the `posts/` directory
eleventyConfig.addCollection('courses', function(collection) {
  return collection.getFilteredByGlob('./_site/courses/*.md').reverse()
})

eleventyConfig.addCollection('searchable', function(collection) {
  return collection.getFilteredByGlob(['./_site/courses/*.md', './_site/posts/*.md']).reverse()
})
```

These commands set up collections, which are used to build the site. The first example corresponds to folders in the `_site` folder that are the main sections of the site. The commands here will look for a certain folder in the `_sites` folder and build a collection out of everything in there.

The last one adds folders to a new collection which our `Vue.js` search component uses. If you add a new collection, make sure you add it here. Check the 11.ty documentation to learn how to use the `getFilteredByGlob` command.

```
  eleventyConfig.addPassthroughCopy("./_site/images");
```

This code is used to copy whatever is in these folders, if you happen to move the locations of images, then update this.

I hate messy root folders, so I've reconfigured where eleventy places files.

```js
dir: {
  input: "_site",
  includes: "_templates",
  data: "_data",
  output: "dist"
}
```

If you move stuff around, remember to update these. Also, the build processes refer to some of these locations, so if you move things, remember to update these.

```js
    "start": "npm-run-all --parallel dev:*",
    "dev:del": "rimraf dist",
    "dev:eleventy": "ELEVENTY_ENV=development eleventy --serve --quiet",
    "dev:webpack": "webpack --config webpack.dev.js",

    "build": "run-s prod:*",
    "now-build": "run-s prod:*",
    "prod:del": "rimraf build",
    "prod:webpack": "webpack -p --config webpack.prod.js",
    "prod:serve": "ELEVENTY_ENV=production eleventy --output=./build"
```
