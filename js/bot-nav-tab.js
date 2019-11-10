//图片的的遮罩层
var d=$(".place-pic>div");
var i=$(".place-pic img");
d.mouseover(function(){ 
    $(this).find(".dark-cover").css("display","block");
    $(this).find(".orange-cover").stop().slideDown();
    $(this).find(".note").stop().show();
    $(this).find("li").css("color","rgb(102,102,122)");
    $(this).find("li:nth-child(1)").css("color","rgb(208,126,18)");
   
})
d.mouseout(function(){
    $(this).find(".dark-cover").css("display","none");
    $(this).find(".orange-cover").stop().slideUp();
    $(this).find(".note").stop().hide();
    $(this).find("li").css("color","");
    $(this).find("li:nth-child(1)").css("color","");
})
// 底部的tab选卡导航
var n = $('.bot-tab>ul>li');
var div = $('.bot-tab-content>div');
n.mouseover(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    // div.eq($(this).index()).stop().show().siblings().stop().hide();
    div.eq($(this).index()).stop().fadeIn().siblings().stop().hide();
    
})

//商标的上下滑动
var li=$(".brand-details>ul>li")
li.mouseover(function(){
    $(this).find("div:nth-child(1)").hide();
    $(this).find("div:nth-child(2)").show();
})
li.mouseout(function(){
    $(this).find("div:nth-child(2)").hide();
    $(this).find("div:nth-child(1)").show();
})

//新闻资讯的tab选项卡
var n=$('.zixun>.nav2>li');
n.mouseover(function(){
    $(this).parent().siblings("div").eq($(this).index()).fadeIn().siblings("div").fadeOut();
})




