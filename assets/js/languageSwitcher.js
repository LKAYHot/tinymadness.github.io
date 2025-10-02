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
            'about_info': 'TinyMadness — это сообщество энтузиастов, создающее качественные русскоязычные локализации инди-игр, а также разрабатывающее собственные приложения и игровые проекты. Наша цель — делать игры и софт доступными для широкой аудитории, сохраняя атмосферу и стиль оригинальных идей, а также предлагать новые решения и проекты, созданные с вниманием к деталям и любовью к делу. Присоединяйтесь к нам в Discord или Telegram, чтобы не пропустить новости и принять участие в работе над переводами и разработкой!',
            'about_title': 'О нас',
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
            'games_FNAF_trans_desc': 'Войдите в заброшенную Мастерскую Костюмов Мюррея и раскройте тайну, оставленную затворником-изобретателем Эдвином Мюрреем. В Five Nights at Freddy’s: Secret of the Mimic вы окажетесь в мире, где каждый темный угол хранит секрет, а каждый мерцающий огонек намекает на присутствующую угрозу.',
            'translated_status': 'Переведена',
            'translated_voice': 'В процессе',
            'inprg_status': 'Скоро выйдет',
        },
        'en': {
            'discord': 'Discord Server',
            'youtube': 'YouTube Channel',
            'lang_ru': 'RU',
            'lang_en': 'EN',
            'promo_intro': 'Click on this button to download translation',
            'about_title': 'About us',
            'about_info': 'TinyMadness is a community of enthusiasts creating high-quality Russian localizations of indie games while also developing original apps and game projects. Our mission is to make games and software accessible to a wide audience, preserving the atmosphere and style of the original ideas while delivering new projects built with passion and attention to detail. Join us on Discord or Telegram to stay updated and take part in our work on translations and development!',
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
            'games_FNAF_trans_desc': 'Enter the abandoned workshop of Murray’s Costume Manor and unravel the mystery left behind by the reclusive inventor. In Five Nights at Freddy’s: Secret of the Mimic, you’ll step into a world where every dark corner holds a secret and every flicker of light hints at an ever-present threat.',
            'translated_status': 'Translated',
            'translated_voice': 'In progress',
            'inprg_status': 'In Progress',             
           }
    };

    return localizedStrings[lang][key];
}

function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}
