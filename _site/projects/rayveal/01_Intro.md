---
layout: layouts/post-sidebar.njk
title: RayVeal
summary: A markdown first slide framework based on the awesome reveal.js, with multiple presentations, custom layouts and a whole lot more."
tags:
  - project
  - rayveal
---

# RayVeal

Rayveal is an opinionated version of the awesome [reveal.js](https://github.com/hakimel/reveal.js/). The main difference an approach to creating slides that is [markdown centered](https://github.github.com/gfm/) with the ability to create multiple presentations in the same project.

This, plus the pre-installation of convenient plugins and libraries make it easier to create your presentations quickly using markdown. That helps me focus on writing and not on laying out presentations.

You can see the demo at [rayveal.tech](http://rayveal.tech).

## Instructions

Instead of creating HTML files, you simply create one or more `*.md` files in the `build/slides` folder. A server is required in order to use RayVeal properly...since the markdown files have to be loaded dynamicaly, so upload the contents of the `build` folder to a server.

## Installing Locally with NPM (optional)

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

## Persistent toolbar

One of the problems I often have when doing presentation is making sure that people have the URL to the presentation as well as contact and other important information. So, I created a persistent toolbar at the bottom of every slide.

It auto-hides after 5 seconds, but you can bring it back by using the `t` key. You can find it in the index.html file and put your own HTML there.

## Fragments by default

Another way in which RayVeal differs from reveal is in the way it handles fragments. I don't like to show a lot of text in my presentations, but write short bullet points that I want people to consume one at a time. Therefore, fragments are on by default, just write your normal bullet points and they will show one at a time.

## contenteditable code

Another way that Rayveal differs is that when you write code blocks by either using the <code>&grave;</code> character or <code>&grave;&grave;&grave;</code> codeblocks, Rayveal makes those automatically have the `contenteditable` attribute. I demo a lot of code, so it's nice to be able to edit my codeblocks or even anything with the code tag.

## Code options

I created some additional styles that are not in bootstrap.

### Colored code blocks

You can use `code` blocks with different colors

```html
<code class="code-primary">primary</code>
<code class="code-success">success</code>
<code class="code-info">info</code>
<code class="code-warning">warning</code>
<code class="code-danger">danger</code>
```

### Tooltips

I'm not importing the Bootstrap JavaScript or the Bootstrap Grid, so I created my own way of doing a simple tooltip using CSS.

```html
<a class="tooltip" href="#">`tooltips`<span>For overlay explanations</span></a>
on rollover
```

### Code Sample Lists

There's also a style that I need for some of my own coursework, which lets you create lists with code samples that change color in each line. Here's the code:

```markdown
- `sample`
  - NUM: `one` `two` `three`
  - NUM: `four` `five` `six`
  - NUM: `seven` `eight` `nine`
  - NUM: `ten` `eleven` `twelve`
  - NUM:<br>
    `thirteen` `fourteen` `fifteen`
```

But it's better if you look at these in the [demo](https://rayveal.tech)

## Slide Templates

Reveal.js lets you add style tags, classes and data attributes in comments, so I used these to create different slide templates. There are three right now.

### Title Slide

`<!-- .slide: data-state="title" -->`

This is the title slide that appears at the beginning of the [demo](https://rayveal.tech). Blue background, large fonts.

### Page with Icons

`<!-- .slide: data-state="hasicon" -->`

A page that has a title with a Font Awesome icon in it. The spacing has to be different.

### Circles

`<!-- .slide: data-state="circles" -->`

In this page, each bullet point becomes a circle. Just a different way to help the user focus.

## More

Take a look at the [demo](https://rayveal.tech) for more examples, I'm really excited about some of the stuff you can do with Bootstrap's card and list-group components. I'd love to add more components and other layouts in the future.
