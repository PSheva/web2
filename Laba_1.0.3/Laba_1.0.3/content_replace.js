let firstBlockTextContent = document.getElementById('block3').textContent;
let secondBlockTextContent = document.getElementById('block6').textContent;

let firstBlockText = document.getElementById('block3');
let secondBlockText = document.getElementById('block6');

firstBlockText.textContent = secondBlockTextContent;
secondBlockText.textContent = firstBlockTextContent;