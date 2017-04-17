function add_code(code, id) {
    var textarea = document.getElementById(id);
    var len = textarea.value.length,
        start = textarea.selectionStart,
        end = textarea.selectionEnd,
        sel = textarea.value.substring(start, end),
        replace = '['+code+']' + sel + '[/'+code+']';
    textarea.value = textarea.value.substring(0,start) + replace + textarea.value.substring(end,len);
}

//todo add func for another btns