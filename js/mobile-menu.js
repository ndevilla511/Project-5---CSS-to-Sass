//Mobile Menu

var $sideMenu = $('<div class="side-menu"></div>');
var $mainNav = $('.main-nav');
var $navicon = $('.navicon');

//Clone, show, and append main-nav to side menu div
$mainNav.clone().show().appendTo($sideMenu);

//Append side menu div to body
$('body').append($sideMenu);


//When icon is clicked/tapped, navigation menu slides in from the left side
$navicon.add('.side-menu a').click(function() {
    if (!$sideMenu.hasClass('on')) {
        $navicon.animate({left: "+=220px","background-color": "#5a5a5a"}, {duration: 500, queue: false});
        $sideMenu.animate({left: "0px"}, {duration: 500, queue: false, complete: function() {
            $(this).addClass('on');
        }});
    } else {
        $navicon.animate({left: "-=220px", "background-color": "#f5f5f5"}, {duration: 500, queue: false});
        $sideMenu.animate({left: "-=220px"}, {duration: 500, queue: false, complete: function() {
            $(this).removeClass('on');
        }});
    }
})


$( window ).resize(function() {
    if ($(window).width() > 768 && $sideMenu.hasClass('on')) {
        $navicon.css({"left": 0, "background-color": "#f5f5f5"});
        $sideMenu.animate({left: "-220px"}, {duration: 500, queue: false, complete: function() {
            $(this).removeClass('on');
        }});
    }
});