let a = 13, h = 8;

function parallelogramArea(){
    return a * h;
}

let Block5Content = document.getElementById('block5');

let outputDiv = document.createElement('div');
outputDiv.textContent = 'Area of the parallelogram  is ' + parallelogramArea() + ' cm²';
outputDiv.style.textAlign = 'center';
outputDiv.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
outputDiv.style.backgroundColor = '#eaf1dd';

outputDiv.style.height = '15%';
outputDiv.style.display = 'flex';
outputDiv.style.flexDirection = 'column';
outputDiv.style.justifyContent = 'center';

Block5Content.appendChild(outputDiv);