// Basic example of execCommand to modify the editor's text, From: https://www.thatsoftwaredude.com/content/8912/create-a-basic-text-editor-in-javascript
function format(command, value) {
    document.execCommand(command, false, value);
}