document.querySelectorAll('.color').forEach(color =>
    color.addEventListener('mouseenter', function () {
        document.querySelector('.center').style.backgroundColor = window.getComputedStyle(this).backgroundColor;
    }
    ));
