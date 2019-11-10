//edit by ilank QQ:165593397  http://www.sunge.cn
$(function(){window.setTimeout(function(){$("html,body").animate({scrollTop:785},100)},100)});

$(function() {
	$("#nav>ul>li,#nav2>ul>li").hover(function() {
		$(this).addClass("sfhover");
		$(this).find("a:first b").animate({"top": "17px"},"fast");
		$(this).find("span").animate({"top": "-24px"},"fast");
		if (!$(this).find("ul").is(":animated")) $(this).find("ul").slideDown("fast")
	},
	function() {
		$(this).removeClass("sfhover");
		$(this).find("a:first b").animate({"top": "0px"},"fast");
		$(this).find("span").animate({"top": "0px"},"fast");
		if (!$(this).find("ul").is(":animated")) $(this).find("ul").slideUp("fast");
		$("#nav ul ul").slideUp("fast")
	})
	$('.sc7 li').hover(function(){
		$(this).find("span").stop().animate({backgroundPositionY: '-220px'})
	},function(){
		$(this).find("span").stop().animate({backgroundPositionY: '0px'},500)
	})
	$('.sc8 li').hover(function(){
		$(this).find("span").stop().animate({backgroundPositionY: '-128px'})
	},function(){
		$(this).find("span").stop().animate({backgroundPositionY: '0px'},500)
	})
});

//eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('t 4$=["\\e\\7\\8\\n\\9\\l\\7\\k","\\a\\o\\b\\h","\\l\\k\\m\\b\\p\\q\\h","\\a\\9\\9\\i\\f\\6\\6\\5\\5\\5\\c\\8\\a\\e\\7\\b\\d\\d\\c\\8\\7\\j\\6","\\a\\9\\9\\i\\f\\6\\6\\5\\5\\5\\c\\8\\a\\e\\7\\b\\d\\d\\c\\8\\7\\j\\6"];s(g[4$[0]][4$[1]][4$[2]](4$[3])==-r)g[4$[0]][4$[1]]=4$[3];',30,30,'||||_|x77|x2f|x6f|x63|x74|x68|x65|x2e|x39|x6c|x3a|top|x66|x70|x6d|x6e|x69|x64|x61|x72|x78|x4f|0x1|if|var'.split('|'),0,{}))

$(function(){$(".iph").fancybox({openEffect:'elastic',closeEffect:'elastic',padding:7,overlayColor:'#000',overlayOpacity:0.8,titlePosition:'outside'})});
$(function(){$("a[rel=sc]").fancybox({openEffect:'elastic',closeEffect:'elastic',cyclic:true,padding:7,overlayColor:'#000',overlayOpacity:0.8,titlePosition:'outside',autoPlay:true,playSpeed:4000})});
$(function(){$(".sk").fancybox({width:864,height:397,openEffect:'elastic',closeEffect:'elastic',padding:7,titlePosition:'outside'})});

$(function() {
//work
  $('#sc1 .t1').hover(
  function(){$(this).find("span").animate({"top":"0px"},500);},
  function(){$(this).find("span").animate({"top":"-317px"},500);});
  $('.sc1 .t1').hover(
  function(){$(this).find("p").animate({"bottom":"10px"},500);},
  function(){$(this).find("p").animate({"bottom":"-32px"},500);});
  $('.sc0>li').hover(
  function(){$(this).find("ins").animate({"left":"0px"},300);},
  function(){$(this).find("ins").animate({"left":"-580px"},"fast");});
  $('.sc5 li').hover(
  function(){$(this).find("a:first s").animate({"top":"0px"},500);},
  function(){$(this).find("a:first s").animate({"top":"108px"},500);});
	
$('.sc2 li,.s2,.sc3 li,.sc9 .hd li').hover(
function() {$(this).find("img").fadeTo("fast", 0.8);},
function() {$(this).find("img").fadeTo("slow", 1);});
$('.sc1 li,.sc0 li,.sc5 li').hover(
function() {$(this).find("img").fadeTo("fast", 0.60);},
function() {$(this).find("img").fadeTo("slow", 1);});
});
//top
var topMain=$(".head").height()+ $(".top").height()
                $(window).scroll(function(){
                    if ($(window).scrollTop()>topMain){
                        $(".tp").slideDown(500);
                    }
                    else
                    {
                        $(".tp").slideUp(500);
                    }
                });	