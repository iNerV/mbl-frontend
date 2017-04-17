/**
 * Created by NerV on 26.07.2016.
 */
var $label = $('.label--hover');

$label.click(
    function() {
        if ($(this).parent().hasClass('add-form__type')) {
            if ($(this).hasClass('label--'.concat($(this).data('label')))) {
                $(this).removeClass('label--'.concat($(this).data('label')));
                $(this).css('background-color', '');
                $(this).css('border-color', '');
            } else {
                $(this).addClass('label--'.concat($(this).data('label')));
            }
        } else {
            if ($(this).hasClass('label--info')) { //fixme для новостей тоже придумать как делать
                $(this).closest('[data-read]').attr('data-read', true);
                $(this).clearQueue().fadeOut();
                $.post(
                    "https://httpbin.org/post", //fixme поправить на рабочий вариант ;)
                    {
                        comment_id: $(this).parent().parent().parent().attr('id'),
                        viewed: true
                    },
                    onAjaxSuccess // callback for test
                );
            }
        }
    }
).hover(
    function(){
        if ($(this).hasClass('label--'.concat($(this).data('label')))) {
            var $this = $(this);
            $this.data('bgcolor', $this.css('background-color')).css('background-color', ColorLuminance(hexc($this.css("background-color")), -0.06));
            $this.data('brdcolor', $this.css('border-color')).css('border-color', ColorLuminance(hexc($this.css("border-color")), -0.06));
        }
    },
    function() {
        if ($(this).hasClass('label--'.concat($(this).data('label')))) {
            var $this = $(this);
            $this.css('background-color', $this.data('bgcolor'));
            $this.css('border-color', $this.data('brdcolor'));
        }
    }
);

// снятие метки "новое" после попадения комментария в верхнюю половину вьюпорта
$(window).scroll(function() {
    $('[data-read=false]').each(function () {
        var elemOffset = $(this).offset().top - $(window).scrollTop();
        var winHeight = $(window).height();
        if (elemOffset > -5 && elemOffset < winHeight / 2){
            $(this).attr('data-read', true);
            jQuery('.label--info', this).first().delay(2000).fadeOut();
        }
    });
});

function onAjaxSuccess(data) // callback for test
{
  // Здесь мы получаем данные, отправленные сервером и выводим их на экран.
  console.log(data['headers']['User-Agent']);
}