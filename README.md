Sassy Sublime
=============

Sassy Sublime is a Chrome extension. It let's you open SASS links (within the Chrome Inspector panel) in the Sublime text editor.

Requirements
-------------

Make sure you have these installed:

1. Mac OS X
2. [Chrome 25][1] or higher
3. [Sublime Text 2][2]
4. [Subl-handler][3]

[1]: http://www.chrome.com
[2]: http://www.sublimetext.com
[3]: https://github.com/asuth/subl-handler

Quick Start
-------------
1. Download [Sassy Sublime][4] extension
2. Go to chrome://extensions in Chrome, and make sure "Developer" mode is checked.
3. Click "Load unpacked extension..." and select the downloaded folder
4. Go to chrome://flags/ and look for "Enable Developer Tools experiments". Click "Enable".
5. Open up Chrome's DevTools inspector and click the "Settings" gear icon in the lower-right
6. In the "General" tab, under "Extensions", set "Open links in" to "Open in Sublime"
7. In the "Experiments" tab, make sure "Support for SASS" is checked.
8. In your SASS config.rb file make sure you have this line:
    
    sass_options = { :debug_info => true }

You may need to restart Chrome.

[4]: https://github.com/chanpory/sassy-sublime/archive/master.zip

