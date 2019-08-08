---
title: "Как установить Sublime Text в Ubuntu"
description: "Краткая инструкция - установка Sublime Text из репозитория Ubuntu."
date: "2018-01-10"
---

Краткая инструкция — установка Sublime Text из репозитория Ubuntu

![установка Sublime Text из репозитория Ubuntu](/images/sublime-text-2.png)

## Установка Sublime Text 2

Добавляем репозиторий Sublime Text 2 Ubuntu PPA :

``` bash
sudo add-apt-repository ppa:webupd8team/sublime-text-2
sudo apt-get update
```

Затем производим установку Sublime Text 2 stable build:

``` bash
sudo apt-get install sublime-text
```

Или Sublime Text 2 development build, на ваш вкус:

``` bash
sudo apt-get install sublime-text-dev
```

## Установка Sublime Text 3

Добавляем репозиторий Sublime Text 3 Ubuntu PPA :
``` bash
sudo add-apt-repository ppa:webupd8team/sublime-text-3
sudo apt-get update
```

Устанавливаем Sublime Text 3:
``` bash
sudo apt-get install sublime-text-installer
```

## Как открыть файл в Sublime через терминал

Все просто, если вы правильно установили редактор из репозитория, то при открытии терминала вы сможете его запустить при помощи команды:
``` bash
subl file.html
```