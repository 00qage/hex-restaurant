
$(document).ready(function () {
    $('.burgermenu-icon').click(function (e) { 
        e.preventDefault();
        $('body').toggleClass('menu-show');
        $('.header-box').fadeToggle(700);
    });
});