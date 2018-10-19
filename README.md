# Monotreme

Monotreme is a light way to read in, edit, and write data to files at an address you choose (local drive or on a web server).

Local save currently uses Internet Explorer 11's ActiveX controls (yikes!). Remote save is coming and is planned to use WebDAV.

It's called Monotreme because WebDAV is old and a bit 'against the grain' of common webdev practice.

## Technical

Monotreme is an object prototype. It provides methods for:

- reading data from a file into a JavaScript equivalent (currently .txt into a JS string; maybe .json arrays and objects)
- visualising and editing the JS data via form elements
- saving JS data to a file.

This allows you to maintain data on a local or remote server via your browser.

The file can be local (via ActiveX; IE11 only) or remote (via WebDAV).

## Usage

Create an object that uses Monotreme as its prototype. Then set its properties:

- path: a path to load and save to (local filepath or URL)
- node: a DOM node so you can see and edit the data

For example:

    const o = {
        __proto__: Monotreme,
        path: "C:\somebody\once\told\me",
        node: document.getElementById("some_ID")
    }

    o.load();

    // Set up a button
    const btn = document.getElementById("some_btn");
    const btn_edit = function() {o.edit(); btn.innerHTML = "Save"; btn.onclick = btn_save}
    const btn_save = function() {o.save(); btn.innerHTML = "Edit"; btn.onclick = btn_edit}
    btn.onclick = btn_edit;