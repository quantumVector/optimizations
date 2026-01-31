"use strict";
function initApp() {
    const element = document.getElementById('elem-2');
    setTimeout(() => {
        if (element) {
            element.style.display = 'block';
        }
    }, 1500);
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
}
else {
    initApp();
}
