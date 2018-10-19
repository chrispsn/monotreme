// Monotreme: See, edit and save data to a file system from your browser
// See README for how to use: https://github.com/chrispsn/monotreme

const Monotreme = {
    get IO() {
        return (this.path.slice(0, 4) === "http") 
            ? (alert("Remote IO not implemented yet."), null) // TODO fill in for WebDAV
            : IO_activex
    },
    load: function() {
        this.data = this.IO.load(this.path);
        this.render();
    },
    save: function() {
        this.data = this.node.value; // TODO What if we need to read the data into a JS equivalent like a {}, not just text?
        this.IO.save(this.path, this.data);
        this.render(); // TODO how to check that saved properly?
    },
    render: function() {
        this.node.value = this.data;
        this.node.setAttribute("placeholder", this.data);
        this.node.disabled = true;
    },
    edit: function() {
        this.node.disabled = false;
    },
}

// ACTIVEX FSO: 1 = read, 2 = write, 8 = append
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/opentextfile-method
// https://www.w3schools.com/asp/asp_ref_filesystem.asp
const IO_activex = {
    _fso: new ActiveXObject("Scripting.FileSystemObject"),
    load: function (filepath) {
        var file = this._fso.OpenTextFile(filepath, 1);
        var content = file.ReadAll();
        file.Close();
        return content;
    },
    save: function (filepath, text) {
        var file = this._fso.OpenTextFile(filepath, 2);
        file.write(text)
        file.Close();
    }
}

/*
    NOTES

    DOM_node
    file_address
    IO_fns? (determine from file address?)
    JS_value (created?)
    current_mode?
    line ending type (for reading from disk)?
    label text? (implies need a parent div?)
    edit/commit_fns? (textarea, ul/ol, k-v?) (or infer from DOM_node?)
    save/load UI button node?

    Free text (obviate new cell /delete cell?)
    Enter to commit? (Incompat w above? Maybe OK if a textarea How to trigger edit - double-click? gets rid of button...)
    Register {Id, node, data, path}?
    Save and load fns for IE11 and WebDAV

    Should I be more opinionated about managing the edit/save button? Easier setup but maybe less flexible for user
    Should I even be providing this wrapper prototype instead of just providing a library of functions?
*/