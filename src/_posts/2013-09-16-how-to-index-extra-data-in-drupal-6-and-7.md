---
layout: post
title: How to index extra data in Drupal 6 and 7
created: 1379363567
categories: Drupal
tags: ['Drupal', 'index', 'search engine', 'update index']
language: en
permalink: development/how-index-extra-data-drupal-6-and-7/
translation: es/desarrollo/como-indexar-informacion-extra-drupal-6-y-7/
---
It is very easy to add words to be indexed with a node or entity in Drupal in order for the node to also be found when those words are used for search or even to alter the importance of some words.

<p>Before dropping lines of code I think is important to understand a little bit of how this works, which lead us to talk about search engines.
Search engines has two big parts:</p>
<ol>
<li><strong>The indexer:</strong> this is probably the most important part of it and where most magical things occurs (and by magical I mean mathematical).</li>
<li><strong>The search engine:</strong> this is what happens when do the actual search and if this parts works well is because the hard work was already took care in the indexer, plus a good architecture to store the data for fast retrieval.</li>
</ol>
<br />
<p>In the case of core search functionality, <strong>Solr</strong>, <strong>Sphinx</strong> and most search engines when  used with <strong>Drupal</strong>, they don't actually store the data, they get the content so that the words can be analyzed.</p>
<p>After analyzing the data words are extracted and each word is considered with a score based on things like frequency (how many times appears in the text) and importance based on what HTML code wraps it.</p>
<p>For example, lets say you have the following:</p>
<ul>
 <li>A word two times in a paragraph</li>
 <li>A word between a strong tag</li>
 <li>A word between a heading 2 tag (H2) </li>
 <li>A word between a heading 1 (H1) tag</li>
</ul>
<p>In this case the scores are as following:</p>
<ul>
 <li>The word in the paragraph will just get 1 point per appearance so 2 points</li>
 <li>The strong wrapped word gets 3 points</li>
 <li>The H2 wrapped word gets 18</li>
 <li>The H1 wrapped word gets 21</li>
</ul>
<p>In this way when a search using some words it will show up first the nodes that contains those words with a high score.</p>
<br />
<p><i><u>Tip:</u> Remember to give importance to what you want to have importance (use strong, heading and other tags to define what is important in your content), this applies to search as well as for SEO.</i></p>
<p>That way the user that is making the search will probably get results that are relevant to what is looking for.</p>
<br />
<p>The complete list of the default indexing that happens on Drupal and it's scores is the following:</p>
<ul>
 <li><strong>H1:</strong> 25 points </li>
 <li><strong>H2:</strong> 18 points</li>
 <li><strong>H3:</strong> 15 points</li>
 <li><strong>H4:</strong> 12 points</li>
 <li><strong>H5:</strong> 9 points</li>
 <li><strong>H6:</strong> 6 points</li>
 <li><strong>U, B, I, EM</strong> and <strong>STRONG:</strong> 3 points</li>
 <li><strong>A:</strong> 10 points</li>
</ul>
<p>So whatever words are wrapped by those tags they will accumulate those scores and it will have more score as many times as it appears or by using combination of wrappers.</p>
<br />
<p>Now that we have a glimpse of how it works, here is how to manipulate it.</p>
<br />
<p>Lets say you want to add a set of keywords or that you want to add the author full name to the list of words in the index and also assign a high score to them.</p>
<br />
<p>This is simple and this happens in the indexing time, not in search time (at search time all scores are already there since the indexing time).</p>
<p>During the indexing process in Drupal, it does 2 things (amount many others):</p>
<ol>
  <li>Calls the view node operation in the node to retrieve what usually gets rendered in the page and uses that HTML for indexing</li>
  <li>Calls the "update index" operation in the hook_nodeapi (Drupal 6) or hook_node_update_index (Drupal 7) to append the result to the HTML that will be indexed.</li>
</ol>
<br />
<p>So, you have 2 places where to manipulate this, the first one in the view node you can say what and how it should that text be, it will be indexed, but also will be outputted that same way to the user.</p>
<p>But if you want to add index information without adding content to be displayed you can use the update index.</p>
<p>Here is an example:</p>

{% highlight php %}
<?php
// Drupal 6
function mymodule_nodeapi(&$node, $op, $a3 = NULL, $a4 = NULL) {
  if ($op == "update index") {
    $author_id = $node->uid;
    // retrieve author full name from profile somehow and set into $author_full_name
    return "<h2>" . $author_full_name . "</h2>";
  }
}
?>
{% endhighlight %}
<br />
{% highlight php %}
<?php
// Drupal 7
function mymodule_node_update_index($node) {
  $author_id = $node->uid;
  // retrieve author full name from profile somehow and set into $author_full_name
  return "<h2>" . $author_full_name . "</h2>";
}
?>
{% endhighlight %}
<br />
<p>With this code the indexer will consider the author's full name into the words with relevance for that node, making it show when someones enter the author's name or last name (or better if both) in the search.</p>
<br />
<p>With very few lines of code you are able to add more words to the index of the nodes.</p>
