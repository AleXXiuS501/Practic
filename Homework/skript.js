$(document).ready(function () {
    
    $('.modal').css("top", "-200px");
        
    $('.main_btna, .main_btn, .schedule').on('click', function() {
        $('.overlay:first').fadeIn();
		$('.modal:first').animate({
			opacity: 'show',
			top: '0'
        },
            1000);
    });

    $('.close').on("click", function(){
        $('.overlay:first').fadeOut();
        $('.modal:first').animate(
        {
            opacity: "hide",
            top: "-200px"
        },1000);
    });

    $('.overlay:first').mouseup(function (e) { // по клику вне модального окна
    let popup = $('.modal:first');
        if (e.target!=popup && popup.has(e.target).length === 0) {
            $('.overlay:first').fadeOut()
            $('.modal:first').animate(
                {
                    opacity: "hide",
                    top: "-200px"
                },
                    1000);
        }
    });          
});
