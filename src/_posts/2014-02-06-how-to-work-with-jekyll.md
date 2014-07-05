---
layout: post
title: How to work with Jekyll?
categories: Jekyll
tags: ['jekyll', 'blog', 'foundation']
language: en
translation: es/2014/01/28/como-trabajar-con-jekyll/
thumbnail: http://www.profesional.co.cr/images/jekyll-logo.png
series: [
  ['1. Why use Jekyll in my blog?', '/jekyll/2014/02/03/why-use-jekyll-in-my-blog/'],
  ['3. Posts and Drafts in Jekyll', '/jekyll/2014/02/12/posts-and-drafts-jekyll/'],
  ['4. What is Markdown?', '/jekyll/2014/02/17/what-is-markdown/']
]
---
Now that we understand why Jekyll could be a good option I can explain
how I achieve it.

{{ '/images/jekyll-logo.png' | img_tag: 'article-main-image' }}

## Jekyll's installation and configuration
I will not repeat the installation as is pretty straigh forward and you
can find more information in the official site, for instructions you can
check the [guide](https://github.com/nestormata/my-static-blog/) and you
can check my site's complete code in [GitHub](https://github.com/nestormata/my-static-blog).

### Directory Structure
I prefer to separate the code from configuration and result so I moved
the configuration file __\_config.yml__ to the root directory and the
code source to __/src__ and the destination to __/build__, this way I
can have my code better organized.

For this to actually be considered by Jekyll I had to mofify the
__\_config.yml__ in the following way:

{% highlight yaml %}
source:       ./src
destination:  ./build
layouts:      ./_layouts
plugins:      ./src/_plugins
{% endhighlight %}

Now I ended up with the code structured as follows:

{% highlight text %}
/
|- _layout.yaml
|- /src
|  |- .htaccess
|  |- index.html
|  |- robots.txt
|  |- humans.txt
|  |- 404error.html
|  |- rss.xml
|  |- sitemap.xml
|  |- /_assets
|  |  |- /css
|  |  |- /js
|  |- /_data
|  |- /_drafts
|  |- /_posts
|  |- /_layouts
|  |- /_includes
|  |- /_components
|  |- /_locales
|  |- /_plugins
|  |- /images
|  |- /es
|  |  |- index.html
|  |  |- rss.xml
|  |  |- /_drafts
|  |  |- /_posts
|- /build
{% endhighlight %}
_Nota:_ Some of these files and directories will be explained later in the series.

### Benefits of this structure:
- The configuration remains in the root directory next to that I need
  and I don't want to be exported to the destination.
- All the code remains in a directory __/src__ and the generated files
  in a directory __/build__.
- Inside the directory of each additional language different than the
  default I have a directory for __posts__ and __drafts__ _(later I'll
explain how to work with multiple languages)_.
- The __JavaScript__ and __CSS__ files will be preprocessed for
  __SASS__, concated, minified and compressed, _(later I'll explain how
to achive this)_.
- The components are separated from the site, for example the
  [Foundation](http://foundation.zurb.com/) files.

_Soon the next part of this series for more details._
