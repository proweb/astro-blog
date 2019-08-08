---
title: "Карусель Slick внутри Bootstrap tabs и Equal height"
description: "Как решить баги карусельки Slick при ее использовании внутри Bootstrap tabs и как сделать все слайды карусельки одинаковыми по высоте. Пример решения задачи."
date: "2018-06-22"
---

![Карусель Slick внутри Bootstrap tabs и Equal height](/images/slick-1.png)

На этой неделе шаманили над новым сайтом. Задачка не сильно сложная — лендинг для мероприятия.

В процессе разработки возникла задача сделать карусельку из нескольких слайдов (для прокрутки мероприятий и списка спонсоров)

В качестве достаточно неплохо выполненной карусельки на JQuery выбор пал на Slick ([репозиторий на github](https://github.com/kenwheeler/slick))

Сама верстка выполнялась с использованием Bootstrap третей версии, а карусельку по задаче надо было разместить внутри bootstap tabs

То есть было — 5 табов — внутри каждого таба своя карусель. Первая вкладка активна по умолчанию — проблем нет, а вот при открытии последующих наблюдался очень неприятный баг — слайды карусельки не разворачивались и тупо «кучковались» на первом слайде.

Благо у нас есть github где удалось найти решение данной проблемы:

### [Само решение](http://github.com/kenwheeler/slick/issues/187#issuecomment-59123524)

Код (то что необходимо добавить в CSS):

``` css
/* Based on https://github.com/kenwheeler/slick/issues/187#issuecomment-59123524 */
/* bootstrap hack: fix content width inside hidden tabs */
.tab-content > .tab-pane,
.pill-content > .pill-pane {
    display: block;    /* undo display:none          */
    height: 0;         /* height:0 is also invisible */
    overflow: hidden;  /* no-overflow                */
}
.tab-content > .active,
.pill-content > .active {
    height: auto;      /* let the content decide it  */
}
/* bootstrap hack end */
```

Это решило проблему нормального отображения Slick-карусели внутри табов третьего бутстрапа.

Однако помимо прочего, также хотелось получить одинаковую высоту слайдов карусельки, которые по умолчанию, как оказалось, подстраивались под содержимое контейнера самого слайда, в итоге мы получали различную высоту при прокрутке карусельки.

Сам же репозиторий проекта и подсказал решение данного вопроса

В JS просто добавляем:

``` js
$(window).load(function() {
      $('.slides').on('setPosition', function () {
      $(this).find('.slick-slide').height('auto');
      var slickTrack = $(this).find('.slick-track');
      var slickTrackHeight = $(slickTrack).height();
      $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
      });
})
```

Вот такие два решения для Slick возникли в процессе работы.

А вам приходилось сталкиваться с этой каруселькой? Как впечатления?