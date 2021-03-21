let point = document.getElementsByClassName('point');

document.onmousemove = function() {
    
    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";


    for (let i = 0; i < 2; i++ ){

        point[i].style.left = x;
        point[i].style.top = y;
        point[i].style.transform = "translate(-" + x +",-" + y +")";
    }
    
    
    console.log("x =" + x);
    console.log("y =" + y);
}

