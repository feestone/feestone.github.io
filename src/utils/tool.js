$('body').on('click', '.detailCont img', function() {
    var url = $(this).attr('src');
    var bigimg = '<div class="imgShadow"> ' +
        ' <img src="' + url + '" alt="">'
    '</div>'
    $('body').append(bigimg).addClass('static');
    $('.imgShadow').fadeIn(500)
    $('body')
})
$('body').on('click', '.imgShadow', function() {
    $('body').removeClass("static")
    $('.imgShadow').fadeOut(500, function() {
        $('.imgShadow').remove();
    });
})
$(window).scroll(function() {
    if ($(window).scrollTop() > 1000) {
        $("#toTop").fadeIn(500);
    } else {
        $("#toTop").fadeOut(500);
    }
});
$("body").on('click', '#toTop', function() {
    $('body,html').animate({ scrollTop: 0 }, 1000);
    return false;
});