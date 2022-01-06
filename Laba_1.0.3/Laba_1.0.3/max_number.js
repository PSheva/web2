function MaxNumber(){
    let val = document.getElementById('inputNumber').value;

    let array = val.split('');
    let maxNum= 0;
    for (let i = 0; i < array.length; i++){
        if(maxNum < array[i]){
            maxNum = array[i];
        }
    }
    document.cookie = `maxNumber=${maxNum}`;
    alert("Max number is "+ maxNum);


}
window.onload = function () {
    let maxNum = getCookie("maxNumber");
    if(maxNum){
        if(confirm("Max number is "+ maxNum + "\n If you click OK, the cookies will be deleted.")){
            document.cookie = "maxNumber=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            if(confirm("Cookies have been deleted! Click OK to reload the window...")){
                window.location.reload();
            }
        }
    }
}

function getCookie(cname){
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}