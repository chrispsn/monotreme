# Monotreme

Monotreme is a light way to read, see, edit and write data in a filesystem via your browser.

Local IO currently uses Internet Explorer 11's ActiveX controls (yikes!). Remote IO support is coming (via WebDAV).

It's called Monotreme because WebDAV is old and a bit 'against the grain' of common webdev practice.

![Example GIF](example.gif)

## Technical

Monotreme is an object prototype. It provides methods for:

- reading data from a file into a JavaScript equivalent (currently .txt into a JS string; maybe .json arrays and objects)
- visualising and editing the JS data via form elements
- saving JS data to a file.

This allows you to maintain data on a local or remote server via your browser.

The file can be local (via ActiveX; IE11 only) or remote (via WebDAV).

See example.index for how it can be used.
