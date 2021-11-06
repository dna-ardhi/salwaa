if (localStorage.getItem('theme') == 'dark')
    setDarkMode()

function setDarkMode(isDark) {
    isDark = document.body.classList.toggle('darkmode')

    if (isDark) {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.removeItem ('theme')
    }
}