/* Monotreme */

/*
    - ACTION: LOAD: just a standard JS object / array
    - ACTION: EDIT: appears as a bunch of editable boxes
    - ACTION: COMMIT: saves to a file and reloads [maybe from just-saved-but-still-in-memory file instead of reloading from disk]
*/

// ACTIVEX FSO: 1 = read, 2 = write, 8 = append
// https://docs.microsoft.com/en-us/office/vba/language/reference/user-interface-help/opentextfile-method
// https://www.w3schools.com/asp/asp_ref_filesystem.asp
const IO_activex = {
    load: function (filepath) {
        var fso = new ActiveXObject("Scripting.FileSystemObject");
        var file = fso.OpenTextFile(filepath, 1);
        var content = file.ReadAll();
        file.Close();
        return content;
    },
    save: function (filepath, text) {
        var fso = new ActiveXObject("Scripting.FileSystemObject");
        var file = fso.OpenTextFile(filepath, 2);
        file.write(text)
        file.Close();
    }
}

/*
    - How will we track binding of JS objects to nodes? (ie where the edit controls etc are shown?)
    - Think about what the function signatures should be
*/

// Render JS to page

function render_array(id, array) {
    const list_node = document.getElementById(id);
    list_node.innerHTML = '';
    array.forEach(function(x) {
        const text_node = document.createTextNode(x);
        const item_node = document.createElement("li");
        item_node.appendChild(text_node);
        list_node.appendChild(item_node);
    })
}

// Edit mode

function edit_array(id) {
    const list_node = document.getElementById(id);
    temp_list = [];
    Array.prototype.forEach.call(list_node.childNodes, function(n) {
        const input_node = document.createElement("input");
        input_node.setAttribute("value", n.innerHTML);
        const item_node = document.createElement("li");
        item_node.appendChild(input_node);
        temp_list.push(item_node);
    });
    list_node.innerHTML = '';             
    temp_list.forEach(function(item_node) {list_node.appendChild(item_node) });
    console.log(temp_list);
}

// Write HTML to JS

function commit_list(array, list_node) {
    array.length = 0; // https://stackoverflow.com/a/1234337/996380
    Array.prototype.forEach.call(list_node.childNodes, function(li_node) {
        array.push(li_node.childNodes[0].value);
    })
    return array;
}

// Save JS to file

function write_array(filepath, array) {
    const content = array.join("\r\n");
    IO_activex.save(filepath, content);
}