/*function myFunction() {
    var elms = document.getElementsByClassName("nav-menu-overlay");
    var btn = document.getElementById('icon');


    Array.from(elms).forEach((x) => {
        if (x.style.display === "block") {
            x.style.display = "none";
            x.style.opacity = "0";
            
        } else {
            x.style.display = "block";
            x.style.opacity = "1";
        }
    })

}*/
var hint = document.getElementById('hint');
var btnopen = document.getElementById('open');
var btnclose = document.getElementById('close');

btnopen.addEventListener('click', function() {
    var ctr = 1;
    hint.className = hint.className !== 'show' ? 'show' : 'hide';
    if (hint.className === 'show') {
        hint.style.display = 'block';
        window.setTimeout(function() {
            hint.style.opacity = 1;
            hint.style.transform = 'scale(1)';
        }, 0);
    }
    if (hint.className === 'hide') {
        hint.style.opacity = 0;
        hint.style.transform = 'scale(0)';
        window.setTimeout(function() {
            hint.style.display = 'none';
        }, 500);
    }

});
btnclose.addEventListener('click', function() {
    var ctr = 1;
    hint.className = hint.className !== 'show' ? 'show' : 'hide';
    if (hint.className === 'show') {
        hint.style.display = 'block';
        window.setTimeout(function() {
            hint.style.opacity = 1;
            hint.style.transform = 'scale(1)';
        }, 0);
    }
    if (hint.className === 'hide') {
        hint.style.opacity = 0;
        hint.style.transform = 'scale(0)';
        window.setTimeout(function() {
            hint.style.display = 'none';
        }, 500);
    }

});
var http = new XMLHttpRequest();

function getId() {

    http.open("GET", "https://shazamteam15-default-rtdb.firebaseio.com/posts.json", true);
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            obj(JSON.parse(this.responseText));


        }
    };


    function obj(lessons) {
        for (var lesson of lessons) {
            if (lesson.username == document.getElementById('Username-signin').value) {
                if (lesson.password == document.getElementById('Password-signin').value) {
                    console.log("Đăng nhập thành công");
                    alert("Đăng nhập thành công");
                    location.href = "/index.html";

                }
            }
        }

        //console.log("lessons");
    }
    location.href = "/login.html";

    http.send();
}

function pushId() {


    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let obj = (JSON.parse(this.responseText));
        }
    };
    http.open("POST", "https://shazamteam15-default-rtdb.firebaseio.com/post.json", true);
    let obj = { "user": document.getElementById('Username-signup').value, "email": document.getElementById('Email-signup').value, "password": document.getElementById('Password-signup').value };
    let data = JSON.stringify(obj);
    console.log(data);
    location.href = "/login.html";
    http.send(data);
    alert("Đăng ký thành công");
}
var dark = document.getElementById("dark");
var ctr = 0;
dark.onclick = function() {
    document.body.classList.toggle("dark-mode")
    if (ctr == 0) {
        ctr = 1;
        document.getElementById("shazamic").src = "icon/Shazam_white_logo.png"
    } else {
        ctr = 0;
        document.getElementById("shazamic").src = "icon/Temp.png"
    }

}