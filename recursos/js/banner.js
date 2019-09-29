
$(function(){
    var slider = $('.slider');
        var nb =slider.find('article').length;
        slider.css({
            'width':nb * 100 + '%',
        })
        slider.find('article').css({
            'width':100 + '%'
        })
        function next(slider){
            slider.animate({
                opacity:0
            } ,2000, function(){
                slider.find('article:first').insertAfter(slider.find('article:last'));
                slider.find('article:first').addClass('left-r');
                slider.find('article:last').removeClass();
                slider.css('opacity',1)
            });
        }
        interval = setInterval(function(){
            next(slider);
        },10000)
        ;
    autoplay();
})
var width = $(window).width();
if(width > 1300){
    $('#banner .grupo article > div').css({
        'padding-left': ((width - 1170) / 2) + 40 + 'px',
        'padding-right': ((width - 1170) / 2) + 40  + 'px'
    })
}

