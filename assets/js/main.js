jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 400});
    
    /* ======= Fixed header when scrolled ======= */
    
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 50) {
             $('#header').addClass('navbar-fixed-top');
         }
         else {
             $('#header').removeClass('navbar-fixed-top');
         }
    });
   
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        // Проверяем, является ли ссылка внешней (не ведущей на текущий сайт)
        if (this.hostname !== window.location.hostname) {
            // Если ссылка ведет на другой сайт, просто переходим по ссылке
            return true;
        }
        
        // Если ссылка ведет на текущий сайт, предотвращаем стандартное поведение перехода по ссылке
        e.preventDefault();

        // Получаем URL из атрибута href ссылки, по которой кликнули
        var targetUrl = $(this).attr('href');

        // Переходим по указанному URL
        window.location.href = targetUrl;
    });

});

function scrollToAbout() {
    var aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
}