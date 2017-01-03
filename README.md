# aframe-vscode-snippet
A-Frame Component code snippet for Visual Studio Code.

Handy 'boilerplate' code for newbies to help learn A-FRAME components. See **exampleOutput.js** for code produced.

This will definitely change as I understand A-Frame, Javascript better.

If you haven't got Visual Studio Code just take the exampleOutput.js and use it as a template for your own editor.

##Instructions
1. Create a new javascript file with the name you want your component to be
2. type 'AFC' and then hit the _tab_ key
3. _tab_ will move you to the next piece of code you should change
4. **Note the caveat below**

##Caveat - Component Name
The component name is generated from the javascript filename and unfortunately due to Visual Studio variables also includes the '.js' extension. Make sure you remove this when tabbing through!

i.e your new javascript filename is 'myComponent.js' and it generates

AFRAME.registerComponent'myComponent**.js**', {

it should be

AFRAME.registerComponent('myComponent', {

##Installation
These files should be copied to the relevant location according to [Visual Studio Code Snippet Help](https://code.visualstudio.com/Docs/customization/userdefinedsnippets#_sharing-your-snippets-in-the-marketplace).

For Windows `%APPDATA%\Code\User\`

For Mac `$HOME/Library/Application Support/Code/User/`

For Linux `$HOME/.config/Code/User/`

**If you already have these files you will need to merge them so you don't overwrite your own snippets.**

