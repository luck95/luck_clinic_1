$('.tab_content .title_tab').click(function(){
    $(this).parent().siblings().find('.tab_division').slideUp();
    $(this).parent().find('.tab_division').slideDown();
    $(this).parent().addClass('activate_tab').siblings().removeClass('activate_tab');
})
$('.tabs_list .tab_control').click(function(){
    $(this).addClass('active_tab').siblings().removeClass('active_tab');
    var i=$(this).index();
    $(this).parent().parent().parent().find('.tab_content').hide();
    $(this).parent().parent().parent().find('.tab_content').eq(i).show();
})
