let counter = 1;
let image = document.querySelector('.blog').getElementsByTagName('img');

let CARD_TITLE = [
    'some',
    'Colourful Offer ;',
    'Running Offer ;',
    'Сообщение 3',
    'Сообщение 4',
    'Сообщение 5',
    'Сообщение 6'
];

let CARD_DESCRIPTION = [
    "some",
    'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive ',
    'Pellentesque at semper nisi. Cras venenatis ante vel sollicitudin dignissim. Nulla at dictum eros, nec tempor augue. Sed elit ligula, volutpat quis ex sit amet, sodales cursus neque. Curabitur fermentum nunc semper lectus hendrerit dictum. Quisque libero tellus, tincidunt nec sem vel, iaculis dictum urna. Vivamus',
    'Белых сугробов могила, Мягкая, как молоко, Водка нас научила, Что умирать легко. Лампы, словно планеты,Над головой плывут. Травматология это? Или последний суд?',
    'Крылья ли нас укрыли? Вьюгой ли занесло? Зимы нас научили, Что замерзать тепло. Движемся горизонтально Без помощи рук и ног, В безграничную спальню, Где, может быть, встретит Бог.',
    'Схлопнется без усилий Все это шапито. Бабы нас научили, Что по нам не заплачет никто. Жмутся по стенам тени. Тот или этот свет? Надо бы встать на колени, Только коленей нет.',
    'Тел отдельные части Трудно в пазл совместить. Нас научило начальство Не верить и не просить. От соли в глазах слезится, Бездействует телефон, Сквозь волны мутного Стикса Везет угрюмый Харон.',
    'Держа за щекой монету, Вцепившись рукой в корму, Ученье приводит к свету, А неученье во тьму. Не достанет там безопасность, Не насыплют бесплатный корм, Но наступит полная ясность — Абсолютная четкость форм.'
];

document.querySelector('.slider__number').textContent = '0' + counter;
document.querySelector('.blog').querySelector('.card__title').textContent = CARD_TITLE[counter];
document.querySelector('.blog').querySelector('.card__description').textContent = CARD_DESCRIPTION[counter];

let buttonBackClick = function (e){
    counter--;
    if (counter<1) {
        counter=6;
    }
    console.log('\"image/blog-' + counter +'.jpg\"');
    document.querySelector('.slider__number').textContent = '0' + counter;
    document.querySelector('.blog').querySelector('.card__title').textContent = CARD_TITLE[counter];
    document.querySelector('.blog').querySelector('.card__description').textContent = CARD_DESCRIPTION[counter];
    let element = document.getElementById('pictureImage');
    element.src = 'image/blog-' + counter +'.jpg';
}

let buttonForwardClick = function (e){
    counter++;
    if (counter>6) {
        counter=1;
    }
    console.log('\"image/blog-' + counter +'.jpg\"');
    document.querySelector('.slider__number').textContent = '0' + counter;
    document.querySelector('.blog').querySelector('.card__title').textContent = CARD_TITLE[counter];
    document.querySelector('.blog').querySelector('.card__description').textContent = CARD_DESCRIPTION[counter];
    let element = document.getElementById('pictureImage');
    element.src = 'image/blog-' + counter +'.jpg';
    //image.setAttribute('src','image/blog-' + counter +'.jpg');
}