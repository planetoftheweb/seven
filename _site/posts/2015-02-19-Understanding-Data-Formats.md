---
layout: layouts/post.njk
title: "Understanding Data Formats used for Visualization Applications"
summary: "In order to work with data-visualization, it's important to understand the formats commonly used to generate visual data. In this article, I'll talk about different formats for storing data plus their advantages and disadvantages and give you some resources."
hero: /images/posts/dataformats.png
thumb: /images/posts/dataformats_tn.png
tags:
  - data visualization
---

# Common Data-Viz Formats

Data Visualization via computers means that you take some existing data and use a computer to process the information that you have gathered. In order to create visualizations, the data has to be converted (or parsed) into a format that is easy for computers to understand. There are many formats available, but some are better than others depending on what you're using to process. Let's take a look at some of our options.

## Microsoft Excel

![Microsoft Excel](http://i.imgur.com/qeKvuau.png)
The most common format that people will use to process and sometimes visualize data is Microsoft Excel. Developed by Microsoft for Macintosh computers in 1988. Microsoft Excel is one of the most popular office productivity applications used in offices throughout the world.

Each version of Excel by default uses a proprietary format that although ubiquitous, is not compatible with other software. However, the program is so popular that it has become a standard for delivering data in many places. Excel does allow you export in more common formats like CSV (comma separated Values), Tab Delimited Text, XML and even has options to save as web pages. However because of the complexity of the application and its use as a presentation tool, some of these exports produce files that can be complex and tough for computers to parse.

### Advantages

- Ubiquitous
- Powerful presentation
- Can perform some visualizations

### Disadvantages

- Proprietary format
- Complex

## CSV (and other text-based formats)

The most compatible format for sharing information in almost all cases is just a simple text file and just about any application that needs information will read some version of a text format, however structured data like the type you need to visualize often needs to contain information about rows and columns that is not easily expressed through a text file.

One of the oldest and most common formats for saving data is the CSV file. It predates personal computers and has been used since the 1960s in just about every computer language. CSV stands for Comma Separated Values and, as the name implies, lets you express data by separating it with commas.

```
Name,Address,City,Sales
"Burke, Carlos P.",287-2469 Felis Rd.,Höchst,$8012.98
"Fuller, Jane A.",6421 Nibh. St.,Juneau,$9386.38
"Cunningham, Meghan C.",Ap #944-5884 Tellus St.,Milwaukee,$9102.62
"Lewis, Abraham B.","3221 Tortor, Avenue",Meduno,$5486.26
"Henson, Conan C.","P.O. Box 598, 6850 Nec, Rd.",Alcalá de Henares,$7196.31
"Dodson, Camden Q.",Ap #460-7854 Sed Rd.,Hohenems,$2870.35
"Ayala, Colin C.",Ap #354-8456 Rutrum Rd.,Borgerhout,$7019.71
"Vaughn, Charles J.","P.O. Box 378, 232 Lobortis Avenue",Roccanova,$6536.85
"Hunter, Paki P.","P.O. Box 739, 2611 Pede. Rd.",Beaumont,$9606.43
"Swanson, Cheyenne X.",Ap #963-5065 Massa. Rd.,Kapelle-op-den-Bos,$3322.18
```

CSV is a very loose format and because of that, there is no official standard. Therefore, the implementations sometimes vary. One attempt at a standard has been [rfc4180](https://tools.ietf.org/html/rfc4180), although often the specifics of how numbers are read are left to the application reading the format.

CSV format is very easy to understand, each column on a table is separated by commas, any string data is written in single or double quotes, numeric values need no quotations. The first row of data is usually reserved for the column names. Also, although commas are traditionally used, because this is a text format, people often use other delimiters. Therefore, you'll find variations of this format as TSV (Tab Separated Values).

### Advantages

- Ubiquitous
- Compatible with all computer systems

### Disadvantages

- Data has to be simple tables
- Cannot understand complex relations
- Lack of Standard

### Resources

- [rfc4180 Specification](https://tools.ietf.org/html/rfc4180)
- [CSV Conversion Tools](http://www.convertcsv.com/)
- [CSV Data Generator](http://www.convertcsv.com/generate-test-data.htm)
- [XLS to CSV Conversion tool](http://www.zamzar.com/convert/xls-to-csv/)

## XML

XML stands for eXtensible Markup Language. A markup language defines a set of rules that you can apply inside a text file that are designed to communicate rich data. The format works by creating a series of tags that area inside less than (<) and greater than signs (>). Inside these tags you can add attributes that let you add additional information to the data.

```xml
<facility>
<Prop_ID>X092</Prop_ID>
<Name>Van Cortlandt Nature Center</Name>
<Location>246th Street and Broadway</Location>
<Phone>(718) 548-0912</Phone>
<Hours>
April 1 - Memorial Day and Labor Day to October 31: open to the public Saturday and Sunday 12:00 noon - 4:00 pm, and for registered and scheduled activities at all other times.
</Hours>
<Directions>
<p><span class="emphasislittle">By car:</span> Take the Major Deegan/I-87 to Van Cortlandt Park South exit. Take the off ramp to the extreme right to the stoplight. Continue through the stop light then stay right and continue to the stop sign next to the park. Follow the road to a yellow gate just north of the end of an elevated train. Enter the yellow gate and continue on the road to the black fence. Enter the yellow gate and continue on the road to the black fence. Make a left turn at the black fence and park in the small lot. The Nature Center is the building with the orange front door.</p> <p><span class="emphasislittle">Public transportation:</span> Take the 1 or 9 train to the 242nd Street stop. Walk north on Broadway. Enter the park at W.246th Street and follow the signs to the center.<br /> Take the Bx9 bus to the 242nd Street stop. Walk north on Broadway. Enter the park at W.246th Street and follow the signs to the center.</p>
</Directions>
<Accessible/>
</facility>
```

If you're familiar with HTML you'll note that it is very similar and is derived from XML. XML is often used to deliver data that is easily readable and displayed on websites. Unlike HTML, XML has a very rigid set of rules that make it much more structured and reliable than HTML, but also much more difficult to write.

### Basic Rules

You create beginning and ending markup elements as in

```xml
<name>Bob</name>
```

You can add attributes in any order inside the tags. Every attribute begins with a name followed by an equal sign and a value in quotations "". Therefore you can add a n**age** attribute using

```xml
<name age="36" >Bob</name>`.
```

You could also express this same information using this type of notation.

```xml
<person>
    <name>Bob</name>
    <age>36</age>
</person>
```

Which format you use is up to you because XML is structure agnostic. You can define your own tags and as long as you follow the syntax of the language, it doesn't matter what your parameters are called or if you use tags instead of parameters.

That's just a quick sample of what XML rules are like, for a more complete set of rules, take a look at the official [XML documentation](http://www.w3.org/TR/REC-xml/).

The rules for XML are fairly simple, but the implementation of parsing of this language can be very complex. Because the language uses lots of punctuation and is very verbose, it means that expressing simple data often takes a lot more room than is necessary. Also, because attributes can be written in no particular order, parsing or translating this language can be challenging.

XML's lack of pre-defined tags is one of its strengths. Several sub-formats which use XML have emerged like RSS, Atom, ML, XHTML and others.

### Advantages

- Popular Web Language
- Easy to read and understand
- Well supported online
- No pre-defined structure

### Disadvantages

- Extremely verbose
- Generates file larger than necessary

## JSON

![[JSON Online Editor](https://www.jsoneditoronline.org/)](http://i.imgur.com/l6HAmZh.png)
JSON stands for JavaScript Online Notation, but don't let its name deceive you, it is another text format for storing structured data which is very popular on the web because of its similarity to JavaScript Objects. JSON is very easy to parse and fairly easy for humans to read and write. It has minimal punctuation, so adding the syntax to the data doesn't significantly increase the size of the file. It is sometimes jokingly referred to the [Fat-Free alternative to XML](http://www.json.org/fatfree.html)

```json
{
  "distribution": [
    {
      "@type": "dcat:Distribution",
      "downloadURL": "http://www.ers.usda.gov/data-products/food-access-research-atlas/go-to-the-atlas.aspx",
      "mediaType": "text/html",
      "title": "Interactive map"
    },
    {
      "@type": "dcat:Distribution",
      "accessURL": "http://gis.ers.usda.gov/arcgis/rest/services/",
      "description": "See http://www.ers.usda.gov/developer/geospatial-apis.aspx for more information.",
      "format": "API",
      "mediaType": "application/json",
      "title": "GIS API Services"
    },
    {
      "@type": "dcat:Distribution",
      "downloadURL": "http://www.ers.usda.gov/datafiles/Food_Access_Research_Atlas/Download_the_Data/Current_Version/DataDownload.xlsx",
      "mediaType": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "title": "Data file"
    }
  ]
}
```

Although JSON has its roots in the JavaScript language, it is language independent and has extensive support in most other programming languages. JSON allows you to easily express objects, arrays and values, so although the rules are simple, the variety of data that can be expressed is comprehensive.

One of the issues with JSON is that although it is fairly easy to read and write, humans can easily make mistakes because larger data sets will have a lot of punctuation. In JSON, the keys must be surrounded by quotations, followed by a colon (:) and then a value which can a string (in quotes), a number (without quotes), a boolean (without quotes), an array (using brackets []) or an object (using curly brackets {}).

### Advantages

- Broad support in programming languages
- Extremely web friendly
- Easy to read and Write

### Disadvantages

- Easy to make mistakes
- Punctuation can be overwhelming

## YAML

- ![[This YAML parser is a great way to work with YAML and explore it's syntax](https://nodeca.github.io/js-yaml/)](http://i.imgur.com/jhsDlkX.png)

JSON's overwhelming amount of punctuation sometimes makes it difficult for humans to type and some different sub-formats like CSON and YAML were developed to address. YAML is one of the more popular approaches to this and it's much easier to type than JSON. YAML is a recursive acronym that means "YAML ain't Markup Language"

You can express simple name and value pairs like this:

```yaml
Company: Elit Aliquam Institute
Revenue: $3,358.55
Country: Philippines
```

Here's a more complex set of array data:

```yaml
Companies:
  - name: Libero Dui Corporation
    revenue: $3,075.41
    country: Turkmenistan
  - name: Elit Aliquam Institute
    revenue: $3,358.55
    country: Philippines
  - name: Risus At Consulting
    revenue: $7,987.82
    country: Kuwait
  - name: Cras Eu Ltd
    revenue: $2,149.92
    country: Australia
  - name: Nibh Phasellus Nulla Consulting
    revenue: $4,902.60
    country: Norfolk Island
  - name: Lobortis Quam A LLP
    revenue: $2,616.62
    country: Taiwan
```

Notice how beautiful that is to read. If you were to give this to someone to type in a text editor, it would be fairly easy for even someone without YAML experience to stick to the rules. Unlike with JSON, strings do not have to be quoted. Also, notice that although the whitespace is relevant, in YAML, we're adding tabs to make things align and make them more readable. Here's what that data would look like expressed as JSON.

```json
{
  "Companies": [
    {
      "name": "Libero Dui Corporation",
      "revenue": "$3,075.41",
      "country": "Turkmenistan"
    },
    {
      "name": "Elit Aliquam Institute",
      "revenue": "$3,358.55",
      "country": "Philippines"
    },
    {
      "name": "Risus At Consulting",
      "revenue": "$7,987.82",
      "country": "Kuwait"
    },
    {
      "name": "Cras Eu Ltd",
      "revenue": "$2,149.92",
      "country": "Australia"
    },
    {
      "name": "Nibh Phasellus Nulla Consulting",
      "revenue": "$4,902.60",
      "country": "Norfolk Island"
    },
    {
      "name": "Lobortis Quam A LLP",
      "revenue": "$2,616.62",
      "country": "Taiwan"
    }
  ]
}
```

YAML is a great format for typing data, but it is not readily understood or parsed by most programming languages. It usually has to be converted into JSON, and different libraries exist to do this.

### Advantages

- Easiest format to read
- Very concise

### Disadvantages

- Tough to learn at first
- Poor support
- Needs to be converted
