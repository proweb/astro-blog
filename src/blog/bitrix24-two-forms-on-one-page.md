---
title: "Две формы Битрикс24 на одной странице"
description: "При верстке страницы одного из сайтов клиента столкнулся с тем, что по макету на странице было выставлено две формы. Т.к. в качестве CRM клиент использует"
date: "2017-08-26"
---

При верстке страницы одного из сайтов клиента столкнулся с тем, что по макету на странице было выставлено две формы. Т.к. в качестве CRM клиент использует Битрикс24 то это должны были быть именно CRM-формы Битрикс, которые отправляли данные непосредственно в CRM

В коде страницы было размещен код, два раза, т.к. мы имеем две формы. Но на удивление при просмотре страницы отображалась лишь одна форма, что меня несколько удивило.

В процессе общения со службой поддержки Битрикс24 было выяснена недокументированная возможность, благодаря которой можно разместить код формы Битрикса24 два раза.

Необходим контейнер в виде div элемента с определенным id к которому привязывается вторая форма, без него и параметра node в коде, вторая форма просто не появится.

``` js
<div id="my_container"></div> <!-- Form container -->
<!-- JS code from CRM Bitrix24 -->
<!-- Added "node" parametr -->
<script id="bx24_form_inline" data-skip-moving="true">
     (function(w,d,u,b){w['Bitrix24FormObject']=b;w[b] = w[b] || function(){arguments[0].ref=u;
             (w[b].forms=w[b].forms||[]).push(arguments[0])};
             if(w[b]['forms']) return;
             s=d.createElement('script');r=1*new Date();s.async=1;s.src=u+'?'+r;
             h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
     })(window,document,'http://cp.silaev.bx/bitrix/js/crm/form_loader.js','b24form');

     b24form({"id":"6","lang":"ru","sec":"ivscxd","type":"inline", "node": document.getElementById('my_container')});
</script>
```

__Updated__: а вот и официальное руководство появилось — [https://helpdesk.bitrix24.ru/open/6200265/](https://helpdesk.bitrix24.ru/open/6200265/)