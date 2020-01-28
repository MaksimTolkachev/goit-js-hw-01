let credits = "23580";
const pricePerDroid = "3000";
const howManyDroids = prompt("Сколько дроидов вы хотите приобрести?");
let totalPrice = howManyDroids * pricePerDroid;
if (howManyDroids === null) {
  alert("Отменено пользователем!");
} else if (totalPrice < credits && howManyDroids !== null) {
  credits -= totalPrice;
  alert(
    `Вы купили ${howManyDroids} дроидов, на счету осталось ${credits} кредитов`
  );
} else if (totalPrice > credits) {
  alert("Недостаточно средств на счету!");
}
