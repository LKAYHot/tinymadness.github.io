window.onload = function() {
    var lang = getCookie("lang") || "ru"; 
    changeLanguage(lang);
};

function changeLanguage(lang) {
    document.cookie = "lang=" + lang + "; expires=" + new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();

    var elements = document.querySelectorAll("[data-lang]");

    elements.forEach(function(element) {
        var key = element.getAttribute("data-lang");
        var text = getLocalizedString(key, lang);
        element.textContent = text;
    });
}

function getLocalizedString(key, lang) {
    var localizedStrings = {
        'ru': {
            'discord': 'Дискорд сервер',
            'youtube': 'YouTube канал',
            'lang_ru': 'RU',
            'lang_en': 'EN',
            'promo_intro': 'Нажмите на эту кнопку, чтобы скачать перевод',
            'about_title': 'Статистика',
            'about_statistics': 'Здесь вы можете увидеть небольшую статистику перевода игры Unreal Life.',
            'closing_title': 'TinyMadness',
            'meta_link1': '', 
            'meta_link2': '',
            'telegram': 'Телеграм',
            'download_btn_text': 'ПЕРЕЙТИ К УСТАНОВКЕ',
            'plot_text': 'Главный сюжет',
            'dialogues_text': 'Доп. диалоги',
            'secrets_text': 'Секреты',
            'all_text': 'Всего',
            'games_text': 'Игры',
            'games_trans_text': 'Игры, которые находятся в переводе у TinyMadness.',
            'games_LGTS_trans_desc': 'Это сюжетная приключенческая игра в жанре ужаса. Ее действие происходит в сказочном мире, нарисованном вручную. В ней предусмотрено 10 различных концовок, зависящих от ваших действий и решений',
            'games_UNLIFE_trans_desc': 'Это история путешествия Хару. Сравните воспоминания о прошлом с настоящим, разгадайте тайны и следуйте за девушкой и светофором в этой атмосферной приключенческой игре-головоломке.',
            'translated_status': 'Переведена',
            'inprg_status': 'Скоро выйдет',
        },
        'en': {
            'discord': 'Discord Server',
            'youtube': 'YouTube Channel',
            'lang_ru': 'RU',
            'lang_en': 'EN',
            'promo_intro': 'Click on this button to download translation',
            'about_title': 'Statistics',
            'about_statistics': 'Here you can see a little statistics about translation of game Unreal Life.',
            'closing_title': 'TinyMadness',
            'textures_title': 'Textures',  
            'plot_title': 'Plot',  
            'task_title': 'Tasks',  
            'meta_link1': '', 
            'meta_link2': '',
            'telegram': 'Telegram Channel',
            'download_btn_text': 'GO TO DOWNLOAD PAGE',
            'plot_text': 'Main plot',
            'dialogues_text': 'Sub. dialogues',
            'secrets_text': 'Secrets',
            'all_text': 'All',
            'games_text': 'Games',
            'games_trans_text': 'Games that are translated by TinyMadness.',
            'games_LGTS_trans_desc': 'This is a story-driven horror adventure game. It takes place in a hand-drawn fairy-tale world. It has 10 different endings depending on your actions and decisions',
            'games_UNLIFE_trans_desc': "This is the story of Haru's journey. Compare memories of the past with the present, solve mysteries and follow the girl and the traffic light in this atmospheric puzzle adventure game.",
            'translated_status': 'Translated',
            'inprg_status': 'In Progress',             
           }
    };

    return localizedStrings[lang][key];
}

function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}
