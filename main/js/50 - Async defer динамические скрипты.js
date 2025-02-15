const p = document.querySelectorAll('p');
console.log(p);

// defer - сообщает браузеру что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме и затем запустить скрипт когда он загрузится. Всегда выполняется когда DOM дерево готово

// async - не ждет загрузку DOM

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript();