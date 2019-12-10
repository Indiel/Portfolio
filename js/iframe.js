const btnMobile = document.querySelector('.btn--mobile');
const btnDesktop = document.querySelector('.btn--desktop');

let iframeWrapper = document.querySelector('.iframe-wrapper');

if (iframeWrapper.offsetWidth > 768) {
    btnDesktop.addEventListener('click', () => {
        iframeWrapper.style.width = '100%';
    
        btnMobile.style.display = 'block';
        btnDesktop.style.display = 'none';
    });
    
    btnMobile.addEventListener('click', () => {
        if (iframeWrapper.classList.contains('repair')) {
            iframeWrapper.style.width = '375px';
        } else {
            iframeWrapper.style.width = '640px';
        }
    
        btnMobile.style.display = 'none';
        btnDesktop.style.display = 'block';
    });
}
