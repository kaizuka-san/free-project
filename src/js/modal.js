'use strict';

/**
 * Main parametr
 */
let proffile = document.querySelector('.id-proffile'),
    logOut = document.querySelector('.log-out'),
    account = document.querySelector('.proffile-account'),
    elProffile = document.querySelector('.proffile'),
    elLogIn = document.querySelector(".log-in"),
    logIn = document.querySelector(".log_in"),
    conAdmin = document.querySelector(".connect-admin"),
    signUp = document.querySelector('.sign-up'),
    elDiv = document.createElement("div"),
    elDivSign = document.createElement("div"),
    elDivConnect = document.createElement("div"),
    string = "<p><img src='src/img/profile/administrator/persona-5.jpg' class='img-proffile-modal'></p><a href='index.html'><div class='link-proffile-one'>Перейти в профиль</div></a><br><a href='index.html'><div class='link-proffile-two'>Настройки</div></a><br><a href='#' onclick='notification()'><div class='link-proffile-tree'>Уведомления</div></a>",
    stringSignUp = "<div class='sign-up-div'><p><input type='text' placeholder='Логин' class='login-sign'></p><p><input type='email' placeholder='Электронная почта' class='email-sign'></p><p><input type='password' class='pass-first' placeholder='Введите пароль'></p><p><input type='password' class='pass-last' placeholder='Повторите пароль'></p></div>",
    stringConnect = "<div class='main-connect-div'><div><p>Введите ваш E-mail:</p><input class='input-email-connect' type='email' placeholder='Электронная почта'></div><div><p>Опишите вашу проблему <b class='help-connect' title='Максимальное количество символов 10000'>*<b>:</p><textarea class='textarea-text-connect' maxlength='10000' placeholder='Написать письмо администрации'  rows='12'></textarea></div></div>";

/**
 * Div create class and edit parametr
 */
elDiv.classList = 'div-modal-proffile'
elDiv.innerHTML = string;

elDivSign.innerHTML = stringSignUp;

elDivConnect.innerHTML = stringConnect;

/**
 * E-mail window for connect `admin`
 */
conAdmin.addEventListener('click', function () {
    swal({
        title: "Обратная связь",
        content: elDivConnect,
        buttons: {
            cansel: {
                text:"Отмена",
                value: 0
            },
            confirm: {
                text:"Отправить",
                value: 1
            }
        },
        closeOnClickOutside: false,
        closeOnEsc: false
    })
    .then((value) => {
        let email = document.querySelector('.input-email-connect').value,
            text = document.querySelector('.textarea-text-connect').value;
        if (value == 1) {
            if (email !== "" && text !== "") {
                swal(`Письмо отправлено`, `${email} + ${text}`, "success");
            } else { swal("Ошибка!", `Не корректно введены данные!`, "error"); }
        } else { clickCansel(); }
    })
});

/**
 * Form registration users
 */
signUp.addEventListener('click', function () {
    swal({
        title: "Регистрация",
        text: "Зарегистрировать нового пользователя!",
        icon: "success",
        content: elDivSign,
        buttons: {
            cansel: {
                text: "Отмена",
                value: 0,
            },
            confirm: {
                value: 1,
                text: "Ок",
            }
        },
    })
    .then((value) => {
        let login = document.querySelector(".login-sign").value,
            email = document.querySelector('.email-sign').value,
            password = document.querySelector(".pass-first").value,
            rePassword = document.querySelector('.pass-last').value;
        if (value == 1) {
            swal(`${login}, ${email}, ${password}, ${rePassword}`);
            if (login == "" || login == null && email == null || email != "" && password == "" || password == null && rePassword == '' || rePassword == "") {
                clickError("Не корректно введены данные!");
            } else if (password == rePassword) {
                swal({
                    title: "Поздравляю!",
                    text: "Вы успешно зарегистрированы",
                    icon: "success",
                });
                let user = {
                    login: login,
                    email: email,
                    password: rePassword
                },
                    userSerialize = JSON.stringify(user),
                    index = Math.random() * 1000;
                localStorage.setItem('user_' + index, userSerialize)
            }
        } else {
            clickCansel();
        }
    })
});

/**
 * Open window proffile
 */
proffile.addEventListener("click", function () {
    swal({
        content: elDiv,
        button: false
    });
});

/**
 * Form autorization users
 */
logIn.addEventListener("click", function () {
    const imgIcon = 'src/img/icon/user-form.png';
    swal({
        title: 'Введите ваш логин!',
        buttons: {
            cansel: 'Отмена',
            confirm: "Далее"
        },
        icon: imgIcon,
        content: {
            element: 'input',
            placeholder: 'Логин'
        }
    })
    .then((value) => {
        let login = value;
        localStorage.setItem("login", login);
        if (login == "admin") {
            swal({
                title: 'Подтверждение!',
                text: `Привет ${value}, введите пароль для завершения авторизации`,
                buttons: {
                    cansel: 'Отмена',
                    confirm: "Подтвердить"
                },
                icon: "success",
                content: {
                    element: 'input',
                    attributes: {
                        placeholder: 'Пароль',
                        type: "password"
                    }
                }
            })
            .then((value) => {
                let password = value;
                localStorage.setItem("password", password);
                if (password == 'admin') {
                    swal({
                        text: "Вы успешно авторизовались!", 
                        icon: "success"
                    });
                    elProffile.style.display = 'block';
                    elLogIn.style.display = "none";
                    account.textContent = login;
                    localStorage.removeItem("password");
                } else { 
                    swal("Ошибка!!!", `Не корректно введён пароль!`, "error");
                    localStorage.clear();
                }
            })
        } else if (login == "cansel") {
            swal("Отмена!", `Авторизация отменена!`, "warning");
            localStorage.clear();
        } else {
            swal("Ошибка!!!", `Логин не найден`, "error");
            localStorage.clear();
        }
    });
});

/**
 * LogOut proffile 
 */
logOut.addEventListener('click', function () {
    swal({
        title: 'You Log Out?',
        icon: "warning",
        dangerMode: true,
        buttons: {
            cansel: "cansel",
            confirm: "ok"
        }
    })
    .then((value) => {
        if (value == true || value == "ok") {
            elProffile.style.display = 'none';
            elLogIn.style.display = "block";
            localStorage.clear();
        } else {
            clickCansel();
        }
        // swal(`${value}`);
    })

});

/**
 * Reklama
 */
// setInterval(`swal({ title: "Надоедливая реклама!!!", text: "Какой-нибудь текст", timer: 3000, buttons: false})`, 5000);