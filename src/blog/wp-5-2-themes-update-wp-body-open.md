---
title: "WordPress 5.2 важное обновление в темах"
description: "Согласно официальному блогу, с выходом версии WordPress 5.2 появится новая функция wp_body_open"
date: "2019-04-16"
---

![](/images/add_action_wp_body.jpg)

Согласно официальному блогу, с выходом версии WordPress 5.2 появится новая функция `wp_body_open()` которая будет запускать action — `wp_body_open`

Согласно исходникам эта функция должна идти обязательно сразу после тега `<body>`

## Причина появления wp_body_open()

Когда разработчик или маркетолог встраивает код Google Analytics или Метрики или Facebook Pixel в тему WordPress, то обычно это делается через action: `wp_head` или `wp_footer`, цепляя нужный код к ним.

Обычно это выглядит вот так:

``` php
function custom_code() {
    return '<!-- some code -->';
}
add_action( 'wp_head', 'custom_code' );
```

Функция `wp_head()` представленная в WordPress 1.2.0, запускает action `wp_head` который добавляет код в `<head>` тэг.

Функция `wp_footer()` представленная в WordPress 1.5.1, запускает action `wp_footer` который добавляет перед закрытием тега `<body>`.

Проблема в том, что невозможно в текущей реализации шаблонов добавить скрипты или стили сразу после тега `<body>`. Это было основной претензией со стороны маркетологов к WordPress, т.к. им нужно было добавлять код после открытия тега `<body>`

## Новая структура темы

В WordPress 5.2 представлена функция `wp_body_open()` которая запускает action `wp_body_open`. Все «родные» темы используют ее в файле `header.php`

С выходом WordPress 5.2 структура темы стала такой:

``` php
<?php // WordPress 5.2 Theme Structure ?>
<html>
  <head>

    ..
    ..

    <?php wp_head(); ?>

  </head>
  <body>

    <?php wp_body_open(); ?>

    ..
    ..

    <?php wp_footer(); ?>

  </body>
</html>
```

## Обновление тем

Если вы разработчик и создаете свои темы для WordPress, то необходимо внедрить новую функцию в ваши темы с выходом WordPress 5.2
