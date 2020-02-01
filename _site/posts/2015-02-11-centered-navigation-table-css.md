---
layout: layouts/post.njk
title: "Horizontally Centered Navigation Menu with CSS"
summary: "Getting a menu to center horizontally is surprisingly hard, especially when you're using CSS lists. In this tutorial, I'll show you how to change the display element to pretend you're centering a table, which is easy."
hero: /images/posts/horizontally.png
thumb: /images/posts/horizontally_tn.png
resources:
  - video: https://www.youtube.com/watch?v=RT64aSNXnzY
  - code: http://jsbin.com/popalu/12/edit?html,css,output
tags:
  - web design
  - css
---

<div class="embed-responsive embed-responsive-16by9">
<iframe class="embed-responsive-item" width="700" height="450" src="https://www.youtube.com/embed/RT64aSNXnzY" frameborder="0" allowfullscreen></iframe>
</div>

One of the first things you try to do when you learn CSS is to create a centered navigation menu, but it's not as straightforward as it should be. You'd think that there was some sort of center command and in the future, something like <a href="http://css-tricks.com/snippets/css/a-guide-to-flexbox/">flexbox</a> will make it a lot easier. But even flexbox is no magic bullet with poor browser support in older browsers and frankly, a somewhat confusing syntax.

My current approach is to do something that ends up looking like this.

<a class="jsbin-embed" href="http://jsbin.com/popalu/11/embed?output">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

## The Trick

Since you can just read the code above or watch the video, I'll give you the highlights so you can catch the critical part.

```html
<nav class="sitemenu">
  <div class="navwrapper">
    <ul>
      <li><a href="#"> MySite</a></li>
      <li><a href="#"> Home</a></li>
      <li><a href="#">about us</a></li>
      <li><a href="#"> contact us</a></li>
    </ul>
  </div>
</nav>
```

I've simplified it a bit here for clarity. The key extra item here is the addition of a wrapper div with a class navwrapper. In order to get this to work you'll need this extra piece of HTML.

```css
.sitemenu {
  width: 100%;
  background: #a2cea5;
  font-family: "Droid Sans", serif;
  border-top: 8px solid #126758;
}
```

##Set the width of main container
The main thing here is the `width: 100%;` on the nav with the sitemenu class. You should have a container here that makes the width of the navigation container go full width. If you examine the code (by clicking on the HTML tab in the code window).

## Enter the table style

next, you need to have another container inside the first one that sets its display to show up as if it were a table.

```css
.sitemenu > .navwrapper {
  display: table;
  margin: 0 auto;
}
```

The code that actually centers the table is the `margin: 0 auto;` line. This item will be the width of the menus, regardless of their size. Normally to center an element, you have to know its width, but setting the display to table here bypasses that.

Honestly, the rest is just window dressing and pretty easy to follow from the code, so <a href="http://jsbin.com/popalu/9/">take a look at the jsbin</a> to learn more.
