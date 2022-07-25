$("#learnMore").on("click", function(){

    $('html, body').animate({
        scrollTop: $(".leftResume").offset().top
    }, 500);

});