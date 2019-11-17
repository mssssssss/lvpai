//第二个导航 选项选中
var u=$('.sec-nav>ul>li')
u.click(function(){
    $(this).find('ul').addClass('ss');
    $(this).siblings('li').find('ul').removeClass('ss');
})
// 首页链接到首页.html
$('.sec-nav>ul>li:nth-child(1)').click(function(){
    location.href="./首页.html"
})

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
// 地点图片 跳转到相应页面
d.click(function(){
    location.href="详情页.html";
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
    $(this).addClass("sele").siblings().removeClass("sele");
    // $(this).parent().siblings("div").eq($(this).index()).animate({ left:"-=1200px"  }, 2000);
    // $(this).parent().siblings("div").eq($(this).index()).next().fadeIn();
    $(this).parent().siblings("div").eq($(this).index()).stop().fadeIn(800).siblings("div").stop().fadeOut(800);
})

// 评论部分 
var t=$(".section-com>li>div:nth-child(1)");
/* 当鼠标悬浮在头像上时 微博图片 出现 且出现遮罩层*/
t.mouseover(function(){
    $(this).find("img:nth-of-type(2)").stop().fadeIn();
    $(this).find(".cov").stop().fadeIn();
    // 光标为手型
    $(this).css("cursor","pointer");
})
t.mouseout(function(){
    $(this).find("img:nth-of-type(2)").stop().fadeOut();
    $(this).find(".cov").stop().fadeOut();
})
var s=$(".section-com>li .send");
// 当鼠标落在消息栏时 微博图片 出现 且出现遮罩层
s.mouseover(function(){
    $(this).siblings("div").find("img:nth-of-type(2)").stop().fadeIn();
    $(this).siblings("div").find(".cov").stop().fadeIn();
})
s.mouseout(function(){
    $(this).siblings("div").find("img:nth-of-type(2)").stop().fadeOut();
    $(this).siblings("div").find(".cov").stop().fadeOut();
})

var y=$('.zixun-content>ul>li');
y.click(function(){
    location.href="新闻.html";
})
