$(document).ready(function(){
    $('a').click(function (event) {
        event.preventDefault();

        var sectionId = $(this).attr("data-section"),
            $toSlide = $("main section#" + sectionId),
            $fromSlide = $('.active');

        if (!($toSlide.hasClass("active"))) {
            $fromSlide.animate({
                "left": "-100%"
            }, 50, 'linear')
            $toSlide.animate({
                "left": "0%"
            }, 50, 'linear', function () {
                $fromSlide.css("left", "100%");
                $fromSlide.removeClass("active");
                $toSlide.addClass("active");
            });
        }
    });

    $("span.wish").hover(function(){
        $(this).addClass('wishHover')
    });
    $("span.burrow").hover(function(){
        $(this).addClass('burrowHover')
    });
    $("span.crunch").hover(function(){
        $(this).addClass('crunchHover')
    });
    $("span.nothing").hover(function(){
        $(this).addClass('nothingHover')
    });
    $("span.sores").hover(function(){
        $(this).addClass('soresHover')
    });
    $("span.patience").hover(function(){
        $(this).addClass('patienceHover')
    });
    $("span.hope").hover(function(){
        $(this).addClass('hopeHover')
    });
    $("span.eyes").hover(function(){
        $(this).addClass('eyesHover')
    });
    $("span.repose").hover(function(){
        $(this).addClass('reposeHover')
    });
    $("span.hang").hover(function(){
        $(this).addClass('hangHover')
    });
    $('.text1').mouseover(function () {
        $('.pic1').slideToggle(400);
    });
    $('.text2').mouseover(function () {
    $('.pic2').slideToggle(400);
    });
    $('.text3').mouseover(function () {
    $('.pic3').slideToggle(400);
    });
    $('.text4').mouseover(function () {
    $('.pic4').slideToggle(400);
    });
    $('.text5').mouseover(function () {
    $('.pic5').slideToggle(400);
    });
    $('.text6').mouseover(function () {
    $('.pic6').slideToggle(400);
    });
    $('.text7').mouseover(function () {
    $('.pic7').slideToggle(400);
    });
    $('.text8').mouseover(function () {
    $('.pic8').slideToggle(400);
    });
});
function reloadPage() {
    location.reload();
}