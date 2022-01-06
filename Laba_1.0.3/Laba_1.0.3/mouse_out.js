let buff = document.getElementById("main").children;

function b2ringt(){
    if(document.getElementById('b2').checked) {
        buff[0].children[0].style.textAlign = "right";
    }
    if(getCookie("block2")){
        buff[0].children[0].style.textAlign = "right";
    }
}
function b2center(){
    if(document.getElementById('b2').checked) {
        if(!getCookie("block2")){
            document.cookie = "block2=true";
        }
        buff[0].children[0].style.textAlign = "center";
    }
    if(getCookie("block2")){
        buff[1].children[1].style.textAlign = "center";
    }
}

function b5ringt(){
    if(document.getElementById('b5').checked) {
        buff[1].children[1].style.textAlign = "right";
    }
    if(getCookie("block5")){
        buff[1].children[1].style.textAlign = "right";
    }
}
function b5center(){
    if(document.getElementById('b5').checked) {
        if(!getCookie("block5")){
            document.cookie = "block5=true";
        }
        buff[1].children[1].style.textAlign = "center";
    }
    if(getCookie("block5")){
        buff[1].children[1].style.textAlign = "center";
    }
}

function b4ringt(){
    if(document.getElementById('b4').checked) {
        buff[2].children[1].style.textAlign = "right";
    }
    if(getCookie("block4")){
        buff[2].children[1].style.textAlign = "right";
    }
}
function b4center(){
    if(document.getElementById('b4').checked) {
        if(!getCookie("block4")){
            document.cookie = "block4=true";
        }
        buff[2].children[1].style.textAlign = "center";
    }
    if(getCookie("block4")){
        buff[2].children[1].style.textAlign = "center";
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

function DelCookies(){
    eraseCookieFromAllPaths("block2");
    eraseCookieFromAllPaths("block5");
    eraseCookieFromAllPaths("block4");
    alert("All cookies have been deleted 👌")
}
function eraseCookieFromAllPaths(name) {
    // This function will attempt to remove a cookie from all paths.
    var pathBits = location.pathname.split('/');
    var pathCurrent = ' path=';

    // do a simple pathless delete first.
    document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;';

    for (var i = 0; i < pathBits.length; i++) {
        pathCurrent += ((pathCurrent.substr(-1) != '/') ? '/' : '') + pathBits[i];
        document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' + pathCurrent + ';';
    }
}