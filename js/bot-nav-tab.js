$(function(){
    var n=$('.bot-tab>ul>li');
    var div=$('.bot-tab-content>div');
    n.mouseover(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        div.eq($(this).index()).stop().show().siblings().stop().hide();
        div.eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
        // div.eq($(this).index()).siblings().stop().fadeOut("fast");
        // div.eq($(this).index()).stop().fadeIn("fast");
    })
})