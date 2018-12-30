---
layout: post
category: blog
title: Front End Developer/Javascript Technologies to learn and explore in 2016
summary: 2015 is officially over, and most of us are back at work. If you're a front end developer, it's time to start thinking about what you could be focusing on in the new year. Here's a look at the technologies that I'm really excited about and plan to spend some time on in the coming year.
hero: /images/articles/2016predictions.jpg
thumb: /images/articles/2016predictions_tn.jpg
links:
  - linkedin: https://www.linkedin.com/pulse/front-end-developerjavascript-technologies-learn-2016-ray-villalobos
tags:
  - web design
  - web development
---

# Flexbox

<iframe width='560' height='315' src='https://www.lynda.com/player/embed/423285?fs=3&w=560&h=315&ps=paused&utm_medium=referral&utm_source=embed+video&utm_campaign=ldc-website&utm_content=vid-423285' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true' frameborder='0'></iframe>

If you haven't used Flexbox yet, you should plan on implementing it into a project this coming year. Flexbox is a much simpler way to handle layout with CSS. As long as you're willing to [ignore IE9](http://caniuse.com/#search=flexbox) (currently less than 1% of browsers), then Flexbox is ready to use in your production sites. Because it requires different syntaxes in some situations, it means that you'll want to use a tool like [PostCSS](https://github.com/postcss/postcss) with the AutoPrefixer plugin to take care of some of the discrepancies. Laying out things with Flexbox is so much simpler than the old float model that once you learn it, you won't want to go back.

## Related Course

- [CSS: Flexbox First Look](http://www.lynda.com/CSS-tutorials/CSS-Flexbox-First-Look/116352-2.html)

- [Advanced Responsive Layouts with CSS Flexbox](http://www.lynda.com/CSS-tutorials/Advanced-Responsive-Layouts-CSS-Flexbox/383780-2.html)

---

## PostCSS

[![PostCSS Sample Site](http://i.imgur.com/JaII8xb.jpg)](https://github.com/postcss/postcss)
Because you'll want to work with Flexbox in 2016, you're going to want to learn about it's parent ...PostCSS. It's a tool for converting CSS and it's more than just a way to take care of Flexbox. It's also an engine that allows you to use a variety of plugins, including a Sass-like language called [PreCSS](https://github.com/jonathantneal/precss), A code minifier called [CSSNano](http://cssnano.co/) or even a plugin called [cssNext](http://cssnext.io/) that lets you use next generation CSS features in today's browsers. I have a couple of courses on PostCSS coming out on Lynda.com real soon. Bookmark my [list of courses](http://www.lynda.com/Ray-Villalobos/832401-1.html) and take a look at this [Demo site](http://iviewsource.com/exercises/postcsslayouts) or the [course Github project](https://github.com/planetoftheweb/postcsslayouts) for more information.

---

## AngularJS 2

[![AngularJS2](http://i.imgur.com/zVJAv3y.png)](https://angular.io/)
This year is going to be a second breakout year for Angular JS with a new version that uses a revamped structure. AngularJS popularized app development with features like two way data binding, routing, animations and super simple form validation. The next version of Angular changes the paradigm of how the applications should be built by using an architecture that is focused on components. It's definitely different than what you're used to with Angular 1. On the plus side, it simplifies the way you work with the framework, but is going to require some additional learning (See ES6/TypeScript below). I'll be preparing updates to all of my AngularJS courses, which include [Up and Running with AngularJS](http://www.lynda.com/AngularJS-tutorials/Up-Running-AngularJS/154414-2.html), [Adding Registration to your Application](http://www.lynda.com/AngularJS-tutorials/AngularJS-Adding-Registration-Your-Application/438887-2.html) and [Building a Data Driven App with AngularJS](http://www.lynda.com/AngularJS-tutorials/AngularJS-Building-Data-Driven-App/421230-2.html) soon. Building components is a lot like creating custom directives and working with traditional web components, but Angular simplifies the syntax and makes it easier to build and focuses on making sure your apps will be fast and ready for mobile performance.

---

## ES6/ES2015

<iframe width='560' height='315' src='https://www.lynda.com/player/embed/459181?fs=3&w=560&h=315&ps=paused&utm_medium=referral&utm_source=embed+video&utm_campaign=ldc-website&utm_content=vid-459181' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true' frameborder='0'></iframe>
2016 will also be the year that you'll need to check out the sixth version of JavaScript known officially as ES2015 and often as ES6. You'll need a transpiler like [Babel](https://babeljs.io/docs/learn-es2015/), plus a task runner like [GulpJS](http://gulpjs.com/) to take care of this, but this is the year that you'll see lots of examples popping up all over the web, especially when it comes to AngularJS 2. Although technically, the new version of Angular doesn't require you to program in ES6, the examples on that website as well as in others will default to ES6, so you'll want to spend some time learning some of the features including: Arrow Functions, Classes, Template Strings and [more](https://github.com/lukehoban/es6features). Some of these features are already creeping into other frameworks like AngularJS2, so it's important to learn them so that you'll be able to understand examples and be ready for the future of the web.

### Related Course

- [Up and Running with ECMAScript 6](http://www.lynda.com/JavaScript-tutorials/Up-Running-ECMAScript-6/424003-2.html)

---

## React

<iframe width='560' height='315' src='https://www.lynda.com/player/embed/433101?fs=3&w=560&h=315&ps=paused&utm_medium=referral&utm_source=embed+video&utm_campaign=ldc-website&utm_content=vid-433101' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true' frameborder='0'></iframe>
2015's breakout framework was definitely React, so if you've been holding out, 2016 is the time to give it a chance. React is not a replacement for Angular or other popular frameworks, but specifically focused on building user interface components. There's a lot of things to learn here including the JSX language, state and stateless functional components. This is also something I want to build a project based course on, so keep an eye out for more on that from me in the future.

### Related Course

- [Up and Running with React](http://www.lynda.com/React-js-tutorials/Up-Running-React-js/379264-2.html)
- [Building a Polling App with SocketIO and ReactJS](http://www.lynda.com/Web-Development-tutorials/Building-Polling-App-Socket-IO-React-js/387145-2.html)

---

## TypeScript

[![TypeScript](http://i.imgur.com/MAtIbz0.png)](http://www.typescriptlang.org/)
If you're going to be using AngularJS2, you are going to want to learn about TypeScript. TypeScript is a language that is a superset of JavaScript that can be compiled through a transpiler to JavaScript that will work with most browsers. AngularJS2 was built using this [language from Microsoft](http://www.typescriptlang.org/). As I mentioned, technically, you can use ES5 or ES6 or event Dart to program in AngularJS2, but at least as of now, the examples for that are tough to find and I forsee a 2016 in which most of the examples will be written with TypeScript in mind. One of my [favorite books on AngularJS](https://www.ng-book.com/2/) ng-book is already using TypeScript for examples.

---

## Ionic 2

[![Ionic 2](http://ionicframework.com/img/blog/ionic-angular-v2.jpg)](http://ionic.io/2)
Of all the Angular related projects I love, Ionic is by far my favorite. It makes it dead simple to develop mobile applications, so although this project is still in early development, I'm really looking forward to playing with the new version that's currently in Alpha. If you haven't had a chance to play with Ionic, make a bookmark to play with it next year. I'll be working on an update to my courses, so keep an eye out for that as well. Here's the current course:

### Related Course

- [Building a Mobile App with AngularJS 1 and Ionic](http://www.lynda.com/AngularJS-tutorials/Building-Mobile-App-AngularJS-1-Ionic/368920-2.html)
- [Github Project for current Ionic 1 course](https://github.com/planetoftheweb/angularMobile)

---

## BPG

[![BPG](http://i.imgur.com/51knJUl.jpg)](http://prntscr.com/9m7pa4)
The web needs a new graphic format, and I'm not talking about SVG. Yes, SVG or Scalable Vector Graphics is amazing for vectors and interactivity. But we need something that's going to do a better job with photo images and video. So although this is a bit of wishful thinking, I'm hoping that 2016 is the year that we see BPG considered as the successor to JPG. It has a high compression ratio like JPG with much better quality, it's not just an image format, but can handle videos and animation (goodbye animated GIFs) and it even supports an alpha channel like PNG. It's essentially a better version of JPG with everything you love about PNG plus animation...what's not to love. You can implement it on your sites today with the addition of a simple javascript file.

---

## Bootstrap 4

[![Bootstrap 4 Alpha](http://i.imgur.com/Vh0xR6T.png)](v4-alpha.getbootstrap.com)
There's a new version of Bootstrap that will be released later in the year, so that's another thing to put in the list of things to learn. The changes are going to affect you if you plan to update to the new version of the framework. The biggest change is the move from Less to a Sass core, but that's not really something to be too concerned about since both versions are similar. Changes that will be critical for migration are the addition of a new grid tier at 480px, which is inserted within the previous tiers, so that means that your layouts will need to take that into account. [Glyphicons](http://glyphicons.com/) are gone, as well as the [Affix plugin](http://getbootstrap.com/javascript/#affix), so if you've been using those, you'll need to find an alternative. Overall, there are fewer classes, so the framework will be easier to use. It drops IE8 support and now uses ems and rems as the official unit of measure. This one won't take you too long to pick up and don't worry, I'll have you covered with new versions of [Bootstrap Essential Training](http://www.lynda.com/Bootstrap-tutorials/Bootstrap-3-Essential-Training/417641-2.html), as well as new project based courses.

---

## Webpack

[![Webpack Module Manager](http://i.imgur.com/uBgWRG9.png)](https://webpack.github.io/)
This is another interesting technology I've been following. Webpack is a module bundler that makes it easier to manage your project dependencies. So it can take care of loading the necessary scripts that you'll need and combine them into a single file. It can work with other tools like Gulp.js or by itself to provide a simpler way to package not just scripts, but other resources as well. So, it's a bit like what you would do with Browserify, but it promises to be simpler. Unfortunately, I don't think the documentation for this project is as good as it should be, but it definitely looks like it's gaining momentum in terms of acceptance.

---

## Wordpress

<iframe width='560' height='315' src='https://www.lynda.com/player/embed/448100?fs=3&w=560&h=315&ps=paused&utm_medium=referral&utm_source=embed+video&utm_campaign=ldc-website&utm_content=vid-448100' mozallowfullscreen='true' webkitallowfullscreen='true' allowfullscreen='true' frameborder='0'></iframe>
The latest version of WordPress includes a [super interesting REST API](https://developer.wordpress.com/docs/api/). Wordpress is of course the world's most popular blogging platform and within its engine has a real powerful content management system. With the addition of a REST API, Wordpress can be the battle tested, rock solid content management system for any web application. This has the potential of bringing lots of interest in scripting back onto the platform. The future of WordPress is no longer PHP, but JavaScript. 2016 is a great time to rediscover what you can create with this platform.

### Related Courses

- [WordPress REST API: First Look](http://www.lynda.com/WordPress-tutorials/WordPress-REST-API-WP-API-First-Look/383783-2.html)

---

## Electron

[![Atom's Electron](http://i.imgur.com/saL1wgP.png)](http://electron.atom.io/)

This is in the 'time permitting' category for me, but it's one of those things I'm really interested in getting a chance to play with next year. Electron is the technology behind Atom, my favorite text editor and allows you to build cross-platform desktop apps using web technologies. Of course, like Atom, it's made by Github so there's a really good group of people behind it with an impressive list of projects [like the Slack Application, Visual Studio and others](http://electron.atom.io/#built-on-electron) that use the platform.
