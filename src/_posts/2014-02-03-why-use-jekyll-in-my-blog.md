---
layout: post
title: Why use Jekyll in my blog?
categories: Jekyll
tags: ['jekyll', 'blog', 'foundation']
language: en
translation: es/2014/01/27/por-que-usar-jekyll-en-mi-blog/
thumbnail: http://www.profesional.co.cr/images/jekyll-logo.png
series: [
  ['2. How to work with Jekyll?', '/jekyll/2014/02/06/how-to-work-with-jekyll/'],
  ['3. Posts and Drafts in Jekyll', '/jekyll/2014/02/12/posts-and-drafts-jekyll/'],
  ['4. What is Markdown?', '/jekyll/2014/02/17/what-is-markdown/']
]
---
[Jekyll](http://jekyllrb.com/) is an static site generator designed for blogs.
Why is Jekyll better that any dinamic CMS like [Drupal](http://drupal.org) or [Wordpress](http://wordpress.org)?

{{ '/images/jekyll-logo.png' | img_tag: 'article-main-image' }}

## Why Jekyll?
I really don't think there is one better than the other, I simply think they are different solution to the same problem and
depends on the need of each problem to define which one to use.
As a matter of fact, I would not recomend __Jekyll__ to anyone, Jekyll normally require some technical knowledge to use it and
lacks from a graphic interface.
Because of this, if the site's content is going to be managed by non technical users is probably not the option to use.

Being said that, possible the top advantage is that as generates static content it requires less resources during site execution 
and could even work completly on a CDN or cheap or free hosting options, which suppose a great advantage on performance and 
operative cost.

For any additional feature that the site requires that needs more dinamicity you could combine Jekyll with options like Node.js
or any application in any other language or platform.

Besides these, Jekyll is build on [Ruby](https://www.ruby-lang.org/) and can easily be extended through plugins.

Personally, the decision to migrate my blog to Jekyll is based on 3 reasons:
- __Performance of my blog__: I want my blog to be as fast as possible and nothing beats static files.
- __Experimentation and learning__: My blog is and always has being a sandbox where I experiment in the real world with 
technologies that I want to learn.
- __Low maintenance__: Once Jekyll is configured, the maintenance is literally minimum and I can focus on writing more often.

The complete code of my blog can be found in [GitHub](https://github.com/nestormata/my-static-blog).
