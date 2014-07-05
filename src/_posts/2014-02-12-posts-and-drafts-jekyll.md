---
layout: post
title: Posts and Drafts in Jekyll
categories: Jekyll
tags: ['jekyll', 'markdown']
language: en
translation: es/2014/02/03/posts-y-drafts-jekyll/
series: [
  ['1. Why use Jekyll in my blog?', '/jekyll/2014/02/03/why-use-jekyll-in-my-blog/'],
  ['2. How to work with Jekyll?', '/jekyll/2014/02/06/how-to-work-with-jekyll/'],
  ['4. What is Markdown?', '/jekyll/2014/02/17/what-is-markdown/']
]
---
In this third part I'll explain how to work with posts and drafts in
Jekyll.

{{ '/images/jekyll-logo.png' | img_tag: 'article-main-image' }}

## Front-matter
Any file that contains a YAML block in the begining of the file will be
processed by Jekyll in a special way.
This applies to posts and HTML, XML files or any other file.
An example of a __front-matter__ block is the following:

{% highlight yaml %}
---
layout: post
title: This is a cool post
---
{% endhighlight %}

What is between the 3 horizontal lines `---` is considered a YAML block.
This information will be used in Jekyll and will be available during the
file and the documents related to this one, besides the will have
__Liquid__ tags available.
If you want to use the __Liquid__ tags and data, but no need to set
anything in the YAML block you still can define an empty YAML block to
make Jekyll process the file.

## Posts and drafts
The posts are the content we put usually in the `_posts` directory and
are wrote in languages like Markdown or other options, but I'll explain
the Markdown only because it's simplicity and clean clode.

### Posts
Posts are named by standar in the following format:

{% highlight text %}
YEAR-MONTH-DAY-title.FORMAT
{% endhighlight %}

Where YEAR is a 4 digits number, MONTH and DAY are two digits numbers
and FORMAT is the extension in which is writted the content, for
example:

{% highlight text %}
2014-01-28-hello-world.md
2013-12-24-christmass-with-rudolph.textile
{% endhighlight %}

The posts must start with a __Front-matter__ YAML block.

### Drafts
Drafts are actually post files that reside on the `_drafts` directory
and they don't have a date because they haven't being published.
These files are ignored by default by Jekyll (you could still force
Jekyll to include them), this allows you to keep separated the published
documents and the drafts, do they don't get pushed to your production
site.
When you decide to publish them you just have to move them from
`_drafts` to `_posts` and assign them a publication date in the file
name.

## The post
An example of a post (or draft) is the following:
{% highlight yaml %}
---
title: Hello world
layout: post
---
In the first lines we can place the excerpt separated from the content
by 1 empty line (2 consecutive carry returns).

## A subtitle
And a lot more content after
{% endhighlight %}

In this example we define a title for the post and the layout to be
used, in this case is `_layouts/post.html`.
The first lines before the first 2 consecutive carry returns are
populated in the variable `excerpt`.

In the next series I'll explain about Markdown and how to compile Jekyll
to generate the site.
