function showContent(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
    }
}

window.addEventListener('DOMContentLoaded', () => {
        // Tambahkan class blur saat awal
    document.body.classList.add('blurred');

    const startBtn = document.getElementById('start-btn');
    const overlay = document.getElementById('overlay');
    const audio = document.getElementById('bg-music');

    startBtn.addEventListener('click', () => {
            // Mulai musik
    audio.play().catch(e => console.error("Gagal memutar musik:", e));

            // Hilangkan overlay & blur
    overlay.style.display = 'none';
    document.body.classList.remove('blurred');
    });
});

