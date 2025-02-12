const btn = document.querySelector('.kredit-button button');
btn.disabled = true;
function check() {
    btn.disabled = !document.getElementById('check').checked;
}