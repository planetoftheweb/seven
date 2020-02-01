---
layout: layouts/post.njk
title: "A JSON Tutorial. Getting started with JSON using JavaScript and jQuery"
summary: "Javascript has grown from a way to add interactivity on your page, to a language that lets you perform tasks that once belonged to servers. JSON provides for an easy way to create and store data structures within JavaScript. It’s super popular and a great alternative to XML."
hero: /images/posts/json.png
thumb: /images/posts/jsonarticle_tn.png
tags:
  - careers
  - web development
  - data visualization
  - python
---

JSON stands for JavaScript Object Notation…it’s called that because storing data with JSON creates a JavaScript object. The JavaScript object can be easily parsed and manipulated with JavaScript.

Where XML is arguably easier to read, but notoriously difficult to parse (describe to a computer), JSON makes it a breeze to store data in a format that machines dig. Once you encode the data with JSON, you can read it into a variable which creates an object. Really cool stuff. Let’s take a look.

```html
<script>
  var data = { firstName: "Ray" };
  alert(data.firstName);
</script>
```

[See the JSON example on JSFiddle](http://jsfiddle.net/planetoftheweb/XcpGN/)

## Breaking JSON down

First, we create a variable to hold our data, and then we use JSON to define our object. Our sample object above is a simple as it gets. Just an item called firstName and it’s value Ray. When using strings with JSON, you should use them with quotations as above. If you use numbers, then you don’t have to use quotations.

This example will cause your browser to alert you with the variable name.
![JSON Example 01](/images/posts/json01-dialog-ray.png)

## Creating an object placeholder

That’s great. Let’s go ahead and make it a bit more realistic by inserting our JSON data into an object in the DOM.

```html
<div id="placeholder"></div>
<script>
  var data = { firstName: "Ray" };
  document.getElementById("placeholder").innerHTML = data.firstName;
</script>
```

[See the JSON example on JS Fiddle](http://jsfiddle.net/planetoftheweb/XcpGN/1/)

A couple of things about these changes…First, you’ll see that we added a bit of formatting to our JSON data. That’s just to make sure it’s easier to read for humans; you’ll often find JSON data formatted in this manner. The second thing is that the “joined” value (2012) didn’t need quotations because its a number. That’s still pretty simple data. Let’s try something more complex.

## Adding Arrays

What if we wanted to enter a bunch of people…then we have to add array notation. You create arrays in JSON using brackets []. Let’s see how our data would look for a couple of users.

```html
<div id="placeholder"></div>
<script>
  var data = {
    users: [
      {
        firstName: "Ray",
        lastName: "Villalobos",
        joined: 2012
      },
      {
        firstName: "John",
        lastName: "Jones",
        joined: 2010
      }
    ]
  };

  document.getElementById("placeholder").innerHTML =
    data.users[0].firstName +
    " " +
    data.users[0].lastName +
    " " +
    data.users[0].joined;
</script>
```

[See the JSON example on JS Fiddle](http://jsfiddle.net/planetoftheweb/XcpGN/3/)

This looks more complicated, but it’s not really too hard to understand. Every object in JSON is stored with curly braces {}, an array is stored with brackets[]. So in order to organize our data, we created an object called users, which held an array (using brackets). That object had a couple of other objects…each stored like before with curly braces {}. Each element in that object was separated by commas.

Notice that we obviously had to change our code for inserting the name. We had to include the new users object and then specify bracket notation to specify our first element in the array. Let’s add another level of complexity to our data structure just for kicks.

```html
<div id="placeholder"></div>
<script>
  var data = {
    users: [
      {
        firstName: "Ray",
        lastName: "Villalobos",
        joined: {
          month: "January",
          day: 12,
          year: 2012
        }
      },
      {
        firstName: "John",
        lastName: "Jones",
        joined: {
          month: "April",
          day: 28,
          year: 2010
        }
      }
    ]
  };

  document.getElementById("placeholder").innerHTML =
    data.users[0].firstName +
    " " +
    data.users[0].lastName +
    "--" +
    data.users[0].joined.month;
</script>
```

![JSON Example 02](/images/posts/json02-rayjanuary.png)

[See the JSON example on JS Fiddle](http://jsfiddle.net/planetoftheweb/XcpGN/4/)

Just one tiny level of complexity. We just added multiple fields to the joined object. We didn’t need an array here, just a series of objects, so we used the object notation. This is great and we’ve got some pretty good data, but now that we have multiple users, it’s time to go through each user and output them into a list.

## Traversing the user list

So, if we want to go through the user list, we could simply use JavaScript’s for statement to take care of that. We’ll put the items inside a list.

```html
<div id="placeholder"></div>
<script>
  var data = {
    users: [
      {
        firstName: "Ray",
        lastName: "Villalobos",
        joined: {
          month: "January",
          day: 12,
          year: 2012
        }
      },
      {
        firstName: "John",
        lastName: "Jones",
        joined: {
          month: "April",
          day: 28,
          year: 2010
        }
      }
    ]
  };

  var output = "<ul>";
  for (var i in data.users) {
    output +=
      "<li>" +
      data.users[i].firstName +
      " " +
      data.users[i].lastName +
      "--" +
      data.users[i].joined.month +
      "</li>";
  }
  output += "</ul>";

  document.getElementById("placeholder").innerHTML = output;
</script>
```

[See the JSON example on JS Fiddle](http://jsfiddle.net/planetoftheweb/XcpGN/5/)

So here, we use a for statement and created a variable called output to temporarily store the data. Once we go through all of the elements in the array, we use the output variable to populate the placeholder div. That works well, but as you can tell, our data structure is getting a little long.

## Reading JSON from an external file

It would be nice if we could store this on an external file and then just read everything into the data variable. To make things easier, I’m going to use jQuery, so we’ll have to load that library first and then call it’s getJSON function. Here’s what our entire page’s code looks like.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>JSON Sample</title>
  </head>
  <body>
    <div id="placeholder"></div>
    <script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <script>
      $.getJSON("data.json", function(data) {
        var output = "<ul>";
        for (var i in data.users) {
          output +=
            "<li>" +
            data.users[i].firstName +
            " " +
            data.users[i].lastName +
            "--" +
            data.users[i].joined.month +
            "</li>";
        }

        output += "</ul>";
        document.getElementById("placeholder").innerHTML = output;
      });
    </script>
  </body>
</html>
```

![JSON Example 03](/images/posts/json03-johnjones.png)

Pretty much the same code as before without the data file. We just wrap everything inside jQuery’s getJSON function, which does the hard job of reading the file. Assuming the file is in the same directory here’s what our new data.json file looks like.

```json
{
  "users": [
    {
      "firstName": "Ray",
      "lastName": "Villalobos",
      "joined": {
        "month": "January",
        "day": 12,
        "year": 2012
      }
    },
    {
      "firstName": "John",
      "lastName": "Jones",
      "joined": {
        "month": "April",
        "day": 28,
        "year": 2010
      }
    }
  ]
}
```

Pretty much as before. As you can see, JSON is really easy to read and once you get used to the curly braces and brackets, not too hard to encode.
