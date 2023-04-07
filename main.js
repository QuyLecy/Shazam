function myFunction() {
    var elms = document.getElementsByClassName("nav-menu-overlay");
    var btn = document.getElementById('icon');

    Array.from(elms).forEach((x) => {
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    })

}
function login() {
    //event.defaultPrevented();
    var emailname = document.getElementById('email-name').value;
    var user = {
        emailname: emailname
    }
    var user = localStorage.getItem(emailname);
    if (emailname === user) {
        window.location.replace = "index.html"
    }
    if (emailname == null) {
        alert("Vui lòng nhập email")
    } 
    if (emailname != user) {
        alert("Đăng nhập thất bại")
    }
}