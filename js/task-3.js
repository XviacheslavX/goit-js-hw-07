const input = document.querySelector('#name-input')
const h1 = document.querySelector('#name-output')
input.addEventListener('input', () => {
    const trimedValue = input.value.trim();
    h1.textContent = trimedValue === '' ? 'Anonymous' : trimedValue;
});