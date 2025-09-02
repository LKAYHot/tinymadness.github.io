// downloadImages.js
;(function($){
  $(function() {

    function addDownloadImage(imageUrl, linkUrl, title = 'Download', isLocked = false) {
      const displayTitle = isLocked ? 'Locked' : title;

      // 1) карточка как у #games
      const $wrapper = $('<article>')
        .addClass('game-card download-card')       // <— общий стиль игры + наш флаг
        .toggleClass('locked', Boolean(isLocked));

      // 2) кликабельная обложка
      const $link = $('<a>').addClass('game-cover');
      if (!isLocked) {
        $link.attr({ href: linkUrl, target: '_blank', rel: 'noopener' });
      }

      // 3) фон-картинка с глитчом
      const $img = $('<div>')
        .addClass('download-image')                // <— на нём псевдоэлементы ::before/::after (glitch)
        .attr('data-image', imageUrl)
        .css('background-image', `url('${imageUrl}')`);

      // 4) бейдж как у #games (цвета — как translated/vo)
      const $badge = $('<span>')
        .addClass('game-badge')
        .addClass(isLocked ? 'badge--vo' : 'badge--ok')
        .text(displayTitle);

        if (isLocked) {
  $link.append(
    $('<div>').addClass('lock-veil'),
    $('<div>').addClass('lock-strap').append($('<span>').text('НЕ ДОСТУПНО')),
    $('<div>').addClass('lock-sigil')
  );
}

      // сборка
      $link.append($img, $badge);
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
      'Old version', false
    );
   addDownloadImage(
      'https://i.playground.ru/p/QybawNNEeUglN8wU88tIrw.webp',
      '',
      'Full localization', true
    );

  });
})(jQuery);
