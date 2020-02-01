---
layout: layouts/post.njk
title: "Principles of online graphic formats"
summary: "If your goal is to create visualizations for online consumption, it's good to understand the fundamentals of how graphic formats work for online delivery. In this article, I'll talk about the different bitmap/raster graphics and some of the main considerations for online delivery."
hero: /images/posts/graphics.png
thumb: /images/posts/graphics_tn.png
tags:
  - web design
  - web development
---

# Understanding Bitmap Graphic Formats

There are many types of graphic formats, but for creating visualizations, some are better than others. Let's take a look at traditional online formats and the advantages some have over others for visualizations.

## Bitmaps

There are two ways of expressing graphics on devices, as either bitmaps or vectors. A bitmap, which is also known as a raster graphic is a grid of pixels (or a map of the computer bits used to describe the image, hence the term bitmap). Each grid has three dimensions: width, height and depth. The width and height are pretty obvious, but the depth needs some explaining.

![An image in photoshop with zoomed in pixels](http://i.imgur.com/bQw8zuG.png)

> If you zoom into any image on your monitor, eventually you'll notice that it is built out of a grid of pixels. Even colors that appear to be the same are actually slight variations of the same color.

The depth in a bitmap refers to the amount of information required to describe each pixel, which determines the number of colors that each pixel can have. Practically, this means how many bits we use to describe the color in each pixel. A bit is the single unit of information that a computer can store and it is stored as either a 1 or a 0. Practically, to represent black you can use 0, which means the pixel on the screen is on and a 1 would mean that the pixel is off and therefore white.

![BW Image](http://i.imgur.com/xgiVLiv.png)

> In a black and white image like this, the pixels can be stored as single bits (1's or 0's) of data.

The more bits you put together, the more information you can store. If you only use 1-bit to store information about pixels, you can only represent two colors (black and white or off and on). If you add more bits, you can represent more colors. If, for example, you have two bits, you can represent 4 colors (2 to the 2nd power), with 8-bits, you can represent 256 colors (2 to the 8th power) and so on and so forth.

| Size    | Name                         | Colors                      |
| ------- | ---------------------------- | --------------------------- |
| 1       | B/W                          | 2                           |
| 8 bits  | Indexed/Grayscale            | 256                         |
| 24-bits | True Color                   | Thousands                   |
| 32-bit  | True Color with Transparency | Thousands plus Transparency |

Because computers are built to emulate how humans see things, representing color means storing information for red, green and blue channels. That matches human beings' 3 types of color receptors. Traditionally, computers store this information in **channels**, so that we refer to the data as in the **red** channel, the **green** channel or the **blue** channel.

![Red Green and Blue Channels](http://i.imgur.com/dXDO1FR.png)

> Most images are stored as three 8-bit channels of information each mirroring the way humans see through 3 different red, green and blue color receptors.

In most formats, like JPEG, that information is stored with 8 bits (256 colors) and because you use three channels, you end up with 24-bits of information per pixel, which is known as **true color**. True color is called that because with 24 bits of information, you can store 16,777,216 different variations of colors, but humans can distinguish the difference between about 10 million colors.

Because we often need to add another layer to store information about transparency in an image an additional 8-bits are often added to the 24-bit to store that information as a separate channel so you often see image information stored as 32 bits.

Although 8-bits of information per channel is traditionally used, equipment like cameras can capture a lot more detail than can be stored in 8-bits. Sometimes that detail can be useful in order to improve and control the amount of visible detail in some images. Therefore some graphic formats allow you to store more than 8-bits per channel of data and 16-bits or even 32-bits per channel are sometimes used. Both of those are impractical for web use since the file sizes for those formats can become unwieldly.

## Managing Bitmap File Sizes

Of course, the total amount of pixels in an image can have a dramatic effect on the size of the image. Take, for example the following chart of common megapixel sizes you might find on photos from a digital camera.

| Dimensions    | Megapixels |
| ------------- | ---------- |
| 1,920 x 1,080 | 2.1MP      |
| 2,592 x 1944  | 5MP        |
| 3,264 x 2,448 | 8MP        |
| 3,648 x 2,736 | 10MP       |
| 4,288 x 3,216 | 14MP       |

The first item is what we call an HD image 2.1 megapixels. That ends up being 2,073,600 pixels and each one of those pixels can use at least 24 bits of color information.

2.1 megapixels would be considered a very low resolution for a digital camera. Modern cameras easily exceed that resolution with 20-30 Megapixels more than common today. Even phones commonly produced bigger images, but compare this with average monitor sizes visiting one of my websites and you can tell that even a very low resolution camera today can take an image that is much bigger than would be required for even the bigger screens.

| Screen Dimensions | % of traffic |
| ----------------- | ------------ |
| 1366x768          | 28.50%       |
| 1920x1080         | 19.38%       |
| 1440x900          | 8.30%        |
| 1600x900          | 6.52%        |
| 1280x1024         | 6.16%        |
| 1280x800          | 5.96%        |
| 1680x1050         | 5.08%        |
| 1920x1200         | 3.68%        |
| 2560x1440         | 2.52%        |
| 1024x768          | 2.32%        |

This means that when creating graphics for the web, designers and developers have to learn to control the size of the files and that can be done in an number of ways.

First, of course, is cropping the images so that they have fewer pixels. The second way is to down-sample the image. That means saving it at a lower resolution. You can easily do that with a program like Adobe Photoshop and you should for every image you use for web consumption.

![](http://i.imgur.com/kZzaVQe.png)

> The easiest way to reduce the size of an image for online consumption is to reduce the amount of pixels in the image. You can do that easily with Photoshop's save for web panel. For even the biggest monitors, your image should almost never be any bigger than about 2000 pixels wide.

You can also reduce the color depth of the image. If an image uses fewer bits to describe the color in every pixel, then the file will be smaller. The final way to reduce the file size is to compress the image. Compressing involves passing the image through different filters that reduce the amount of data needed to store the image.
