---
title: Redirecting...
layout: minimal
---

<script>
  (async function() {
    // Заходил ли пользователь ранее и выбирал ли язык вручную
    const savedLang = localStorage.getItem('user-language');
    if (savedLang === 'ru' || savedLang === 'en') {
		window.location.replace('/about/' + savedLang + window.location.search);
      return;
    }

    // Системный язык браузера
    const sysLang = navigator.language || navigator.userLanguage;
    if (sysLang.startsWith('ru') || sysLang.startsWith('be') || sysLang.startsWith('uk') || sysLang.startsWith('kk')) {
		window.location.replace('/about/ru' + window.location.search);
      return;
    }

    // Если системный язык не совпал
    try {
      const response = await fetch('https://ipapi.co');
      const data = await response.json();
      const cisCountries = ['RU', 'BY', 'UA', 'KZ', 'AM', 'AZ', 'KG', 'TJ', 'UZ'];
      
      if (cisCountries.includes(data.country_code)) {
		window.location.replace('/about/ru' + window.location.search);
        return;
      }
    } catch (e) {
      console.error("Ошибка геодетекции:", e);
    }

    // Fallback
	window.location.replace('/about/en' + window.location.search);
  })();
</script>

<noscript>
  <!-- Если в браузере отключен JS -->
  <p>Please choose your language / Пожалуйста, выберите язык:</p>
  <ul>
    <li><a href="/ru/">Русский</a></li>
    <li><a href="/en/">English</a></li>
  </ul>
</noscript>
