# slowScroll2id
## Slow scroll to id on page, use jQuery

Данный плагин осуществляет плавную прокрутку к элементу с id ссылки на элементы

Перед использованием плагина необходимо подключить библиотеку jQuery

Вставить в HTML документ после подключения jQuery slowScroll.js

```
  <a href="#link">Ссылка на элемент с id=link</a>
  <div id="link"></div>
```

slowScroll.js

 ```
 $(function() {
	$('a[href^="#"]').on('click', function(){
		var el = $(this).attr('href');
		$('html, body').animate({
		scrollTop: $(el).offset().top}, 'slow');
		return false;
		});
});
 ```
