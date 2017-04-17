/**
 * Created by NerV on 05.08.2016.
 */
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

$(document).ready(function(){
    $('[data-answer_btn]').click(function () {
        var comment = $(this).closest('.comment');
        var id = comment.attr('id');
        var nickname = comment.data('nickname');
        $(".add-form__text").val($(".add-form__text").val() +'[comment=' + id + ']' + nickname + '[/comment], ');
    });

    $('[data-quote_btn]').click(function () {
        var comment = $(this).closest('.comment');
        var id = comment.attr('id');
        var nickname = comment.data('nickname');
        var test = getSelectionText(); // fixme не работает! при клике на кнопкц "цитировать" выделеный текст не сохраняется ;(
        console.log(test);
        $(".add-form__text").val($(".add-form__text").val() +'[quote=' + id +';' + nickname + ']' + test + '[/quote], ');
    });
});