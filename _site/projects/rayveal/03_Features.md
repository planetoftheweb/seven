---
layout: layouts/post-sidebar.njk
title: Features
summary: A markdown first slide framework based on the awesome reveal.js, with multiple presentations, custom layouts and a whole lot more."
sidebar: rayveal
eleventyNavigation:
  key: features
  title: 'Features'
  parent: rayveal
  order: 2
---

# Features

Although RayVeal was designed to compatible with reveal.js, there are some important differences between the two.

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
<a class="tooltip" href="#">`tooltips`<span>For overlay explanations</span></a> on rollover
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
