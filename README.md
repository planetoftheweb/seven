# Seven

This project is a template for building sites using the [Eleventy](https://www.11ty.io/) static site generator. You can see a demo of the site at [7ty.tech](https://7ty.tech). It features a Vue.js powered simple search based on what's in `_site/posts` and `_site/courses` as well as pagination, animations and much more.

## Quickstart

- `Clone` or `download` the repo
- Run `npm install` to install dependencies
- Run `npm start` to start the development server.
- Point your browser to `localhost:8080`
- Edit posts in the `_site/posts` or `_site/courses` folder.
- Run `npm run build` to build the project.

## Styles

All the files that require pre-processing are inside the `_templates/_process` folder.

The main sass doument is the `style.scss` document, which has a number of imports including fonts. This also imports bootstrap, but notice several unused bootstrap components have been commented out to make the file size smaller. Feel free to uncomment these if you're going to be using them in your layout.

`_custom.scss` lets you override sass variables so you can customize the way different components work. This new version of seven uses a dark mode color scheme by default, but it's fairly easy to update using this custom file.

All of the overrides for specific styles are in the `_overrides.scss` file, so look there to change the way specific classes work.

## Scripts

The `js` folder has a single script.js file. There are two parts, a jquery section that is designed to change the way Bootstrap's jquery components work and a vue.js instance that powers the search.

In this version, I'm using script tags to the CDNs for things like the Bootstrap Javascript, the fonts, etc. I wasn't changing any of the bootstrap or other library javascript so I think this will be much more performant since most people will have the CDNs pre-loaded in their browsers.

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

## Configuration

The main configuration file is called `.eleventy.js` and is in the root folder. The important bits are the special collections based on existing folders.

```js
// only content in the `posts/` directory
eleventyConfig.addCollection("courses", function(collection) {
  return collection.getFilteredByGlob("./_site/courses/*.md").reverse();
});

eleventyConfig.addCollection("searchable", function(collection) {
  return collection
    .getFilteredByGlob(["./_site/courses/*.md", "./_site/posts/*.md"])
    .reverse();
});
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

## Building

I have two main processes that can run. There is a shared configuration file called `webpack.common.js` and two other configuration for development or production environments.

```sh
npm start
```

This cleans up the dist or build folders, then runs eleventy and webpack. Webpack takes care of processing the sass and javascript.

```sh
npm run build
```

This cleans up/creates a new build folder, then runs the eleventy and webpack. Webpack takes care of processing the sass and javascript. The webpack processes are in `webpack.prod.js`.

There is an optional now-build process here as well that runs if you are using `zeit.co`

## Other Setup Files

- `now.json` - Configuration for now, if you use [zeit.co](https://zeit.co).

- `.nowignore` - Thing that `now` ignores

- `.babelrc` - configures how webpack processes javascript to make it more or less compatible with older browser versions.
