// From https://www.thatsoftwaredude.com/content/8912/create-a-basic-text-editor-in-javascript
function format(command, value) {
    document.execCommand(command, false, value);
}

function setUrl() {
    var url = document.getElementById('txtUrl').value;
    var sText = document.getSelection();

    document.execCommand('insertHTML', false, '<a href="' + url + '" target="_blank">' + sText + '</a>');
    format('createlink', url);
}