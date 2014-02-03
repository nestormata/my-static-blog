---
layout: post
title: Multiple Skype accounts on Mac OS or Windows at the same time
created: 1337114807
categories: Personal
tags: ['tip', 'skype', 'multiple accounts', 'Windows', 'mac os' ]
language: en
permalink: technology/multiple-skype-accounts-mac-os-or-windows-same-time/
translation: es/technology/multiples-cuentas-skype-al-mismo-tiempo-mac-os-o-windows/
---
I use a personal Skype account and another Skype account for the company I work for, and then I have the problem of how can I have both accounts opened.

##Multiple Skype Instances on Windows XP/Vista
In Windows this is easy, you just need to call the `Skype.exe` with the parameter `/secondary`, which you can do by creating a new shortcut on the Programs Menu
1. Locate the __Skype__ program (`C:/Program Files(x86)/Skype/Phone/Skype.exe` or `C:/Program Files(x86)/Skype/Phone/Skype.exe` or something similar)
1. Right click on the `Skype.exe` program
1. Select _"Create shortcut"_
1. Then move this shortcut wherever you want (like the _Desktop_ or the _Start Menu_)
1. Right click on the shortcut, select _"Properties"_
1. On the field "Target" add at the end `/secondary` like this for example (`"C:/Program Files(x86)/Skype/Phone/Skype.exe" /secondary`)
1. Hit `OK` and you are done, you can open the primary and the secondary instances of __Skype__, having two accounts opened at the same time

##Multiple Skype instances on Mac OS
On Mac is a little more complicate because the Mac executable doesn't supports the secondary option.   
The best option I have found is using a different account to start the program and I've solved a couple little problems that comes with it.
1. Create a new user (one time only): 
    1. Go to `System Preferences` -> `System` -> `Users & Groups`
    1. Unlock the window if required
    1. Hit the `+` sign
    1. Choose standard type and fill the form, you can use the same password that you already use _(remember the account name, you will use it on the next steps)_

2. Start __Skype__ using the other account (every time that you want to use your secondary instance)
    - Open the terminal (Open spotlight and type terminal)
    - Change user, to do that type the following on the terminal replace `otheruser` with the user name of the account you created

          su otheruser

    - It will ask you for the other user password
    - Open __Skype__, to do it, enter the following on the terminal:

          /Applications/Skype.app/Contents/MacOS/Skype&

    _Note:_ this is a little secret, you do can close the terminal, it will warn you that the program will be closed, but it actually will not, you can go ahead and close the terminal.

3. One last tip, is that you should create a shared directory to store the files that someone sends you using Skype, otherwise, you will not be able to get them unless you switch to that user (I realized this after some one send me a file the first time)
    1. Open _Finder_
    1. In the menu select `Go` -> `Go to folder...`
    1. Enter: `/Users/Shared` and hit `Go`
    1. On the menu select `File` -> `New Folder` and create a new folder, you can name it _Skype_
    1. On your secondary instance of _Skype_ select in the menu `Preferences` -> `General`
    1. Locate the option _"Save files in:"_ and select the shared directory that you created, now all the files you download they will be saved there, you can also add that folder in your favorites and have it access quickly

