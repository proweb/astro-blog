---
title: "Как изменить шрифт в редакторе Gutenberg WordPress?"
description: "По умолчанию редактор Gutenberg в WordPress идет со шрифтом Noto Serif, что если он вас не устраивает и как его поменять, читайте в этом материале."
date: "2019-02-20"
---

Изначально, когда вы включаете Gutenberg в WordPress редактирование записей в нем идет со шрифтом Noto Serif который относится к семейству serif-шрифтов, или так называемых шрифтов «с засечками».

Я не любитель подобных шрифтов в вебе, мне как то ближе использование sans-serif — ровных шрифтов «без засечек». С самого выхода и установки Gutenberg у меня стоял вопрос, как же поменять шрифт в редакторе WordPress Gutenberg, если шрифт по-умолчанию не устраивает? Все оказывается не так сложно!

## Меняем дефолтный шрифт в редакторе WordPress Gutenberg.

Так как на блоге я использую Open Sans, то и при редактировании постов в Gutenberg я тоже хотел бы видеть этот шрифт.

Поэтому нам надо переписать дефолный шрифт на свой, подключив файл стилей и переопределив настройки шрифта в CSS.

![Gutenberg с измененным шрифтом](/images/change-gutenberg-font.png)

Для этого откроем файл `functions.php` своей темы WordPress и добавим простой код:

``` php
function my_gutenberg_style() {
	wp_enqueue_style(
		'my-gutenberg-editor-style',
		get_stylesheet_directory_uri() . "/editor.css",
		array(),
		'1.0'
	);
}
add_action('enqueue_block_editor_assets', 'my_gutenberg_style');
```

`enqueue_block_editor_assets` это специальный hook WordPress, который позволяет добавить в Gutenberg свои стили и скрипты. В данном случае я использую его чтобы добавить подгрузку файла `editor.css` в редактор.

Файл `editor.css` размещается в корне темы и в нем уже мы добавляем свои стили для редактора, мой в частности выглядел так:

``` css
.editor-post-title__block .editor-post-title__input,
.edit-post-visual-editor, .edit-post-visual-editor p {
 font-family: "Open Sans", sans-serif;
}
.editor-post-title__block .editor-post-title__input {
  font-size: 40px;
  font-weight: 300;
  letter-spacing: -.45px;
  line-height: 1.25;
}

.edit-post-visual-editor, .edit-post-visual-editor p,
.editor-rich-text__tinymce.mce-content-body {
 font-size: 20px;
 line-height: 30px;
}
```

Вот так быстро и несложно мы поменяли базовый шрифт в визуальном редакторе Gutenberg для WordPress.