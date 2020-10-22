const bodyEl = document.querySelector('body');
const toggleBtn = document.querySelector('.theme-switch__toggle');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

export default function () {
    toggleBtn.addEventListener('change', onToggleBtnClick);
    bodyEl.classList.add(Theme.LIGHT);

    function onToggleBtnClick() {
        bodyEl.classList.toggle(Theme.DARK);
        bodyEl.classList.toggle(Theme.LIGHT);

        localStorage.setItem('theme', bodyEl.classList.value);
    }

    const updateView = () => {
        bodyEl.classList.add(localStorage.getItem('theme'));

        if (bodyEl.classList.contains(Theme.DARK)) {
            toggleBtn.checked = true;
            bodyEl.classList.remove(Theme.LIGHT);
        }   
    };

    updateView();
}

