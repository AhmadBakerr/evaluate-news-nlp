import './styles/main.scss';

document.getElementById('submitBtn').addEventListener('click', () => {
    console.log('تم الضغط على الزر');
});
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(() => console.log('Service Worker مسجل بنجاح!'))
            .catch(error => console.log('فشل تسجيل Service Worker:', error));
    });
}
