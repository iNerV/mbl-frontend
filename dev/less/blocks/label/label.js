/**
 * Created by NerV on 26.07.2016.
 */
var $label = $('.label--hover');

$label.click(
    function() {
        if ($(this).hasClass('label--'.concat($(this).data('label')))) {
            $(this).removeClass('label--'.concat($(this).data('label')));
            $(this).css('background-color', '');
            $(this).css('border-color', '');
        } else {
            $(this).addClass('label--'.concat($(this).data('label')));
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