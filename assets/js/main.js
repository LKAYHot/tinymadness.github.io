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

function generateDates() {
  let dates = [];
  let currentDate = new Date();
  for (let i = 0; i < 7; i++) {
      let nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      dates.push(nextDate);
  }
  return dates;
}

function readDataFromGoogleSheets(callback) {
  
}

function updateAdditionalData(additionalData, additionalData1) {
  console.log('Additional Data:', additionalData);
  console.log('Additional Data1:', additionalData1);

  additionalData1.forEach((item, index) => {
    const percentElement1 = document.querySelectorAll('.bar')[index];
    if (percentElement1) {
      const fillElement = percentElement1.querySelector('.fill');

      const labelElement = percentElement1.querySelector('.label');

      labelElement.innerText = `${item.label} ${item.value}%`;
      console.log('ElementMain:', fillElement);

      fillElement.style.height = item.value + '%';

      console.log('ElementMain:', fillElement.style.height);
  }
  });

  additionalData.forEach((item, index) => {
      const element = document.querySelector(`.sub-title[data-lang="${item.label}"]`);
      const percentElement = document.querySelectorAll('.plotpercent')[index];

      if (percentElement)
      {
        const valueWithPlus = item.value + '%' + ' ' + '+ 1%';
        const greenPlus = `<span style="color: green;">+ 1%</span>`;
        percentElement.innerHTML = valueWithPlus.replace('+ 1%', greenPlus);
      }

      if (element) {
          const percent = item.value.toFixed(2) + '%';
          const fillHeight = item.value + '%';
          const progressbar = document.querySelector(`.progress-barstatusquary:nth-child(${index + 1})`);

          element.nextElementSibling.innerText = percent; 
          progressbar.style.width = percent;
      }
  });

  document.documentElement.style.setProperty('--first-value', additionalData[0].value + '%');
  document.documentElement.style.setProperty('--second-value', additionalData[1].value + '%');
  document.documentElement.style.setProperty('--third-value', additionalData[2].value + '%');

  const percentElementExtended = document.querySelectorAll('.plotpercent')[3];
  percentElementExtended.textContent = additionalData[2].value + '%' + ' ' + ' + 1%';
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
      data: []
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

  
  
  /* document.addEventListener("DOMContentLoaded", function() {
    var chart = new ApexCharts(document.querySelector("#line-chart"), options);
    readDataFromGoogleSheets((data, additionalData, additionalData1) => {
        chart.updateSeries([{
            data: data
        }]);
        updateAdditionalData(additionalData, additionalData1);
    });
    chart.render(); 
}); */