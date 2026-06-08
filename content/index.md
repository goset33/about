---
title: Redirecting...
layout: minimal
---

<script>
  (async function() {
    // Заходил ли пользователь ранее и выбирал ли язык вручную
    const savedLang = localStorage.getItem('user-language');
    if (savedLang === 'ru' || savedLang === 'en') {
      window.location.replace('/' + savedLang + '/');
      return;
    }

    // 2. Проверяем системный язык браузера
    const sysLang = navigator.language || navigator.userLanguage;
    if (sysLang.startsWith('ru') || sysLang.startsWith('be') || sysLang.startsWith('uk') || sysLang.startsWith('kk')) {
      window.location.replace('/ru/');
      return;
    }

    // 3. Если системный язык не совпал (например, у иностранца стоит EN, но он в РФ, или наоборот),
    //    делаем быструю проверку по IP через бесплатное API (country-level)
    try {
      const response = await fetch('https://ipapi.co');
      const data = await response.json();
      const cisCountries = ['RU', 'BY', 'UA', 'KZ', 'AM', 'AZ', 'KG', 'TJ', 'UZ'];
      
      if (cisCountries.includes(data.country_code)) {
        window.location.replace('/ru/');
        return;
      }
    } catch (e) {
      console.error("Ошибка геодетекции:", e);
    }

    // 4. Резервный вариант (Fallback) — если ничего не подошло или API недоступно, отдаем английский
    window.location.replace('/en/');
  })();
</script>

<noscript>
  <!-- Если в браузере отключен JS, показываем ссылки вручную -->
  <p>Please choose your language / Пожалуйста, выберите язык:</p>
  <ul>
    <li><a href="/ru/">Русский</a></li>
    <li><a href="/en/">English</a></li>
  </ul>
</noscript>
