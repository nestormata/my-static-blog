---
layout: post
title: Free Read/Write NTFS on Mac OS
created: 1239730245
categories: Personal
tags: ['mac', 'mac os', 'ntfs', 'read', 'write', 'macfuse', 'free']
language: en
permalink: 2009/04/14/free-readwrite-ntfs-mac-os-14
---
<p>Since I'm running Mac OS X on my HP laptop, I was running into the problem of how to read/write to my Windows NTFS partitions.</p>

<p>I knew there are some paid products and I start to look for them, then I realize that there is a free and good option to achieve this.</p>
<p>Amit Singh, a developer from Google created a Mac OS version of <a target="_blank" href="http://fuse.sourceforge.net/">FUSE&nbsp;</a>(File System in User Space).</p>
<p><a target="_blank" href="http://code.google.com/p/macfuse/">MacFuse</a> is an open source project that enables Mac OS X to mount ssh, ntfs and so on.</p>
<p>MacFuse by default is only able to read NTFS, but there is another project that uses MacFuse to write to this file system, this project is <a target="_blank" href="http://www.ntfs-3g.org/">NTFS-3G.</a></p>
<p>NTFS-3G will also install MacFuse, so all you need to do is install NTFS-3G and you will be able to read and write to NTFS disk and partitions from your Mac OS.</p>

<strong style="font-weight: bold; text-decoration: underline;">Updated:</strong> MacFuse is no longer being developed and is not supported in the last versions of MacOS, instead of using MacFuse you can now use it's successor <a target="_blank" href="http://osxfuse.github.com/">Fuse for OS X</a> which is based on the code from MacFuse but is supported and it works with the last versions of OS X like Lion.
