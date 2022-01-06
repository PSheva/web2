function CreateLocalStorage(){
    let ol = document.getElementById('list');
    let arrayOfLi = ol.children;
    let arrayOfText = new Array();
    for (let i = 0; i < arrayOfLi.length; i++){
        //console.log(arrayOfLi[i].innerText);
        arrayOfText.push(arrayOfLi[i].innerText);
    }
    console.log(arrayOfText);
    localStorage.setItem('li', JSON.stringify(arrayOfText));
}

window.onload = function () {
    localStorage.removeItem('li');
}