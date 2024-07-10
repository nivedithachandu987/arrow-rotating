document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const arrow = button.querySelector('.arrow');

        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.style.display = 'none';
                item.previousElementSibling.querySelector('.arrow').style.transform = 'rotate(0deg)';
            }
        });

        if (content.style.display === 'block') {
            content.style.display = 'none';
            arrow.style.transform = 'rotate(0deg)';
        } else {
            content.style.display = 'block';
            arrow.style.transform = 'rotate(180deg)';
        }
    });
});
