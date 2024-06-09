let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

const btns = document.querySelectorAll('.btn-buy');
btns.forEach((btn) => {
    btn.addEventListener('click', () => {});
});
