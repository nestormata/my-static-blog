---
layout: post
title: Multiple Skype accounts on Mac OS or Windows at the same time
created: 1337114807
categories: Personal
tags: ['tip', 'skype', 'multiple accounts', 'Windows', 'mac os' ]
language: en
permalink: technology/multiple-skype-accounts-mac-os-or-windows-same-time
---
I use a personal Skype account and another Skype account for the company I work for, and then I have the problem of how can I have both accounts opened.

<h2>Multiple Skype Instances on Windows XP/Vista</h2>
In Windows this is easy, you just need to call the Skype.exe with the parameter /secondary, which you can do by creating a new shortcut on the Programs Menu
<ol>
<li>Locate the Skype program (C:/Program Files(x86)/Skype/Phone/Skype.exe or C:/Program Files(x86)/Skype/Phone/Skype.exe or something similar)</li>
<li>Right click on the Skype.exe program</li>
<li>Select "Create shortcut"</li>
<li>Then move this shortcut wherever you want (like the Desktop or the Start Menu)</li>
<li>Right click on the shortcut, select "Properties"</li>
<li>On the field "Target" add at the end /secondary like this for example ("C:/Program Files(x86)/Skype/Phone/Skype.exe" /secondary)</li>
<li>Hit OK and you are done, you can open the primary and the secondary instances of Skype, having two accounts opened at the same time</li>
</ol>

<h2>Multiple Skype instances on Mac OS</h2>
On Mac is a little more complicate because the Mac executable doesn't supports the secondary option.
The best option I have found is using a different account to start the program and I've solved a couple little problems that comes with it.
<ul>
<li>Create a new user (one time only): 
  <ol>
    <li>Go to System Preferences -> System -> Users & Groups</li>
    <li>Unlock the window if required</li>
    <li>Hit the + sign</li>
    <li>Choose standard type and fill the form, you can use the same password that you already use <em>(remember the account name, you will use it on the next steps)</em></li>
  </ol>
</li>
<li>Start Skype using the other account (every time that you want to use your secondary instance)
  <ul>
    <li>Open the terminal (Open spotlight and type terminal)</li>
    <li>Change user, to do that type the following on the terminal replace <em>otheruser</em> with the user name of the account you created</li>
  </ul>
</li>
</ul>
{% highlight bash %}
su otheruser
{% endhighlight %}
It will ask you for the other user password
<ul>
<li>
  <ul>
    <li>Open Skype, to do it, enter the following on the terminal:</li>
  </ul>
</li>
</ul>
{% highlight bash %}
/Applications/Skype.app/Contents/MacOS/Skype
{% endhighlight %}
Note: this is a little secret, you do can close the terminal, it will warn you that the program will be closed, but it actually will not, you can go ahead and close the terminal.
<ul>
<li>One last tip, is that you should create a shared directory to store the files that someone sends you using Skype, otherwise, you will not be able to get them unless you switch to that user (I realized this after some one send me a file the first time)
  <ol>
    <li>Open Finder</li>
    <li>In the menu select Go -> Go to folder...</li>
    <li>Enter: /Users/Shared and hit Go</li>
    <li>On the menu select File -> New Folder and create a new folder, you can name it Skype</li>
    <li>On your secondary instance of Skype select in the menu Preferences -> General</li>
    <li>Locate the option "Save files in:" and select the shared directory that you created, now all the files you download they will be saved there, you can also add that folder in your favorites and have it access quickly</li>
  </ol>
</li>
</ul>
