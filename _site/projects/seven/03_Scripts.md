---
layout: layouts/post-sidebar.njk
title: Scripts
sidebar: seven
summary: 
eleventyNavigation:
  key: scripts
  title: 'Scripts'
  parent: seven
  order: 3
tags:
  - project
  - rayveal
---

## Scripts

The `js` folder has a single script.js file. There are two parts, a jquery section that is designed to change the way Bootstrap's jquery components work and a vue.js instance that powers the search.

In this version, I'm using script tags to the CDNs for things like the Bootstrap Javascript, the fonts, etc. I wasn't changing any of the bootstrap or other library javascript so I think this will be much more performant since most people will have the CDNs pre-loaded in their browsers.
