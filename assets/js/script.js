/**
 * Created by hyunjungshin on 2018-01-04.
 */
$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        arrows: false,
        cssEase: 'ease-out',
        // useTransform: true,
        fade: true,

        // customPaging : function(slider, i) {
        //     return '<a><img src="assets/images/meDot.png" class="dots"/><img src="assets/images/me.jpeg" class="dots"/></a>';
        // },

        customPaging : function(slider, i) {
            if(i == 0){
                return '<a><img src="assets/images/post-it.png" class="dots"></a>';
            }else if(i == 1){
                return '<a><img src="assets/images/post-it.png" class="dots"></a>';
            }else if(i == 2){
                // var thumb = $(slider.$slides[i]).data('thumb');
                return '<a><img src="assets/images/post-it.png" class="dots"></a>';
            }else{
                // var thumb = $(slider.$slides[i]).data('thumb');
                return '<a><img src="assets/images/post-it.png" class="dots"></a>';
            }
        },

        responsive: [{
            breakpoint: 500,
            settings: {
                dots: false,
                arrows: false,
                infinite: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
        // prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/shoe_story/arrow-left.png'>",
        // nextArrow:"<img class='a-right control-c next slick-next' src='../images/shoe_story/arrow-right.png'>"
    });
});