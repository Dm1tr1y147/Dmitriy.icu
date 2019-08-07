$(function() {
var title = document.title;
$(window).scroll(function() {
	var height = ((title == "Dmitriy Shishkov") ? $(window).height() : 0);
	height = height - height / 9;
	if($(this).scrollTop() > height) {
		$("nav").attr('id', 'shadow');
	} else {
		$("nav").attr('id', '');
	}
});
$(".nav-toggle").click(function() {
	$(this).toggleClass("opened");
	$("nav ul").toggleClass("showen");
    $("body").toggleClass("overflowhidden");
});

$('#totop').click(function(){
    $("html,body").animate({
        scrollTop: 0
    }, 2000);
});

$("main img").click(function () {
		var src = $(this).attr('src');
		var pose = src.indexOf(".j");
		var a = src.substring(0,pose);
		var b = src.substring(pose);
		$("body").append("<div id='popup'>"+"<div id='popupBg'></div>"+"<img src='"+a+"b"+b+"' id='popupImg' />"+"</div>");
		$("#popup").css("display", "flex").hide().fadeIn(800);
		$("#popup").click(function(){	   
			$("#popup").fadeOut(800);
			setTimeout(function() {
			  $("#popup").remove();
			}, 800);
		});
});
});

