/**
 * Created by NerV on 15.07.2016.
 */


function getUnread() {
    return $('[data-read=false]').map(function () {
        return $(this).attr("id");
    }).get()
}

var unread = getUnread();

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
    unread = getUnread();
    checkUnread();
});

$('.comment-notifer').click(function() {
    $('html, body').animate({
        scrollTop: $('#'.concat(unread[0])).offset().top
    }, 200);
});

// $('[data-read=false]').hover(function () {
//     $(this).attr('data-read', true);
//     jQuery('.label--info', this).first().delay(2000).fadeOut();
//     unread = getUnread();
//     checkUnread();
// });