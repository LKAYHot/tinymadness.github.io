;(function($){
  $(function() {

    function addDownloadImage(imageUrl, linkUrl, title = 'Скачать', isLocked = false) {
      const displayTitle = isLocked ? 'Недоступно' : title;

      const $wrapper = $('<div>')
        .addClass('download-image-wrapper')
        .toggleClass('locked', Boolean(isLocked));

      const $link = $('<a>');
      if (!isLocked) {
        $link.attr({ href: linkUrl, target: '_blank' });
      }

      const $img = $('<div>')
        .addClass('download-image')
        .attr('data-image', imageUrl)
        .css('background-image', `url('${imageUrl}')`);

      const $overlay = $('<div>')
        .addClass('text-overlay')
        .append(
          $('<p>').addClass('title').text(displayTitle)
        );

      $link.append($img, $overlay);
      $wrapper.append($link);
      $('.download-section').append($wrapper);
    }

    // Добавляем нужные изображения
    addDownloadImage(
      'https://tinymadness.online/assets/images/littleGoody.webp',
      'https://drive.google.com/drive/folders/16vxo5qjJBM3HbJdi9R1_WdekKyiOjSOi?usp=sharing'
    );

    addDownloadImage(
      'https://tinymadness.online/assets/images/Unreal.webp',
      'https://drive.google.com/drive/folders/18wxndQJ6eGrGeeamWedpsrm5HVDnLscS?usp=sharing'
    );

    addDownloadImage(
      'https://cdn1.epicgames.com/spt-assets/a3843e0de6d545b3957ce2173972092c/five-nights-at-freddys-secret-of-the-mimic-1sy98.png',
      'https://drive.google.com/drive/folders/11U_q2lq9MKUWS_OWG_0v4cHLWXOG_Poe?usp=sharing',
      'Старая версия',
    );
    

  });
})(jQuery);
