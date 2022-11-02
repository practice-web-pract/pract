const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
// прокрутка плавна
const menuLinks = document.querySelectorAll('[data-goto]');
// перевіряємо чи є ([data-goto])
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        // обєкт на який ми клікаймо (фактическе сама силка)
        const menuLink = e.target;
    // перевіряє чи заполнини дата атрибут і перевіряє чи є цей обєкти який вказаний в атрибуте
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            // отримаємо в константу сам цей обєкт
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            // вироховує переходи між роздідами, скріпт який рахуй 
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            // якщо меню відкрито
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            // це сама про крутка
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
