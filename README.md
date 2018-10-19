# Monotreme

Monotreme helps you see and edit data in files via your browser. You choose the file's path (local drive or web server).

![Example GIF](example.gif)

Local save currently uses Internet Explorer 11's ActiveX controls (yikes!). Remote save (WebDAV) is coming soon.

## Usage

Monotreme is an object prototype. It provides methods for:

- reading data from a user-specified file into a JavaScript equivalent (currently .txt into a JS string; maybe .json arrays and objects)
- visualising and editing the JS data via form elements
- saving JS data to a user-specified file.

See example.html.