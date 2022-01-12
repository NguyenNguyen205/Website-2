function set() {
        var r = document.querySelector(':root');
        var rs = getComputedStyle(r);
        if (rs.getPropertyValue('--text') == 'white') {
            var ele = document.getElementById("background");
            ele.classList.add("sky_change");

            var r = document.querySelector(':root');
            r.style.setProperty('--text','black');

            var sea = document.getElementById("reflection-container");
            sea.style.display = "none";
            var sun = document.getElementById("sun");
            sun.style.opacity = "1";
        }
        else {
            ele = document.getElementById("background");
            ele.classList.remove("sky_change");
            r = document.querySelector(':root');
            r.style.setProperty('--text','white');
            sea = document.getElementById("reflection-container");
            sea.style.display = "block";
            sun = document.getElementById("sun");
            sun.style.opacity = "0";
        }
       }

const contains = document.querySelectorAll(".container");
const lines = document.querySelectorAll("hr");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("intersection", entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(entry.target)
        })
    },
    {
        threshold: 0.4,
    }
)
const observer2 = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("line-appear", entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(entry.target)
        })
    }
)
contains.forEach(contain => {
    observer.observe(contain);
})

lines.forEach(line => {
    observer2.observe(line);
})

function appear() {
        var wind = document.getElementById('box-context1');
        wind.style.display = "block";
        wind.style.animation = "appear 1s linear";
}

function close_window() {
       var wind = document.getElementById('box-context1');
       wind.style.display = "none";
}
function appear2() {
        var wind = document.getElementById('box-context2');
        wind.style.display = "block";
        wind.style.animation = "appear 1s linear";
}

function close_window2() {
       var wind = document.getElementById('box-context2');
       wind.style.display = "none";
}
function appear3() {
        var wind = document.getElementById('box-context3');
        wind.style.display = "block";
        wind.style.animation = "appear 1s linear";
}

function close_window3() {
       var wind = document.getElementById('box-context3');
       wind.style.display = "none";
}function appear4() {
        var wind = document.getElementById('box-context4');
        wind.style.display = "block";
        wind.style.animation = "appear 1s linear";
}

function close_window4() {
       var wind = document.getElementById('box-context4');
       wind.style.display = "none";
}function appear5() {
        var wind = document.getElementById('box-context5');
        wind.style.display = "block";
        wind.style.animation = "appear 1s linear";
}

function close_window5() {
       var wind = document.getElementById('box-context5');
       wind.style.display = "none";
}function appear6() {
        var wind = document.getElementById('box-context6');
        wind.style.display = "block";
        wind.style.animation = "appear 1s linear";
}

function close_window6() {
       var wind = document.getElementById('box-context6');
       wind.style.display = "none";
}function appear7() {
        var wind = document.getElementById('box-context7');
        wind.style.display = "block";
        wind.style.animation = "appear 1s linear";
}

function close_window7() {
       var wind = document.getElementById('box-context7');
       wind.style.display = "none";
}function appear8() {
        var wind = document.getElementById('box-context8');
        wind.style.display = "block";
        wind.style.animation = "appear 1s linear";
}

function close_window8() {
       var wind = document.getElementById('box-context8');
       wind.style.display = "none";
}function appear9() {
        var wind = document.getElementById('box-context9');
        wind.style.display = "block";
        wind.style.animation = "appear 1s linear";
}

function close_window9() {
       var wind = document.getElementById('box-context9');
       wind.style.display = "none";
}