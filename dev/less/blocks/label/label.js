/**
 * Created by NerV on 26.07.2016.
 */
var $label = $('.label--hover');

$label.hover(
    function(){
        var $this = $(this);
        $this.data('bgcolor', $this.css('background-color')).css('background-color', ColorLuminance(hexc($this.css("background-color")), -0.06));
    },
    function(){
        var $this = $(this);
        $this.css('background-color', $this.data('bgcolor'));
    }
);

$label.hover(
    function(){
        var $this = $(this);
        $this.data('brdcolor', $this.css('border-color')).css('border-color', ColorLuminance(hexc($this.css("border-color")), -0.06));
    },
    function(){
        var $this = $(this);
        $this.css('border-color', $this.data('brdcolor'));
    }
);