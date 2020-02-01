---
layout: layouts/post-sidebar.njk
title: 'Seven: Styles'
sidebar: seven
summary: 
eleventyNavigation:
  key: seven-styles
  title: 'Seven: Styles'
  parent: seven
  order: 2
tags:
  - project
  - rayveal
---

## Styles

All the files that require pre-processing are inside the `_templates/_process` folder.

The main sass document is the `style.scss` document, which has a number of imports including fonts. This also imports bootstrap, but notice several unused bootstrap components have been commented out to make the file size smaller. Feel free to uncomment these if you're going to be using them in your layout.

`_custom.scss` lets you override sass variables so you can customize the way different components work. This new version of seven uses a dark mode color scheme by default, but it's fairly easy to update using this custom file.

All of the overrides for specific styles are in the `_overrides.scss` file, so look there to change the way specific classes work.
