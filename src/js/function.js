"use strict";

/**
 * function for proffile `notification` and function for `notification`
 */
function notification () {
    let string = "<div class='notification-child'> <div><input type='checkbox' value='0'></div><div><span>Let input quest</span></div></div><div class='notification-child'><div><input type='checkbox' value='0'></div><div><span>Let dont input quest</span></div></div> <input type='text'>",
        div = document.createElement('div');
    
    div.classList = "div-notification";
    div.innerHTML = string;

    swal({
        title: "Notification",
        content: div,
        icon: "success"
    })
    .then((value) => {
        swal(`${value}`);
    });
    activeCheckbox();
}

function activeCheckbox () {
    let checkbox = document.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('checked', () => {
        checkbox.classList = "checkbox-active";
    });
}

/**
 * function `Cansel`
 */
function clickCansel () {
    swal("Отмена", "Операция отменена пользователем!", "info");
}

/**
 * function `Error`
 */
function clickError (text) {
    swal("Ошибка!", text, "error");
}

