---
layout: layouts/post-sidebar.njk
title: Site
summary: A markdown first slide framework based on the awesome reveal.js, with multiple presentations, custom layouts and a whole lot more."
sidebar: seven
eleventyNavigation:
  key: site
  title: 'Site'
  parent: seven
  order: 4
tags:
  - project
  - rayveal
---

## Site

The main 11.ty site files are all in the `_site` folder.

The `_site` folder is pretty much like your website root folder. These files will convert to pages for the most part. It's useful to think of it as having the structure your site folder will have (notice there are index, css, image files like on your site), but don't be fooled, most of the files in this folder need to be processed.

The `_templates` folder has a series of templates used to build your site, no content here. Most of these are self explanatory and you'll see these being called in your pages. There is a `_layouts` folder that has the main layouts. You should probably look at the 11.ty documentation to learn how these work. Of course, I've added the `_templates` folder in here because it helps with the reloading of elements during development.

There is a special getTagsList.js folder which sets up your tags, It's used by the main configuration file called `.eleventy.js`. I didn't know where else to put it so it seemed like a good idea to me.

## `_data` folder

This has the `metadata.json` file, which includes variables that the site uses to build itself. Things like name, bio, the title of the site. For example, you can access the title of the site using `{{metadata.title}}` in your template.

There is also a `myProject.js` file. The purpose of this file is to expose the value of the environment variable's setting (development or production) so you can use it in templates like this:

```html
{% if myProject.environment == "development" %}
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
{% else %}
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>
{% endif %}
```

I use this to load the development version of vue.js during development and the smaller distribution version when building the project.
