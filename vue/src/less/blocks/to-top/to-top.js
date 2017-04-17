/**
 * Created by NerV on 15.07.2016.
 */
$(document).ready(function() {

    $(window).scroll (function () {
        if ($ (this).scrollTop() > 50) {
            $ ('.to_top').fadeIn();
        } else {
            $ ('.to_top').fadeOut();
        }
    });

    $('.to_top').click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 100);
        return false;
    });
});