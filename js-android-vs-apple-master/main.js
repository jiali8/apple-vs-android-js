//event listener 
document.getElementById("android-btn").addEventListener("click", clickHandler);
document.getElementById("apple-btn").addEventListener("click", clickHandler2);


// event function 
function clickHandler() {
    document.getElementById("img1").src = "images/Android-Logo.jpg";
    document.getElementById("linkA").href = 'https://www.android.com/';
    document.getElementById("linkA").innerHTML = "Android Home"; 
    document.getElementById("linkA").style.backgroundColor = "#a4c93b";
    document.getElementById("body").style.backgroundColor = "#a4c93b";
}

function clickHandler2() {
    document.getElementById("img1").src = "images/Apple-Logo.jpg";
    document.getElementById("linkA").href = 'https://www.apple.com/';
    document.getElementById("linkA").innerHTML = "Apple Home"; 
    document.getElementById("linkA").style.backgroundColor = "#b6bcca";
    document.getElementById("body").style.backgroundColor = "#b6bcca";
}





