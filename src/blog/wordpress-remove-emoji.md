---
title: "Эмоции и WordPress. Как удалить эмоции и его код из шаблона WordPress"
description: "Emoji появились в WordPress 4.2. Однако они генерируют дополнительный код, который иногда мешает, разберемся как убрать его из вашей темы WordPress."
date: "2018-06-23"
---

С приходом версии WordPress 4.2 в нем появилась поддержка Эмоций (Emoji) и они стали частью любого сайта на WordPress.

## Что представляют из себя Emoji?

Набор смайликов Emoji — это стандартизированный набор иконок, обозначающих и дающих эмоциональную окраску текстам на сайтах или в сообщениях. Они основан на расширении кодировки UTF-8, каждая иконка кодируется своим кодом и разработчики WordPress почему то решили, что их добавление в ядро CMS пойдет на пользу…

Однако посмотрев на то как это было сделано, я мягко говоря удивился…
Если раньше шаблон WordPress был более менее чистый, то теперь, после обновления до WordPress 4.2 имеем дополнительный код(инлайн стили и javascript):

``` js
window._wpemojiSettings = {"baseUrl":"http://s.w.org/images/core/emoji/72x72/","ext":".png","source":{"concatemoji":"http://URL-of-your-website/wp-includes/js/wp-emoji-release.min.js?ver=4.2.1"}};
    !function(a,b,c){function d(a){var c=b.createElement("canvas"),d=c.getContext&amp;&amp;c.getContext("2d");return d&amp;&amp;d.fillText?(d.textBaseline="top",d.font="600 32px Arial","flag"===a?(d.fillText(String.fromCharCode(55356,56812,55356,56807),0,0),c.toDataURL().length&gt;3e3):(d.fillText(String.fromCharCode(55357,56835),0,0),0!==d.getImageData(16,16,1,1).data[0])):!1}function e(a){var c=b.createElement("script");c.src=a,c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var f;c.supports={simple:d("simple"),flag:d("flag")},c.supports.simple&amp;&amp;c.supports.flag||(f=c.source||{},f.concatemoji?e(f.concatemoji):f.wpemoji&amp;&amp;f.twemoji&amp;&amp;(e(f.twemoji),e(f.wpemoji)))}(window,document,window._wpemojiSettings);

img.wp-smiley,
img.emoji {
    display: inline !important;
    border: none !important;
    box-shadow: none !important;
    height: 1em !important;
    width: 1em !important;
    margin: 0 .07em !important;
    vertical-align: -0.1em !important;
    background: none !important;
    padding: 0 !important;
}
```

Насколько красиво это было сделано пусть останется на совести разработчиков ядра, однако мне этот код, да и сами Emoji на сайтах c WordPress, особенно корпоративных не нужен вовсе.

## Как удалить код Emoji из WordPress?

Мы воспользуемся файлом `functions.php` нашей темы wordpress для удаления этого кода.
Подключаемся по FTP к серверу нашего сайта, заходим в папку с нашим шаблоном — что то наподобие `wp-content/themes/themeName` и находим там файл `functions.php`

Открываем его и добавляем 2 строки кода:

``` php
// REMOVE EMOJI ICONS
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
```

Теперь сохраняем файл после редактирования, заходим на сайт и смотрим, что код исчез.

Как альтернативу, людям не желающим возиться с кодом — рекомендуем воспользоваться готовым плагином [Disable Emojis](https://wordpress.org/plugins/disable-emojis/)