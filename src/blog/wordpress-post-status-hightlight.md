---
title: "Подсветка статусов ваших постов в админке WordPress"
description: "Выглядит достаточно красиво и позволяет визуально определить где черновики, где уже опубликованные записи, где будущие записи, которые еще не опубликованы Что…"
date: "2018-08-14"
---

Не секрет что посты в админке WordPress идут списком общим друг за другом. Визуально не всегда понятно где записи которые уже опубликованы, где черновики и т.д.
Дабы решить эту проблему, некоторые разработчики придумали "раскрашивать" записи в зависимости от их статуса.

![](/images/color-posts-wpadmin.jpg)

Как это сделать? Добавить небольшой кусочек кода в ваш `functions.php` активной темы:

``` php
add_action('admin_footer','posts_status_color');

function posts_status_color() { ?>

<style>
.status-draft{background: #FCE3F2 !important;}
.status-pending{background: #87C5D6 !important;}
.status-publish{/* no background keep wp alternating colors */}
.status-future{background: #C6EBF5 !important;}
.status-private{background:#F2D46F;}
</style>
<?php
}
```

Все теперь у вас разноцветные посты в зависимости от их статуса.