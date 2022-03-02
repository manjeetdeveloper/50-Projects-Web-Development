const panels = document.querySelectorAll('.panal');

panels.forEach(panal => {
    panal.addEventListener('click', () => {
        removeACTClass();
        panal.classList.add('active');
    })
})

function removeACTClass() {
    panels.forEach(panal => {
        panal.classList.remove('active');
    })
}