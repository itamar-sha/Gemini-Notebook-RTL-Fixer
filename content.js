function fixRTL() {
    document.querySelectorAll('.paragraph, .message-text-content, p, li, h1, h2, h3, h4, h5, h6').forEach(el => {
        if (el.dataset.rtlFixed) return;
        if (el.closest('pre')) return;
        
        if (/[\u0590-\u05FF]/.test(el.textContent)) {
            el.style.direction = 'rtl';
            el.style.textAlign = 'right';
            el.dataset.rtlFixed = 'true';
        }
    });
}

fixRTL();


const observer = new MutationObserver(fixRTL);
observer.observe(document.body, { childList: true, subtree: true });