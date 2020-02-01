let credits = "23580";
const pricePerDroid = "3000";
const howManyDroids = prompt("Сколько дроидов вы хотите приобрести?");
if (howManyDroids === null) {
  alert("Отменено пользователем!");
} else if (howManyDroids !== null) {
  const totalPrice = howManyDroids * pricePerDroid;
  if (totalPrice < credits) {
    credits -= totalPrice;
    alert(
      `Вы купили ${howManyDroids} дроидов, на счету осталось ${credits} кредитов`
    );
  } else if (totalPrice > credits) {
    alert("Недостаточно средств на счету!");
  }
}