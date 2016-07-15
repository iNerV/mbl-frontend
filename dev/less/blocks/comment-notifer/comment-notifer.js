/**
 * Created by NerV on 15.07.2016.
 */
var dataList = $(".comment").map(function() {
    return $(this).attr("id");
}).get();

console.log(dataList.length);


//        var unread = true;
//
//        var dataList2 = $(".comment").map(function() {
//            return $(this).attr("data-read");
//        }).get();
//        console.log(dataList2);

$.fn.scrollBottom = function() {
    return $(document).height() - this.scrollTop() - this.height();
};

$(window).scroll (function () {
    if ($(this).scrollBottom() > 50) {
        $('.comment-notifer').fadeIn();
    } else {
        $('.comment-notifer').fadeOut();
    }
});

$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 400);
    });
};

$('.comment-notifer').click(function(){
//            $('body,html').animate({
//                scrollTop: $(window).scrollBottom()
//            }, "slow");
    $().data(unread).scrollView();
    return false;
});