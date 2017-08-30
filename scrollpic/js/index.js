window.onload = function () {
    function setImg(array) {
        var pic = document.querySelectorAll('.pic');
        for (let i = 0; i < pic.length; i++) {
            pic[i].style.backgroundImage = 'url(' + array[i] + ')';
        }
    }
    setImg(["img/1.jpg", "img/2.jpg", "img/3.jpg"]);

    function btnControl() {
        var btn = getBtns(),
            picList = document.querySelector('.pic-list');
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', function () {
                picList.style.left = i * (-100) + 'vw';
                setColor(this);
            });
        }
    }
    btnControl();

    function autoPlay() {
        var btnArray = getBtns(),
            picList = document.querySelector('.pic-list'),
            i = 1;
        setInterval(function () {
            if (i === btnArray.length) {
                i = 0;
            }
            picList.style.left = i * (-100) + 'vw';
            setColor(btnArray[i]);
            i = i + 1;
            console.log(i);
        }, 3900)
    }
    // autoPlay();

    function setColor(e) {
        var btnArray = getBtns();
        var currentVal = e.getAttribute('class');
        for (let i = 0; i < btnArray.length; i++) {
            btnArray[i].setAttribute("class", "btn");
        }
        currentVal = " " + currentVal + " ";
        currentVal = currentVal.concat(" active");
        e.setAttribute("class", currentVal);
    }

    function getBtns() {
        return document.querySelectorAll('.btn');
    }
}