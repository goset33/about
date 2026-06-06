function initShowcase() {
    if (typeof GLightbox === 'undefined') return;

    const showcases = document.querySelectorAll('.showcase:not(.initialized)');
    showcases.forEach((showcase) => {
        showcase.classList.add('initialized');

        const originalImages = Array.from(showcase.querySelectorAll('img'));
        const validImages = originalImages.filter(img => img.src && !img.src.endsWith('x'));
        if (validImages.length === 0) return;

        const galleryElements = validImages.map(img => ({
            href: img.src,
            type: 'image'
        }));

        const lightbox = GLightbox({
            elements: galleryElements,
            touchNavigation: true,
            loop: true,
            zoomable: true
        });

        const wrapper = document.createElement('div');
        wrapper.className = 'sc-wrapper';

        // Главная картинка
        const mainContainer = document.createElement('div');
        mainContainer.className = 'sc-main-container';
        const mainImg = document.createElement('img');
        mainImg.className = 'sc-main-img';
        mainImg.src = validImages[0].src;
        mainContainer.appendChild(mainImg);

        // Блок миниатюр
        const thumbContainer = document.createElement('div');
        thumbContainer.className = 'sc-thumb-container';

        validImages.forEach((img, i) => {
            const thumb = document.createElement('img');
            thumb.src = img.src;
            thumb.className = 'sc-thumb';
            if (i === 0) thumb.classList.add('active');
            thumbContainer.appendChild(thumb);

            // Клик по миниатюре 
            thumb.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                mainImg.src = thumb.src;
                mainImg.dataset.idx = i;

                thumbContainer.querySelectorAll('.sc-thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');

                const scrollTarget = thumb.offsetLeft - (thumbContainer.clientWidth / 2) + (thumb.clientWidth / 2);
                thumbContainer.scrollTo({ left: scrollTarget, behavior: 'smooth' });
            });
        });

        mainImg.dataset.idx = 0;

        // Клик по большой картинке
        mainContainer.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const currentIdx = parseInt(mainImg.dataset.idx);
            lightbox.openAt(currentIdx);
        });

        wrapper.appendChild(mainContainer);
        wrapper.appendChild(thumbContainer);

        showcase.style.display = 'none';
        showcase.parentNode.insertBefore(wrapper, showcase);
    });
}

// Стили для GLightbox
if (!document.getElementById('glightbox-css')) {
    const link = document.createElement('link');
    link.id = 'glightbox-css';
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css';
    document.head.appendChild(link);
}

// Сам GLightbox
if (!document.getElementById('glightbox-script')) {
    const script = document.createElement('script');
    script.id = 'glightbox-script';
    script.src = 'https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js';
    script.onload = initShowcase;
    document.head.appendChild(script);
} else {
    initShowcase();
}

document.addEventListener('nav', initShowcase);