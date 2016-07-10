/**
 * Created by NerV on 10.07.2016.
 */
$('.top-menu__burger').click(function(){
    if ($('.top-menu__items').hasClass('top-menu__items--active')) {
        $('.top-menu__items').removeClass('top-menu__items--active');
        $('.top-menu__burger').removeClass('top-menu__burger--active');
    } else {
        $('.top-menu__items').addClass('top-menu__items--active');
        $('.top-menu__burger').addClass('top-menu__burger--active');
        $('.top-menu__search').removeClass('top-menu__search--active');
        $('.top-menu__search_toogler').removeClass('top-menu__search_toogler--active');
    }
});

$('.top-menu__search_toogler').click(function(){
    if ($('.top-menu__search').hasClass('top-menu__search--active')) {
        $('.top-menu__search').removeClass('top-menu__search--active');
        $('.top-menu__search_toogler').removeClass('top-menu__search_toogler--active');
    } else {
        $('.top-menu__search').addClass('top-menu__search--active');
        $('.top-menu__search_toogler').addClass('top-menu__search_toogler--active');
        $('.top-menu__items').removeClass('top-menu__items--active');
        $('.top-menu__burger').removeClass('top-menu__burger--active');
    }
});