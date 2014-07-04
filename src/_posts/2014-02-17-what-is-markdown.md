---
layout: post
title: What is Markdown?
categories: Jekyll
tags: ['jekyll', 'markdown']
language: en
translation: es/2014/02/11/que-es-markdown/
thumbnail: http://www.profesional.co.cr/images/markdown.png
series: [
  ['1. Why use Jekyll in my blog?', '/jekyll/2014/02/03/why-use-jekyll-in-my-blog/'],
  ['2. How to work with Jekyll?', '/jekyll/2014/02/06/how-to-work-with-jekyll/'],
  ['3. Posts and Drafts in Jekyll', '/jekyll/2014/02/12/posts-and-drafts-jekyll/']
]
---
__Markdown__ is a light markup language, it is a simple way to write
content and give style to it, and it is one of the ways to write content
in Jekyll.
{{ '/images/markdown.png' | img_tag: 'article-main-image' }}

__Markdown__ is simple to write and read, is a format that is easy to
convert to other formats like HTML, PDF, etc.  
The simplicity of __Markdown__ restricts that the content style could
get complicated, allowing for a simple style.

_Note:_ In Jekyll content files requires a YAML header and can contain
_HTML_ tags and _liquid_ tags.

## Text formatting in Markdown
In __Markdown__ you can format the text using the following features:

### Text with Emphasis
It will add enphasis to the text when enclosing between asterisc "\*" or
underlined "\_".
{% highlight text %}
*emphasis*, or _emphasis_ (normally would be output as italic)
**strong enphasis**, or __strong emphasis__ (normally would be output as strong)
{% endhighlight %}

### Titles or headlines
The headlines are defined by preceding the text with a hash "#", in a
way that the least number of hashes the higher the priority.  
{% highlight text %}
# First level
## Second level
### Third level
...
###### Sixth level
{% endhighlight %}

But besides the first 2 levels can be defined with a line of "equal
sign" `=` characters or "substraction sign" `-`.
{% highlight text %}
First level
============

Second Level
-------------
{% endhighlight %}

### Lists
The lists are defined by an asterisc "\*" in the begning of each line or a
minus sign "-" and a space for non numbered lists (bullets) or a number with
a dot and a space for numbered lists.
{% highlight text %}
* Red
* Yellow
* Green
* Blue

1. First element
2. Second element
3. Third element
{% endhighlight %}

### Code
When you need to define code in the text you use the "\`" character for
code in the same line or 3 consecutive characters for multiple lines.
{% highlight text %}
This code `hello` is on the same line.

```
Code in several lines
  that respects tabs
and spaces
```
{% endhighlight %}

In __Jekyll__ you can also use pygments to do syntax highlight.

{% highlight text %}
{% raw %}
{% highlight sql %}
SELECT * FROM TABLE
{% endhighlight %}
{% endraw %}
{% endhighlight %}

### Quotes
The quoted text is preceded with the greater than ">" sign before each
line.

{% highlight text %}
> This is a quoted line that will be converted to "blockquote
{% endhighlight %}

### Links
The links are defined by enclosing the text in square brackets next to
the link URL enclosed in parenthesis and optionally the link title
between quotes next to the URL.

{% highlight text %}
[This is a link](http://www.thesite.com "Title goes here")
{% endhighlight %}

### Images
The images are define similar to the links, but preceded with an
exclamation sign "!".

{% highlight text %}
![Alternate text here](http://www.thesite.com/myimage.png "Title of the image here")
{% endhighlight %}

This way we get a simple, clean and styled code.
