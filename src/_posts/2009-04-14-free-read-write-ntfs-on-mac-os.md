---
layout: post
title: Free Read/Write NTFS on Mac OS
created: 1239730245
categories: Personal
tags: ['mac', 'mac os', 'ntfs', 'read', 'write', 'macfuse', 'free']
language: en
permalink: 2009/04/14/free-readwrite-ntfs-mac-os-14
---
Since I'm running Mac OS X on my HP laptop, I was running into the problem of how to read/write to my Windows NTFS partitions.

I knew there are some paid products and I start to look for them, then I realize that there is a free and good option to achieve this.   
_Amit Singh_, a developer from Google created a __Mac OS__ version of [FUSE](http://fuse.sourceforge.net/) _(File System in User Space)_.   
[MacFuse](http://code.google.com/p/macfuse/) is an open source project that enables Mac OS X to mount ssh, ntfs and so on.   
__MacFuse__ by default is only able to read __NTFS__, but there is another project that uses MacFuse to write to this file system, this project is [NTFS-3G](http://www.ntfs-3g.org/).   
__NTFS-3G__ will also install __MacFuse__, so all you need to do is install __NTFS-3G__ and you will be able to read and write to __NTFS__ disk and partitions from your __Mac OS__.

__Updated:__ MacFuse is no longer being developed and is not supported in the last versions of MacOS, instead of using MacFuse you can now use it's successor [Fuse for OS X](http://osxfuse.github.com/) which is based on the code from MacFuse but is supported and it works with the last versions of OS X like Lion.

