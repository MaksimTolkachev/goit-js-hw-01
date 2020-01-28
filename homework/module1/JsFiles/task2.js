const total = 100;
const ordered = prompt("сколько товаров желаете заказать?");
if (ordered <= total) {
  alert("Заказ оформлен, с вами свяжется менеджер");
} else if (ordered > total) {
  alert("На складе недостаточно товаров!");
}
