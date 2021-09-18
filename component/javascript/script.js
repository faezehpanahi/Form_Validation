let form = document.getElementById("form");
let user_name = {
    element: document.getElementById("form-username"),
    error_massege: "username is not valid",
    patern: /^[a-zA-Z0-9_-]{5,15}$/,
    text_span: document.getElementById("span-username"),
};
let email = {
    element: document.getElementById("form-email"),
    error_massege: "email is not valid",
    patern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.]{2,})+\.([A-Za-z]{2,3})$/,
    text_span: document.getElementById("span-email"),
};
let password = {
    element: document.getElementById("form-password"),
    error_massege: [
        "password must be at least 6 characters. please enter number, upeercase letter and lowercase letter",
        "password is weak, you can enter confirm password",
        "password is mediom, you can enter confirm password",
        "password is strong, you can enter confirm password",
    ],
    patern: /^[a-zA-Z0-9!@#$%^&*]{6,20}$/,
    text_span: document.getElementById("span-pass"),
};
let password_repeat = {
    element: document.getElementById("form-password-repeat"),
    error_massege: "password2 is required",
    patern: /^[a-zA-Z0-9!@#$%^&*]{6,20}$/,
    text_span: document.getElementById("span-pass-repeat"),
};

form.addEventListener("submit", userName_validation);
user_name.element.addEventListener("blur", userName_validation);

form.addEventListener("submit", email_validation);
email.element.addEventListener("blur", email_validation);

form.addEventListener("submit", password_validation);
password.element.addEventListener("blur", password_validation);

form.addEventListener("submit", passwordRepeat_validation);
password_repeat.element.addEventListener("blur", passwordRepeat_validation);

function userName_validation(e) {
    e.preventDefault();
    if (
        user_name.element.value === "" ||
        !user_name.patern.test(user_name.element.value)
    ) {
        user_name.text_span.innerHTML = user_name.error_massege;
        user_name.element.style.borderColor = "red";
    } else {
        user_name.text_span.innerHTML = "";
        user_name.element.style.borderColor = "green";
    }
}

function email_validation(e) {
    e.preventDefault();
    if (email.element.value === "" || !email.patern.test(email.element.value)) {
        email.text_span.innerHTML = email.error_massege;
        email.element.style.borderColor = "red";
    } else {
        email.text_span.innerHTML = "";
        email.element.style.borderColor = "green";
    }
}

function password_validation(e) {
    e.preventDefault();
    let pass = password.element.value;
    let lowerCaseLetters = /[a-z]/;
    let upperCaseLetters = /[A-Z]/;
    let numbers = /[0-9]/;
    if (pass === "" || !password.patern.test(pass)) {
        password.text_span.innerHTML = password.error_massege[0];
        password.element.style.borderColor = "red";
        password.text_span.style.color = "red";
    }

    if (
        password.patern.test(pass) &&
        pass.match(upperCaseLetters) &&
        pass.match(lowerCaseLetters) &&
        pass.match(numbers) &&
        6 <= pass.length
    ) {
        password.element.style.borderColor = "orange";
        password.text_span.style.color = "orange";
        password.text_span.innerHTML = password.error_massege[1];
    }
    if (
        password.patern.test(pass) &&
        pass.match(upperCaseLetters) &&
        pass.match(lowerCaseLetters) &&
        pass.match(numbers) &&
        8 <= pass.length
    ) {
        password.element.style.borderColor = "rgb(202, 202, 0)";
        password.text_span.style.color = "rgb(202, 202, 0)";
        password.text_span.innerHTML = password.error_massege[2];
    }
    if (
        password.patern.test(pass) &&
        pass.match(upperCaseLetters) &&
        pass.match(lowerCaseLetters) &&
        pass.match(numbers) &&
        10 <= pass.length
    ) {
        password.element.style.borderColor = "green";
        password.text_span.style.color = "green";
        password.text_span.innerHTML = password.error_massege[3];
    }
    console.log(pass.length);
    // else {
    //     if (6 <= pass.length) {
    //         password.element.style.borderColor = "orange";
    //         password.text_span.style.color = "orange";
    //         password.text_span.innerHTML = password.error_massege[1];
    //     }
    //     if (8 <= pass.length) {
    //         password.element.style.borderColor = "rgb(202, 202, 0)";
    //         password.text_span.style.color = "rgb(202, 202, 0)";
    //         password.text_span.innerHTML = password.error_massege[2];
    //     }
    //     if (10 <= pass.length) {
    //         password.element.style.borderColor = "green";
    //         password.text_span.style.color = "green";
    //         password.text_span.innerHTML = password.error_massege[3];
    //     }
    // }
}

function passwordRepeat_validation(e) {
    e.preventDefault();
    if (
        password.element.value != password_repeat.element.value ||
        password_repeat.element.value === "" ||
        !password_repeat.patern.test(password_repeat.element.value)
    ) {
        password_repeat.text_span.innerHTML = password_repeat.error_massege;
        password_repeat.element.style.borderColor = "red";
    } else {
        password_repeat.text_span.innerHTML = "";
        password_repeat.element.style.borderColor = "green";
    }
}

function show_password() {
    if (password.element.type === "password") {
        password.element.type = "text";
    } else {
        password.element.type = "password";
    }
}

function show_password_confirm() {
    if (password_repeat.element.type === "password") {
        password_repeat.element.type = "text";
    } else {
        password_repeat.element.type = "password";
    }
}