function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;

    let ol = document.getElementById('list');

    let li = document.createElement('li');
    ol.appendChild(li);
    li.innerText = selection;


}
const input = document.querySelector('input');
input.addEventListener('select', logSelection);