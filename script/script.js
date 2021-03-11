$(function(){
    $("#mainMenu>li").mouseover(function(){
        $(".subMenu").stop().slideDown(500);
        $("#bgArea #subMenuBG").stop().slideDown(500);
    });

    $("#mainMenu>li").mouseout(function(){
        $(".subMenu").stop().slideUp(500);
        $("#bgArea #subMenuBG").stop().slideUp(500);
    });







});
