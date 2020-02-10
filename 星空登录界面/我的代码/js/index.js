$(function () {

     //自动居中title
     var name_c = document.getElementById("title")
     name = name_c.innerHTML.split("")
     name_c.innerHTML = ""
     for (i = 0; i < name.length; i++)
         if (name[i] != ",")
             name_c.innerHTML += "<i>" + name[i] + "</i>"

    // 点击登录 login为true
    var login = true;
    var confirm = document.getElementsByClassName("confirm")[0];

    $("#login_btn").click(function () { 
        if (login) {
            /*let request = new XMLHttpRequest()
            let url = ""
            request.open("post", url, true)
            let data = new FormData()
            data.append("user", user.value)
            data.append("passwd", passwd.value)
            request.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.responseText == false)
                        hint()
                    else
                        window.location.href = this.responseText;
                }
            }
            request.send(data)*/
        } else {
            let status = document.getElementById("status").getElementsByTagName("i")
            confirm.style.height = 0
            status[0].style.top = 0
            status[1].style.top = 35 + "px"
            login = !login
        }
    });

    $("#signin_btn").click(function () { 
        let status = document.getElementById("status").getElementsByTagName("i")
        let hit = document.getElementById("hint").getElementsByTagName("p")[0]
        if (login) {
            confirm.style.height = 51 + "px"
            status[0].style.top = 35 + "px"
            status[1].style.top = 0
            login = !login
        } else {
            /*if (!/^[A-Za-z0-9]+$/.test(user.value))
                hit.innerHTML = "账号只能为英文和数字"
            else if (user.value.length < 6)
                hit.innerHTML = "账号长度必须大于6位"
            else if (passwd.value.length < 6)
                hit.innerHTML = "密码长度必须大于6位"
            else if (passwd.value != con_pass.value)
                hit.innerHTML = "两次密码不相等"
            else if (passwd.value = con_pass.value) {
                submit(function(res) {
                    if (res == "exist")
                        hit.innerHTML = "该账号已存在"
                    else if (res == true) {
                        hit.innerHTML = "账号注册成功，两秒后自动刷新页面"
                        setTimeout("window.location.reload()", 2000)
                    } else if (res == false)
                        hit.innerHTML = "账号注册失败"
                })
            }
            hint()*/
        }
    });

});