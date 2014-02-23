plusSept
========

v0.2.3

plusSept is a Google Chrome extension to bypass the geographic restrictions on arte.tv player (and also the time protection to can watch night time shows during the day). This is not using any proxy or external services, just overriding some scripts from arte.tv. No personnal data is collected. About permissions, this extension is only executed on arte.tv domain.
So if you live outside of France or Germany, enjoy arte.tv again, easily.

Dear nerd friends, I've added the feature I wanted. When you're watching a video, open the console and you will get the HTTP link to download the low quality, and `rtmpdump` commands to download all versions (especially HD). Be careful about the `rtmpdump` commands, Google Chrome truncate urls. So if you make a copy paste it will f*** your command. Think to use right click on links and do `Copy Link Address`.

**WARNING**: arte.tv update their player regulary, making the plug-in completely out of order. So you have to uninstall and install the new version (at the same URL). If I have time, I'll try to find a way for automatic updates.

How to use it?
--------------
Download the extension package on https://raw.github.com/maxwellito/plussept/master/plussept.crx then install it (a simple drag and drop on chrome://extensions/ page should be ok). Then enjoy http://www.arte.tv/guide/fr/plus7

For the frenchies
-----------------
Comment regarder les videos d'arte a l'etranger ? Pas besoin de proxy ou de techniques farfelues, juste besoin de Google Chrome et ce plug-in. Pour l'installation, il suffit de telecharger https://raw.github.com/maxwellito/plussept/master/plussept.crx et de l'installer (en le deposant sur la page chrome://extensions/).
Puis profitez de tout les programmes sur http://www.arte.tv/guide/fr/plus7

Code
----
For the record, this is my first Chrome extension. I'm sure the code can be improuved (a lot!). If a master want to give me a hand: you're welcome!
To make the build, I've used the 'Pack extension' feature in Chrome. I've kept the key (.pem) for me, of course.
Built with http://extensionizr.com/

FAQ
---
Why the extension is not available on Chrome Web Store?
Well.. I don't think I'm respecting the terms and conditions with what I'm doing, and Arte might not appreciate too. So let's keep it here :-)

If you have any questions, ask me on twitter @mxwllt or post an issue.


###### Disclaimer
These videos are the property of Arte, and the usage you do of this plugin is your entire responsability. That's right I decline all responsabilities about it.