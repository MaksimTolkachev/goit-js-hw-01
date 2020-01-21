const ADMIN_PASSWORD = "jqueryismyjam";
let password = prompt("Введите пароль");
if (password === "jqueryismyjam") {
  message = "Добро пожаловать!";
} else if (password === null) {
  message = "отменено пользователем!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}
alert(message);
