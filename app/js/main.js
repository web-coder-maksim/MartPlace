$(function(){

    $(".link-rating").rateYo({
        rating: 4.5,
        starWidth: "16px",
        readOnly: true
    });

    $(".star-rating").rateYo({
        rating: 4.5,
        starWidth: "16px",
        readOnly: true
    });
    

    $('.slider__inner').slick({
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.png" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.png" alt=""></img>',
        fade: true
    });

    var mixer = mixitup('.common-inner');

});