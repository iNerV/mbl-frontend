/**
 * Created by NerV on 15.07.2016.
 */

var unread = $('[data-read=false]').map(function() {
    return $(this).attr("id");
}).get();

function checkUnread() {
    $('.comment-notifer__counter').text(unread.length);
    if (unread.length > 0) {
        $('.comment-notifer').fadeIn();
    } else {
        $('.comment-notifer').fadeOut();
    }
}

$(document).load($('.comment-notifer__counter').text(unread.length));

$(document).scroll(function () {
    unread = $('[data-read=false]').map(function() {
        return $(this).attr("id");
    }).get();
    checkUnread();
});

$('.comment-notifer').click(function() {
    $('html, body').animate({
        scrollTop: $('#'.concat(unread[0])).offset().top
    }, 200);
    // unread.splice(0,1);
    // checkUnread();
});