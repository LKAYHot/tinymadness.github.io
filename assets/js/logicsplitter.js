document.addEventListener("DOMContentLoaded", function () {
    const newsData = `
    /--
    && Текстуры
    &^ &!https://cdn.discordapp.com/attachments/1011297758017224764/1198648250882863262/432342243_-1.png?ex=65bfab2c&is=65ad362c&hm=f44328c604e62bb7b06da29c67c9a71325aaac5841671c11b37ad1509f37958c&!&
    &^ Мы ещё живы и активно занимаемся переводом прекрасной LGTS. И вот буквально недавно нашли способ корректной подмены текстур.
    &^ Так что теперь можем открыть вам завесу тайны, четвертая плашка на нашем сайте и означала "текстуры", но в тот момент мы искали разные методы замены текстур без подмены файлов игры (проблема с разными версиями игры).
    &^ Тизер как всегда можно будет найти в нашем ?&дискорд сервере =>https://discord.gg/2TdQkzZgAH<=&?.

    
    /--
    && Перевод от нас
    &^ &!https://cdn.discordapp.com/attachments/1011297758017224764/1196107669744930907/3424324322.jpg?ex=65b66d13&is=65a3f813&hm=8a15ed551e61b244f457da2da2b39ad670ce8d8468c5ddaee6577d78faeb27b7&!&
    &^ ?&Little Goody Two Shoes =>https://vgtimes.ru/games/little-goody-two-shoes/<=&? — это сюжетная приключенческая игра в жанре ужаса. Ее действие происходит в сказочном мире, нарисованном вручную. В ней предусмотрено 10 различных концовок, зависящих от ваших действий и решений... Но и это еще не все, потому что для того, чтобы остаться в живых, вам надо следить еще и за повседневной деревенской жизнью Элизы.

    &^ Помните: любой выбор имеет значение! Днем вам надо укреплять дружбу Элизы с соседями и зарабатывать на жизнь, играя в забавные мини-игры. А после появления луны придется следить, чтобы ваша героиня оставалась сытой, здоровой и вменяемой после встреч с опасными врагами в лесных трущобах.

    &^ Однако из-за отсутствия официального перевода многие фанаты из СНГ не могли полноценно насладиться всеми аспектами игры. Теперь это в прошлом, команда TinyMadness, решила заняться полным неофициальным переводом Little Goody Two Shoes. Разработка уже идёт, выпущен первый тизер локализации.

    &^ Релиз ожидается уже в этом году.
    `;

    const newsSections = newsData.split('/--').filter(Boolean);

    const newsContainer = document.body;

    newsSections.forEach(sectionData => {
        const parts = sectionData.split('&&').map(str => str.trim());
        const title = parts[0];
        const contentParts = parts.slice(1).map(part => part.split('&^'));

        // Check if there is any content before creating the section
        if (contentParts.length > 0 && contentParts[0][0].trim() !== "") {
            const content = contentParts.map(([subTitle, ...paragraphs]) => `<h3>${subTitle}</h3>${paragraphs.map(paragraph => {
                // Check for the presence of clickable links with hidden URLs
                const linkRegex = /\?&(.+?) =>(.+?)<=&\?/g;
                return paragraph.replace(linkRegex, (_, linkText, hiddenUrl) => {
                    return `<a href="${hiddenUrl}" target="_blank">${linkText}</a>`;
                });
            }).join('</p><p>')}`).join('</p><p>');

            // Check for the presence of image links
            const imageLinkRegex = /&\!(.+?)\!&/g;
            const hasImage = imageLinkRegex.test(content);

            // Create a custom section with class 'section-ladder'
            const section = document.createElement('section');
            section.classList.add('section-ladder');

            const roundedBox = document.createElement('div');
            roundedBox.classList.add('rounded-box');

            // If there is an image link, create an <img> element and append it to the rounded box
            if (hasImage) {
                const imageLink = content.match(imageLinkRegex)[0];
                const imageUrl = imageLink.replace(/&\!(.+?)\!&/, '$1');
                const imageElement = document.createElement('img');
                imageElement.src = imageUrl;

                // Set style to center the image and limit its size within the rounded box
                imageElement.style.display = 'block';
                imageElement.style.margin = 'auto';
                imageElement.style.width = '100%';  // Растягиваем по ширине roundedBox

                if (window.innerWidth <= 768) {
                    // For mobile devices, set a maximum width for the image
                    imageElement.style.margin = 'auto';
                    imageElement.style.width = '180%';  // Растягиваем по ширине roundedBox
                    imageElement.style.height = '200px';  // Растягиваем по ширине roundedBox
                } else {
                    // For desktop devices, set a different maximum width for the image
                    imageElement.style.maxWidth = '100%';
                }

                // Append the image to the rounded box
                roundedBox.appendChild(imageElement);
            }

            const heading = document.createElement('h2');

            heading.textContent = title;
            const paragraphContainer = document.createElement('div');
            paragraphContainer.innerHTML = `<p>${content.replace(imageLinkRegex, '')}</p>`; // Exclude content between &! and !&
            
            // Append the rounded box above the section heading
            section.appendChild(roundedBox);
            section.appendChild(heading);
            section.appendChild(paragraphContainer);

            newsContainer.appendChild(section);
        }
    });
});