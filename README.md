#aframe-vscode-snippet#
A-Frame Component code snippet for Visual Studio Code.

Handy 'boilerplate' code for newbies to help learn A-FRAME coding. See **mySystem.js** & **myComponent.js** for code produced. It will even generate the required script tags for you `<script src="mySystem.js"></script>` at the top of the file :-)

This will definitely change as I understand A-Frame, Javascript better.

If you haven't got Visual Studio Code just take the **mySystem.js** & **myComponent.js** and use them as templates in your own editor.

##Shortcuts##
'afc' - A-Frame Component
'afs' - A-Frame System

##Instructions##
1. Create a new javascript file with the name you want your component/system to be
2. type 'afc'/'afs' and then hit the _tab_ key
3. _tab_ will move you to the next piece of code you should change
4. **Note the caveat below**

##Caveat - Component/System Name##
The component/system name is generated from the javascript filename and unfortunately due to Visual Studio variables also includes the '.js' extension. Make sure you remove this when tabbing through!

i.e your new javascript filename is 'myComponent.js' and it generates

AFRAME.registerComponent'myComponent**.js**', {

it should be

AFRAME.registerComponent('myComponent', {

##Installation##
package.json & snippets folder should be copied to the relevant location according to [Visual Studio Code Snippet Help](https://code.visualstudio.com/Docs/customization/userdefinedsnippets#_sharing-your-snippets-in-the-marketplace).

For Windows `%APPDATA%\Code\User\`

For Mac `$HOME/Library/Application Support/Code/User/`

For Linux `$HOME/.config/Code/User/`

**If you already have these files you will need to merge them so you don't overwrite your own snippets.**

##Testing##
I have only tested this on Windows 10 and have used Visual Studio Code Insiders. Please test first!

