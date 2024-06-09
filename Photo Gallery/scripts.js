document.querySelectorAll('.photo').forEach(photo => {
    photo.addEventListener('mouseenter', () => {
        const details = photo.querySelector('.details');
        details.style.display = 'block';
    });

    photo.addEventListener('mouseleave', () => {
        const details = photo.querySelector('.details');
        details.style.display = 'none';
    });
});
