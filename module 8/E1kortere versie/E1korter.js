// Thema laden uit localStorage
const opgeslagenThema = localStorage.getItem('achtergrondthema') || 'light';
document.body.classList.toggle('dark-theme', opgeslagenThema === 'dark');

const themeToggle = document.getElementById('themeToggle');
themeToggle.textContent = opgeslagenThema === 'dark' ? 'Light theme' : 'Dark theme';

// Eventlistener voor knop
themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');
    
    // Thema opslaan in localStorage
    localStorage.setItem('achtergrondthema', isDark ? 'dark' : 'light');

    // Knoptekst aanpassen
    themeToggle.textContent = isDark ? 'Light theme' : 'Dark theme';
});
