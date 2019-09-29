$(function(){
    var width = $(window).width();
    $('.carrusel').each(function(){
        var carrusel= $(this);
        var carrusel_content = carrusel.find('.carrusel_content');
        var nb =carrusel.find('.carrusel_content').length;
        var controls = carrusel.parent().find('.controls');
        var dir_r = carrusel.next('.arrows').find('.dir_rigth');
        var dir_l = carrusel.next('.arrows').find('.dir_left');
        function expand(cant){
            for(var i=1;i<=cant;i++){
                controls.append('<span class="control" />');
            }
            controls.find('span:first').addClass('control_active');
        }
        
        carrusel.wrapInner('<div class="carrusel_inner" />');
        carrusel_inner = carrusel.find('.carrusel_inner');
        
       function size(anchor1,anchor2){
            carrusel_inner.css('width', anchor1 * nb + '%');
            carrusel_content.css('width',anchor2 / nb + '%');
       }
       var ancho = 100;
       var position = 0;
       var cambio = 1;
        if(width <= 766){
            expand(8);
            size(100,100);
            nb = 8;
            position = 1;
            ancho = 100;
            cambio = 1;
        }else if(width <=1024){
            expand(4);
            size(50,100);
            nb = nb - 1;
            position = 0.5;
            ancho = 50;
            cambio = 2;
        }else{
            expand(2);
            size(50 ,50);
            nb = nb - 5;
            position = 0.5;
            ancho = 50;
            cambio = 2;
        }
        var i = 0;
        function mover(){
            if(i == 0){
                carrusel_inner.css('left', 0);
            }else if (i > 0){
                dir_l.css('opacity',1);
                carrusel_inner.css('left', '-' + ancho * i + '%');
            }
        }
        function controles(){
            controls.find('span').eq(position * i).addClass('control_active').siblings().removeClass('control_active');
        }
        dir_r.on('click',function(){
            if(i < nb - 1){   
                i++;
                mover();
            }
            controles();
        })
        dir_l.on('click',function(){
            if(i > 0){   
                i--;
                mover();
            }
            controles();
        })
        controls.find('span').on('click',function(){
           var control = $(this).index() * cambio;     
           $(this).addClass('control_active').siblings().removeClass('control_active');
           i = control;
           mover();
        })
    })
    
        
    
})
