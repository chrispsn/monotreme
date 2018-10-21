# Monotreme

Monotreme helps you see and edit data in files via your browser. You choose the file's location (local path or remote URL).

![Example GIF](example.gif)

Local save uses Internet Explorer 11's ActiveX controls. Yikes!

Remote save uses WebDAV. Have fun configuring your server!

## Usage

Monotreme is an object prototype. It provides methods for:

- reading data from a file into a JavaScript equivalent (currently .txt => string, but maybe .json => arrays and objects)
- visualising and editing the JS data via form elements
- saving JS data to a user-specified file.

See example.html.
