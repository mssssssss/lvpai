
// 鼠标悬浮在图片上时 遮罩层出现
var s = $(".pic-show img");
s.mouseover(function () {
    $(this).siblings(".dd").stop().fadeIn(100);
})
s.mouseout(function () {
    $(this).siblings(".dd").stop().fadeOut(100);
})

// 鼠标悬浮在图片上时 文本的背景颜色改变
var im = $(".im>li");
im.mouseover(function () {
    $(this).find(".im-wen").css("backgroundColor", "rgb(255, 153, 0)")
})
im.mouseout(function () {
    $(this).find(".im-wen").css("backgroundColor", "")
})
// 大图片出现 且跟着鼠标动 (大图在鼠标右边显示)
var p = $('.im>li');
// lst 选到了每一行的最后三个li
var lst=$('.im>li:nth-child(13),.im>li:nth-child(14),.im>li:nth-child(15)');
console.log(lst);

p.mousemove(function (e) {
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x);
    console.log(y);

    $(this).find(".d-t").show();
    $(this).find(".d-t").css("left", x + 15 + "px");
    $(this).find(".d-t").css("top", y - 15 + "px");
})
p.mouseout(function () {
    $(this).find(".d-t").fadeOut(200);
}) 
// 每行的最后三张 大图片显示在鼠标的左边                                                                          
lst.mousemove(function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x);
    console.log(y);

    $(this).find(".d-t").show();
    $(this).find(".d-t").css("left", x - 345 + "px");
    $(this).find(".d-t").css("top", y - 15 + "px");
})

// 得到焦点 文本框的边线颜色发生改变 以及图片的消失
var input = $('.add-comment input');
var textarea = $('.add-comment textarea');
input.focus(function () {
    $(this).css("borderColor", "rgb(204, 102, 0)")
});
textarea.focus(function () {
    $(this).css("borderColor", "rgb(204, 102, 0)")
    $(this).siblings("img").hide();
});
input.blur(function () {
    $(this).css("borderColor", "");
})
textarea.blur(function () {
    $(this).css("borderColor", "");
    $(this).siblings("img").show();
})