var arrow = document.querySelector('.arrow');

document.onmousemove = (event) => {
    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";

    arrow.style.transition = "0s";
    arrow.style.left = x;
    arrow.style.top = y;
    console.log(x,y)
}

document.onmouseout = (event) => {
    arrow.style.transition = "0.7s";
    arrow.style.left = "50%";
    arrow.style.top = "50%";
}