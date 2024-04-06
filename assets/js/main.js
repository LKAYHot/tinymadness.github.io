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

var options = {
    chart: {
        locales: [{
            "name": "ru",
            "options": {
              "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
              "shortMonths": ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"],
              "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "shortDays": ["Вс", "Mon", "Tue", "Wed", "Thu", "Fri", "Суб"],
            }
          }],
          defaultLocale: "ru",

      type: 'line',
      foreColor: '#347cd5',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      }
      
    },
    stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
        size: 3,
    },
    series: [{
        name: 'Количество строк',
        data: [
        {
          x: new Date('2024-04-03').getTime(),
          y: 100
        },
                {
          x: new Date('2024-04-04').getTime(),
          y: 0
        },
                {
          x: new Date('2024-04-05').getTime(),
          y: 0
        },
                {
          x: new Date('2024-04-06').getTime(),
          y: 230
        },
          {
            x: new Date('2024-04-07').getTime(),
            y: 0
        }]
      }], 
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        offsetY: -10,
        labels: {
          colors: '#347cd5',
        },
      },
      xaxis: {
        type: 'datetime'
      }  
    
  }

  
  
  var chart = new ApexCharts(document.querySelector("#line-chart"), options);
  
  chart.render();